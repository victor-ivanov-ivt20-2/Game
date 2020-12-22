if (Number(localStorage.getItem("health")) != 0) {
  document.getElementById("start__name__button").innerHTML = "продолжить";
  document.getElementById("start__clear").innerHTML = "сброс";
}
function if_continue() {
  if (Number(localStorage.getItem("health")) == 0) {
    localStorage.clear();
  }
  return "удалил при начале"
}
function clear_it() {
  let clear_ = document.getElementById("button__clear");
  localStorage.clear();
  document.getElementById("start__name__button").innerHTML = "начать";
  clear_.remove();
  return console.log("удалилось");
}
