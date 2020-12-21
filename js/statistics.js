let e_health = 50
let health = 100;
let money = 0;
let heal_b = 2;
localStorage.setItem("heal_b", heal_b);
if (Number(localStorage.getItem("health")) > 0 &&
Number(localStorage.getItem("money")) >= 0) {
  health = Number(localStorage.getItem("health"));
  money = Number(localStorage.getItem("money"));
}
document.getElementById("health").innerHTML = "Здоровье = " + health;
document.getElementById("money").innerHTML = "Монеты = " + money;

function hp(health) {
  if (health > 0) {
    health -= 10;
    document.getElementById("health").innerHTML = "Здоровье = " + health;
    localStorage.setItem("health", health);
    return health;
  }
}
function mon(money) {
  if (money >= 0) {
    money += 1;
    document.getElementById("money").innerHTML = "Монеты = " + money;
    localStorage.setItem("money", money);
    return money;
  }
}
function buy(money) {
  if (money >= 0) {
    money -= 1;
    document.getElementById("money").innerHTML = "Монеты = " + money;
    return money;
  }
}
