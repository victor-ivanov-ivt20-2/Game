let health = 100;
let money = 0;
let strength = 10;
let heal_b = 5;
let kills = 1;

if (Number(localStorage.getItem("health")) > 0) {
  health = Number(localStorage.getItem("health"));
  money = Number(localStorage.getItem("money"));
  strength = Number(localStorage.getItem("money"));
  heal_b = Number(localStorage.getItem("heal_b"));
  kills = Number(localStorage.getItem("kills"));
}

localStorage.setItem("health", health);
localStorage.setItem("heal_b", heal_b);
localStorage.setItem("kills", kills);

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
