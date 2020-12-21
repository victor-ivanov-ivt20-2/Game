
let money = Number(localStorage.getItem("money"));
document.getElementById("money").innerHTML = "Монеты = " + money;
function buy(money) {
  if (money > 0) {
    money -= 1;
    document.getElementById("money").innerHTML = "Монеты = " + money;
    localStorage.setItem("money", money);
    return money;
  }
}
