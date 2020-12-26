let money = Number(localStorage.getItem("money"));
let weapons = localStorage.getItem("weapons");
let armors = localStorage.getItem("armors");
let weapons__s = [], armors__s = [];
let goods = ['10w','25w','50w',"10a","50a","100a",
"0ws", "250ws", "500ws", "100as", "250as", "500as"];
document.getElementById("money").innerHTML = money;

function getArrayFromStroke(stroke__s, array__s) {
  let s = '';
  for (let i = 0; i-1 < stroke__s.length; i++) {
    if (stroke__s[i] == "," || stroke__s[i] === undefined) {
      array__s.push(Number(s));
      s = '';
    } else {
      s += stroke__s[i];
    }
  }
  return array__s;
}

function buy__bottle(money) {
  if (money >= 5) {
    money -= 5;
    heal_b += 1;
    document.getElementById("money").innerHTML = money;
    document.getElementById("heal_b").innerHTML = heal_b;
    localStorage.setItem("money", money);
    localStorage.setItem("heal_b", heal_b);
    return money;
  } else {
    alert("у вас недостаточно средств!");
  }
}

getArrayFromStroke(weapons, weapons__s);
getArrayFromStroke(armors, armors__s);

let weapon__i = [], armor__i = [];
let i_i = [];
const weapons__list = document.querySelector(".weapons__list");
const armors__list = document.querySelector(".armors__list");
let count__w = 0;
let count__a = 0;
for (let i = 1; i-1 < goods.length; i++) {
  if (goods[i-1][goods[i-1].length - 1] === "w") {
    for (let j = 1; j-1 < weapons__s.length; j++) {
      if (weapons__s[j-1] == parseInt(goods[i-1])) {
        i_i.push(i);
        break;
      }
    } if (i_i[i-1]*0 != 0) i_i.push(0);
  } else if (goods[i-1][goods[i-1].length - 1] === "a") {
    for (let j = 1; j-1 < armors__s.length; j++) {
      if (armors__s[j-1] == parseInt(goods[i-1])) {
        i_i.push(i);
        break;
      }
    }
    if (i_i[i-1]*0 != 0) i_i.push(0);
  }
}
let count = 0;
for (let i = 1; i-1 < goods.length; i++) {
  if (goods[i-1][goods[i-1].length - 1] === "w") {
    count++;
    if (i_i[i-1] != i) {
      weapon__i.push(document.createElement("li"));
      weapon__i[i - count__w -1].setAttribute("class", "equipment__list-item");
      weapon__i[i - count__w -1].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/меч_${i}.jpg"
      alt="меч_${i}">цена = <span id="price__weapon__${i}"></span>урон = <span>${parseInt(goods[i-1])}</span>
      <button onclick="equip(${i}, 'weapon')" class="buy__button">
      <span id="buy__weapon__${i}">купить</span></button></div>`;
      weapons__list.appendChild(weapon__i[i - count__w -1]);
    } else count__w++;
  } else if (goods[i-1][goods[i-1].length - 1] === "a") {
    count++;
    if (i_i[i-1] != i) {
      armor__i.push(document.createElement("li"));
      armor__i[count__a].setAttribute("class", "equipment__list-item");
      armor__i[count__a].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/броня_${i-3}.jpg"
      alt="броня_${i-3}">цена = <span id="price__armor__${i}"></span>
      защита = <span>${parseInt(goods[i-1])}</span>
      <button onclick="equip(${i}, 'armor')" class="buy__button">
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
array = [100,500,1000];
function buy__it(i) {
  if (money - array[i-1] >= 0) money -= array[i-1];
}
