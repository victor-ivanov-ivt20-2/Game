
let money = Number(localStorage.getItem("money"));
let heal_b = Number(localStorage.getItem("heal_b"));
document.getElementById("money").innerHTML = "Монеты = " + money;
document.getElementById("heal_b").innerHTML = "Бутыль здоровья = " + heal_b;
function buy__bottle(money) {
  if (money >= 5) {
    money -= 5;
    heal_b += 1;
    document.getElementById("money").innerHTML = "Монеты = " + money;
    document.getElementById("heal_b").innerHTML = "Бутыль здоровья = " + heal_b;
    localStorage.setItem("money", money);
    localStorage.setItem("heal_b", heal_b);
    return money;
  } else {
    alert("у вас недостаточно средств!");
  }
}

// import { objects } from './objects.js';
// let weapons = objects();
// console.log(weapons([sword]));
