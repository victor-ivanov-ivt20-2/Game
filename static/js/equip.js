
let money = Number(localStorage.getItem("money"));
let heal_b = Number(localStorage.getItem("heal_b"));
let weapons = localStorage.getItem("weapons");
let armors = localStorage.getItem("armors");
let s = '';
let weapons__s = [];
let armors__s = [];
document.getElementById("money").innerHTML = money;
document.getElementById("heal_b").innerHTML = heal_b;
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
for (let i = 0; i-1 < weapons.length; i++) {
  if (weapons[i] == "," || weapons[i] === undefined) {
    weapons__s.push(Number(s));
    s = '';
  } else {
    s += weapons[i];
  }
}
for (let i = 0; i-1 < armors.length; i++) {
  if (armors[i] == "," || armors[i] === undefined) {
    armors__s.push(Number(s));
    s = '';
  } else {
    s += armors[i];
  }
}
let weapon__i = [], armor__i = [];
const weapons__list = document.querySelector(".weapons__list");
const armors__list = document.querySelector(".armors__list");
for (let i = 1; i-1 < weapons__s.length; i++) {
  weapon__i.push(document.createElement("li"));
  weapon__i[i-1].setAttribute("class", "equipment__list-item")
  weapon__i[i-1].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/меч_${i}.jpg"
  alt="меч_${i}">урон = <span>${weapons__s[i-1]}</span></div>`;
  weapons__list.appendChild(weapon__i[i-1]);
}
for (let i = 1; i-1 < armors__s.length; i++) {
  armor__i.push(document.createElement("li"));
  armor__i[i-1].setAttribute("class", "equipment__list-item")
  armor__i[i-1].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/броня_${i}.jpg"
  alt="броня_${i}">защита = <span>${armors__s[i-1]}</span></div>`;
  armors__list.appendChild(armor__i[i-1]);
}
