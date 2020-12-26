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
const weapons__list = document.querySelector(".weapons__list");
const armors__list = document.querySelector(".armors__list");
let count__w = 0;
let count__a = 0;
for (let i = 1; i-1 < goods.length; i++) {
  if (goods[i-1][goods[i-1].length - 1] === "w") {
    if (weapons__s[i-1] != parseInt(goods[i-1])) {
      weapon__i.push(document.createElement("li"));
      weapon__i[i - count__w -1].setAttribute("class", "equipment__list-item");
      weapon__i[i - count__w -1].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/меч_${i - count__w + 1}.jpg"
      alt="меч_${count__w+1}">урон = <span>${parseInt(goods[i-1])}</span>
      <button onclick="equip(${count__w+1}, 'weapon')" class="buy__button">
      <span id="buy__weapon__${count__w+1}">купить</span></button></div>`;
      weapons__list.appendChild(weapon__i[i - count__w -1]);
    } else count__w++;
  } else if (goods[i-1][goods[i-1].length - 1] === "a") {
    if (armors__s[count__a] != parseInt(goods[i-1])) {
      armor__i.push(document.createElement("li"));
      armor__i[count__a].setAttribute("class", "equipment__list-item");
      armor__i[count__a].innerHTML = `<div class="equipment__list__div"> <img src="static/resources/images/броня_${count__a+1}.jpg"
      alt="броня_${count__a}">защита = <span>${parseInt(goods[i-1])}</span>
      <button onclick="equip(${count__a+1}, 'armor')" class="buy__button">
      <span id="buy__armor__${count__a+1}">купить</span></button></div>`;
      armors__list.appendChild(armor__i[count__a]);
      count__a++;
    } else {}
  }
}
array = [100,500,1000];
function buy__it(i) {
  if (money - array[i-1] >= 0) money -= array[i-1];
}
