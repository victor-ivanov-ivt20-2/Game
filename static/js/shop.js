let money = Number(localStorage.getItem("money"));
let weapons = localStorage.getItem("weapons");
let armors = localStorage.getItem("armors");
let weapons__s = [], armors__s = [];
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
const weapons__list = document.querySelector(".weapons__list");
const armors__list = document.querySelector(".armors__list");
for (let i = 1; i-1 < weapons__s.length; i++) {
  weapon__i.push(document.createElement("li"));
  weapon__i[i-1].setAttribute("class", "equipment__list-item")
  weapon__i[i-1].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/меч_${i}.jpg"
  alt="меч_${i}">урон = <span>${weapons__s[i-1]}</span>
  <button onclick="equip(${i}, 'weapon')" class="equip__button">
  <span id="equip__weapon__${i}">снарядить</span></button></div>`;
  weapons__list.appendChild(weapon__i[i-1]);
}
for (let i = 1; i-1 < armors__s.length; i++) {
  armor__i.push(document.createElement("li"));
  armor__i[i-1].setAttribute("class", "equipment__list-item")
  armor__i[i-1].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/броня_${i}.jpg"
  alt="броня_${i}">защита = <span>${armors__s[i-1]}</span>
  <button onclick="equip(${i}, 'armor')" class="equip__button">
  <span id="equip__armor__${i}">снарядить</span></button></div>`;
  armors__list.appendChild(armor__i[i-1]);
}
array = [100,500,1000];
function buy__it(i) {
  if (money - array[i-1] >= 0) money -= array[i-1];
}
