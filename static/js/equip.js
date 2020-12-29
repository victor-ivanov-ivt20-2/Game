
let money = Number(localStorage.getItem("money"));
let health = Number(localStorage.getItem("health"));
let small_heal = Number(localStorage.getItem("small_heal"));
let big_heal = Number(localStorage.getItem("big_heal"));
let weapons = [];
let armors = [];
let equipped = [];
if (small_heal >= 0) document.getElementById("small_heal").innerHTML = small_heal;
if (big_heal >= 0) document.getElementById("big_heal").innerHTML = big_heal;
document.getElementById("health").innerHTML = health;
document.getElementById("money").innerHTML = money;
//полечи себя
function heal__urself(heal, type__of__heal) {
  if (type__of__heal == "small") {
    if (heal <= 0) {alert("больше нет кусков хлеба"); return heal;}
    else {
      if (health > 90 && health < 100) {
        health = (10 - (health%10)) + health;
        heal = Number(heal) - 1;
      } else if (health <= 90) {
        heal = Number(heal) - 1;
        health += 10;
      } else alert("хп на максимуме");
      document.getElementById("small_heal").innerHTML = heal;
      document.getElementById("health").innerHTML = health;
      localStorage.setItem("small_heal", heal);
      localStorage.setItem("health",health);
      return heal;
    }
  } else if (type__of__heal == "big") {
    if (heal <= 0) {alert("больше нет кумыса"); return heal;}
    else {
      if (health > 75 && health < 100) {
        health = (25 - (health%25)) + health;
        heal = Number(heal) - 1;
      } else if (health <= 75) {
        heal = Number(heal) - 1;
        health += 25;
      } else alert("хп на максимуме");
      document.getElementById("big_heal").innerHTML = heal;
      document.getElementById("health").innerHTML = health;
      localStorage.setItem("big_heal", heal);
      localStorage.setItem("health",health);
      return heal;
    }
  }
}
//взять из строки список
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
//экипировать предмет
function equip(equipment, type__of__equipment) {
  if (type__of__equipment == "weapon") {
    if (equipped[0] == weapons[equipment-1]) {
      equipped[0] = 5;
      document.getElementById(`equip__weapon__${equipment}`).innerHTML = "снарядить";
      document.getElementById("your__damage").innerHTML = equipped[0];
    } else {
      equipped[0] = weapons[equipment-1];
      document.getElementById("your__damage").innerHTML = equipped[0];
      document.getElementById(`equip__weapon__${equipment}`).innerHTML = "снять";
      for (let i = 1; i-1 < weapons.length; i++) {
        if (i != equipment && weapons[i-1] != 0)
        document.getElementById(`equip__weapon__${i}`).innerHTML = "снарядить";
      }
    }
  }
  else if (type__of__equipment == "armor") {
    if (equipped[1] == armors[equipment-1]) {
      equipped[1] = 0;
      document.getElementById(`equip__armor__${equipment}`).innerHTML = "снарядить";
      document.getElementById("your__armor").innerHTML = equipped[1];
    } else {
      equipped[1] = armors[equipment-1];
      let your__armor = document.getElementById("your__armor");
      your__armor.innerHTML = equipped[1];
      document.getElementById(`equip__armor__${equipment}`).innerHTML = "снять";
      for (let i = 1; i-1 < armors.length; i++) {
        if (i != equipment && armors[i-1] != 0)
        document.getElementById(`equip__armor__${i}`).innerHTML = "снарядить";
      }
    }
  }
  localStorage.setItem("equipped", equipped);
}

getArrayFromStroke(localStorage.getItem("weapons"), weapons);
getArrayFromStroke(localStorage.getItem("armors"), armors);
getArrayFromStroke(localStorage.getItem("equipped"), equipped);

let weapon__i = [], armor__i = [];
const weapons__list = document.querySelector(".weapons__list");
const armors__list = document.querySelector(".armors__list");
let count__w = 0, count__a = 0;
//циклы добавления элементов в html
for (let i = 1; i-1 < weapons.length; i++) {
  if (weapons[i-1] != 0) {
    weapon__i.push(document.createElement("li"));
    weapon__i[count__w].setAttribute("class", "equipment__list-item");
    weapon__i[count__w].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/меч_${i}.jpg"
    alt="меч_${i}">урон = <span>${weapons[i-1]}</span>
    <button onclick="equip(${i}, 'weapon')" class="equip__button">
    <span id="equip__weapon__${i}">снарядить</span></button></div>`;
    weapons__list.appendChild(weapon__i[count__w]);
    count__w++;
  }
}
for (let i = 1; i-1 < armors.length; i++) {
  if (armors[i-1] != 0) {
    armor__i.push(document.createElement("li"));
    armor__i[count__a].setAttribute("class", "equipment__list-item");
    armor__i[count__a].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/броня_${i}.jpg"
    alt="броня_${i}">защита = <span>${armors[i-1]}</span>
    <button onclick="equip(${i}, 'armor')" class="equip__button">
    <span id="equip__armor__${i}">снарядить</span></button></div>`;
    armors__list.appendChild(armor__i[count__a]);
    count__a++;
  }
}
//проверка, есть ли оружия или броня, если есть, то пишется в html
if (count__w != 0) {
  let title__weapons = document.getElementById("title__weapons");
  title__weapons.innerHTML = "Оружие : ";
}
if (count__a != 0) {
  let title__armors = document.getElementById("title__armors");
  title__armors.innerHTML = "Броня : ";
}
if (count__w == 0 && count__a == 0 && (small_heal + big_heal < 0)) {
  const equipment__div = document.querySelector(".equipment__div");
  let nothing = document.createElement("p");
  nothing.setAttribute("class","nothing");
  nothing.innerHTML = "У вас ничего нет";
  equipment__div.appendChild(nothing);
}
//если надел что-либо, и это сохранилось в хранилище, то зайдя обратно в инвентарь,
//то он покажет, что это у тебя надето.
let l = 0;
for (let i = 1; i-1 < weapons.length; i++) {
  if (weapons[i-1] == equipped[0] && weapons[i-1] != 0) {
    document.getElementById("your__damage").innerHTML = equipped[0];
    document.getElementById(`equip__weapon__${i}`).innerHTML = "снять";
  }
}
for (let i = 1; i-1 < armors.length; i++) {
  if (armors[i-1] == equipped[1] && armors[i-1] != 0) {
    document.getElementById("your__armor").innerHTML = equipped[1];
    document.getElementById(`equip__armor__${i}`).innerHTML = "снять";
  }
}
