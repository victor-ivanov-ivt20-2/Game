
let money = Number(localStorage.getItem("money"));
let heal_b = Number(localStorage.getItem("heal_b"));
let weapons = localStorage.getItem("weapons");
let armors = localStorage.getItem("armors");
let equipped = localStorage.getItem("equipped");
let weapons__s = [];
let armors__s = [];
let equipped__s = [];

document.getElementById("money").innerHTML = money;
document.getElementById("heal_b").innerHTML = heal_b;

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

function equip(equipment, type__of__equipment) {
  if (type__of__equipment == "weapon") {
    equipped__s[0] = weapons__s[equipment-1];
    document.getElementById(`equip__weapon__${equipment}`).innerHTML = "снаряжено";
    for (let i = 1; i-1 < weapons__s.length; i++) {
      if (i != equipment)
      document.getElementById(`equip__weapon__${i}`).innerHTML = "снарядить";
    }
  }
  else if (type__of__equipment == "armor") {
    equipped__s[1] = armors__s[equipment-1];
    document.getElementById(`equip__armor__${equipment}`).innerHTML = "снаряжено";
    for (let i = 1; i-1 < armors__s.length; i++) {
      if (i != equipment)
      document.getElementById(`equip__armor__${i}`).innerHTML = "снарядить";
    }
  }
  localStorage.setItem("equipped", equipped__s);
}

getArrayFromStroke(weapons, weapons__s);
getArrayFromStroke(armors, armors__s);
getArrayFromStroke(equipped, equipped__s);

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
let l = "";
for (let i = 1; i-1 < weapons__s.length; i++) {
  if (weapons__s[i-1] == equipped__s[0]) {
    document.getElementById(`equip__weapon__${i}`).innerHTML = "снаряжено";
  }
}
for (let i = 1; i-1 < armors__s.length; i++) {
  if (armors__s[i-1] == equipped__s[1])
  document.getElementById(`equip__armor__${i}`).innerHTML = "снаряжено";
}
