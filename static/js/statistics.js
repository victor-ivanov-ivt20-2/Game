
function getArrayFromStroke(stroke__s, array) {
  let s = '';
  for (let i = 0; i - 1 < stroke__s.length; i++) {
    if (stroke__s[i] == "," || stroke__s[i] === undefined) {
      if (stroke__s[0] === undefined) break;
      array.push(Number(s));
      s = '';
    } else {
      s += stroke__s[i];
    }
  }
  return array;
}

let goods = ['10w','25w','50w',"10a","50a","100a",
"0ws", "50ws", "150ws", "20as", "50as", "100as"];
let health = 100;
let money = 50;
let strength = 10;
let small_heal = 0;
let big_heal = 0;
let kills = 0;
let lowkills = 0;
let weapons = [10,0,0];
let weapons__s = [], armors__s = [];
let armors = [10,0,0];
let equipped = "5,0";
let equipped__s = [], s = '';
let check__help = 'true';
let check__levels = "1";

if (Number(localStorage.getItem("health")) > 0) {
  health = Number(localStorage.getItem("health"));
  money = Number(localStorage.getItem("money"));
  strength = Number(localStorage.getItem("money"));
  small_heal = Number(localStorage.getItem("small_heal"));
  big_heal = Number(localStorage.getItem("big_heal"));
  bigheal_b = Number(localStorage.getItem("bigheal_b"));
  // kills = Number(localStorage.getItem("kills"));
  lowkills = Number(localStorage.getItem("lowkills"));
  weapons = getArrayFromStroke(localStorage.getItem("weapons"),weapons__s);
  armors = getArrayFromStroke(localStorage.getItem("armors"),armors__s);
  equipped = localStorage.getItem("equipped");
  check__help = localStorage.getItem("check__help");
  check__levels = localStorage.getItem("check__levels");
}

localStorage.setItem("money", money);
localStorage.setItem("health", health);
localStorage.setItem("small_heal", small_heal);
localStorage.setItem("big_heal", big_heal);
localStorage.setItem("kills", kills);
localStorage.setItem("lowkills", lowkills);
localStorage.setItem("weapons", weapons);
localStorage.setItem("armors", armors);
localStorage.setItem("equipped", equipped);
localStorage.setItem("goods", goods);
localStorage.setItem("check__help", check__help);
localStorage.setItem("check__levels", check__levels);

document.getElementById("health").innerHTML = health;
document.getElementById("money").innerHTML = money;
