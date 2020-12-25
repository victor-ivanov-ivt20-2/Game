if (Number(localStorage.getItem("health")) != 0) {
  document.getElementById("start__name__button").innerHTML = "продолжить";
  const button__div__clear = document.querySelector(".button__div__clear");
  let k = document.createElement("button");
  k.setAttribute("onclick", "clear_it();");
  k.setAttribute("id", "button__clear");
  k.innerHTML = 'сброс';
  button__div__clear.appendChild(k);
}
function if_continue() {
  if (Number(localStorage.getItem("health")) == 0) {
    localStorage.clear();
  }
  return "удалил при начале";
}
function clear_it() {
  let clear_ = document.getElementById("button__clear");
  localStorage.clear();
  document.getElementById("start__name__button").innerHTML = "начать";
  clear_.remove();
  return console.log("удалилось");
}
