let money = Number(localStorage.getItem("money"));
let weapons = localStorage.getItem("weapons");
let armors = localStorage.getItem("armors");
let weapons__s = [], armors__s = [];
let goods = ['10w','25w','50w',"10a","50a","100a"];
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
for (let i = 1; i-1 < goods.length; i++) {
  if (goods[i-1][goods[i-1].length - 1] === "w") {
    if (i_i[i-1] != i) {
      weapon__i.push(document.createElement("li"));
      weapon__i[i - count__w -1].setAttribute("class", "equipment__list-item");
      weapon__i[i - count__w -1].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/меч_${i}.jpg"
      alt="меч_${i}">урон = <span>${parseInt(goods[i-1])}</span>
      <button onclick="equip(${count__w+1}, 'weapon')" class="buy__button">
      <span id="buy__weapon__${count__w+1}">купить</span></button></div>`;
      weapons__list.appendChild(weapon__i[i - count__w -1]);
    } else count__w++;
  } else if (goods[i-1][goods[i-1].length - 1] === "a") {
    if (i_i[i-1] != i) {
      armor__i.push(document.createElement("li"));
      armor__i[count__a].setAttribute("class", "equipment__list-item");
      armor__i[count__a].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/броня_${i-3}.jpg"
      alt="броня_${count__a}">защита = <span>${parseInt(goods[i-1])}</span>
      <button onclick="equip(${count__a+1}, 'armor')" class="buy__button">
      <span id="buy__armor__${count__a+1}">купить</span></button></div>`;
      armors__list.appendChild(armor__i[count__a]);
      count__a++;
    }
  }
}
array = [100,500,1000];
function buy__it(i) {
  if (money - array[i-1] >= 0) money -= array[i-1];
}
