const weapons__list = document.querySelector(".weapons__list");
const armors__list = document.querySelector(".armors__list");

let money = Number(localStorage.getItem("money"));
let weapons = [];
let armors = [];
let goods = ['10w','25w','50w',"10a","50a","100a",
"0ws", "50ws", "150ws", "20as", "50as", "100as"];
let small_heal = Number(localStorage.getItem("small_heal"));
let big_heal = Number(localStorage.getItem("big_heal"));

getArrayFromStroke(localStorage.getItem("weapons"), weapons);
getArrayFromStroke(localStorage.getItem("armors"), armors);
document.getElementById("money").innerHTML = money;
document.getElementById("small_heal").innerHTML = small_heal;
document.getElementById("big_heal").innerHTML = big_heal;

function buy__it(i, price) {
  let title;
  if (money - parseInt(goods[i-1+price]) >= 0) {
    money -= parseInt(goods[i-1+price]);
    if (goods[i-1][goods[i-1].length-1] == "w") {
      weapons[i-1] = parseInt(goods[i-1]);
      title = document.getElementById(`buy__weapon__${i}`);
      localStorage.setItem('weapons', weapons);
    }
    else if (goods[i-1][goods[i-1].length-1] == "a") {
      armors[i-1-3] = parseInt(goods[i-1]);
      title = document.getElementById(`buy__armor__${i}`);
      localStorage.setItem('armors', armors);
    }
    title.innerHTML = "куплено";
    document.getElementById("money").innerHTML = money;
    localStorage.setItem("money", money);
  } else {
    alert("у вас недостаточно средств!");
  }
}

function getArrayFromStroke(stroke__s, array) {
  let s = '';
  for (let i = 0; i - 1 < stroke__s.length; i++) {
    if (stroke__s[i] == "," || stroke__s[i] === undefined) {
      if (stroke__s[0] === undefined) break;
      array.push(Number(s));
      s = '';
    } else {
      s += stroke__s[i];
    }
  }
  return array;
}

function buy__heal(money, type__of__heal) {
  if (type__of__heal == 'small') {
    if (money >= 5) {
      money -= 5;
      small_heal += 1;
      document.getElementById("money").innerHTML = money;
      document.getElementById("small_heal").innerHTML = small_heal;
      localStorage.setItem("money", money);
      localStorage.setItem("small_heal", small_heal);
      return money;
    } else alert("у вас недостаточно средств!");
  } else if (type__of__heal == 'big') {
    if (money >= 10) {
      money -= 10;
      big_heal += 1;
      document.getElementById("money").innerHTML = money;
      document.getElementById("big_heal").innerHTML = big_heal;
      localStorage.setItem("money", money);
      localStorage.setItem("big_heal", big_heal);
      return money;
    } else {
      alert("у вас недостаточно средств!");
      return money;
    }
  }
}

let weapon__i = [], armor__i = [];
let count__w = 0, count__a = 0;
let count = 0;
let price = 6;
for (let i = 1; i-1 < goods.length; i++) {
  if (goods[i-1][goods[i-1].length - 1] === "w") {
    count++;
    if (weapons[i-1] == 0) {
      weapon__i.push(document.createElement("li"));
      weapon__i[count__w].setAttribute("class", "equipment__list-item");
      console.log("s");
      weapon__i[count__w].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/меч_${i}.jpg"
      alt="меч_${i}"><ul class="price__value"><li class="price__value-item">
      цена = <span id="price__weapon__${i}"></span></li><li class="price__value-item">
      урон = <span>${parseInt(goods[i-1])}</span></li></ul>
      <button onclick="buy__it(${i}, ${price})" class="buy__button">
      <span id="buy__weapon__${i}">купить</span></button></div>`;
      weapons__list.appendChild(weapon__i[count__w]);
      count__w++;
    }
  } else if (goods[i-1][goods[i-1].length - 1] === "a") {
    count++;
    if (armors[i-3-1] == 0) {
      armor__i.push(document.createElement("li"));
      armor__i[count__a].setAttribute("class", "equipment__list-item");
      armor__i[count__a].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/броня_${i-3}.jpg"
      alt="броня_${i-3}"><ul class="price__value"><li class="price__value-item">
      цена = <span id="price__armor__${i}"></span></li><li class="price__value-item">
      защита = <span>${parseInt(goods[i-1])}</span></li></ul>
      <button onclick="buy__it(${i}, ${price})" class="buy__button">
      <span id="buy__armor__${i}">купить</span></button></div>`;
      armors__list.appendChild(armor__i[count__a]);
      count__a++;
    }
  } else if (goods[i-1][goods[i-1].length - 2]
    + goods[i-1][goods[i-1].length - 1] === "ws") {
    let kl = document.getElementById("price__weapon__" + (i-count));
    if (kl != null) {kl.innerHTML = parseInt(goods[i-1]);}
  } else if (goods[i-1][goods[i-1].length - 2]
    + goods[i-1][goods[i-1].length - 1] === "as") {
    let kl = document.getElementById("price__armor__" + (i-count));
    if (kl != null) kl.innerHTML = parseInt(goods[i-1]);
  }
}
if (count__a > 0) {
  document.getElementById("title__armors").innerHTML = "Броня :";
}
if (count__w > 0) {
  document.getElementById("title__weapons").innerHTML = "Оружие :";
}
if (count__a + count__w == 0) {
  document.getElementById("title").innerHTML = "Кузница пуста";
}
