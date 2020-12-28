const div__button = document.querySelector(".div__button");
let help = document.getElementById("help")
let helperText = document.getElementById("helperText");
let count = 0, check = true;
let next__button = document.getElementById('next__button');
let array__text = ["Вы Нюргун Боотур Стремительный","В кузнице ваш ждут ... \n А в пути, вас ждут монстры, которых надо победить","",""];
let previous__button = document.createElement("button");
previous__button.setAttribute("id", "previous__button");
previous__button.setAttribute("onclick", "goToBack();");
previous__button.innerHTML = "назад";
check__help = localStorage.getItem("check__help");
function goToBack () {
  count--;
  helperText.innerHTML = array__text[count];
}
function next() {
  if (count == 1) {
    div__button.appendChild(previous__button);
    check = false;
  } else if (count > 2 ) {
    div__button.removeChild(previous__button);
  }
  count++;
  helperText.innerHTML = array__text[count];
}
if (check__help == 'true') {
  help.style.display = "block";
  helperText.innerHTML = array__text[count];
  window.onclick = function(e) {
    if (e.target == help) {
      help.style.display = "none";
    }
  }
}
localStorage.setItem("check__help", check__help);
