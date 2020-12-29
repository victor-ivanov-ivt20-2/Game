const div__button = document.querySelector(".div__button");
let help = document.getElementById("help")
let helperText = document.getElementById("helperText");
let count = 0, check = true, check__exit = true;
let next__button = document.getElementById('next__button');
let array__text = [
  `Вы нюргун боотур стремительный, вас отправили высшие боги в средний мир оберегать от злых деяний нижнего мира, злые богатыри нижнего мира похитили прекрасную Туйаарыма Куо, вам предстоит сразиться с сильными монстрами "абааьы" что бы спасти Туйаарыма Куо `,
  `Перед походом в нижний мир вам предстоит сходить в кузницу, где вас ждет мастер на все руки "Кытай Бахсылаан". Он выковывает божественные оружия и железные доспехи, которые наделены божественными силами`,
  ``,
  ``
];
let previous__button = document.createElement("button");
previous__button.setAttribute("id", "previous__button");
previous__button.setAttribute("onclick", "goToBack();");
previous__button.innerHTML = "назад";
let exit__button = document.createElement("button");
exit__button.setAttribute("id", "exit__button");
exit__button.setAttribute("onclick", "exit();");
exit__button.innerHTML = "закрыть";
check__help = localStorage.getItem("check__help");
function exit() {
  help.style.display = "none";
  check__help = 'false';
  localStorage.setItem("check__help", check__help);
}
function goToBack () {
  count--;
  if (count == 1 && check == true) {
    div__button.appendChild(previous__button);
    check = false;
  } else if (count < 1 && check == false) {
    div__button.removeChild(previous__button);
    check = true;
  } else if (count < array__text.length-1 && check__exit == false) {
    div__button.replaceChild(next__button, exit__button);
    check__exit = true;
  }
  helperText.innerHTML = array__text[count];
}
function next() {
  count++;
  if (count == 1 && check == true) {
    div__button.appendChild(previous__button);
    check = false;
  } else if (count < 1 && check == false) {
    div__button.removeChild(previous__button);
    check = true;
  } else if (count == array__text.length-1) {
    div__button.replaceChild(exit__button, next__button);
    check__exit = false;
  }
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
