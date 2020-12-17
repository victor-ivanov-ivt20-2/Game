
let health = 100;
let money = 0;

document.getElementById("health").innerHTML = "Здоровье = " + health;
document.getElementById("money").innerHTML = "Монеты = " + money;
function hp(health) {
  if (health > 0) {
    health -= 10;
    document.getElementById("health").innerHTML = "Здоровье = " + health;
    return health;
  }
}
function mon(money) {
  if (money >= 0) {
    money += 1;
    document.getElementById("money").innerHTML = "Монеты = " + money;
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
