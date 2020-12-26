function getArrayFromStroke(stroke__s, array__s) {
  let s = '';
  for (let i = 0; i-1 < stroke__s.length; i++) {
    if (stroke__s[i] == "," || stroke__s[i] === undefined) {
      array__s.push(Number(s));
      s = '';
    } else {
      s += stroke__s[i];
    }
  }
  return array__s;
}


let health = 100;
let money = 0;
let strength = 10;
let heal_b = 5;
let bigheal_b = 2;
let kills = 0;
let weapons = [10, 25, 50];
let armors = [10,50,100];
let equipped = "10,0";
let equipped__s = [], s = '';

if (Number(localStorage.getItem("health")) > 0) {
  health = Number(localStorage.getItem("health"));
  money = Number(localStorage.getItem("money"));
  strength = Number(localStorage.getItem("money"));
  heal_b = Number(localStorage.getItem("heal_b"));
  bigheal_b = Number(localStorage.getItem("bigheal_b"));
  kills = Number(localStorage.getItem("kills"));
  weapons = localStorage.getItem("weapons");
  armors = localStorage.getItem("armors");
  equipped = localStorage.getItem("equipped");
}

getArrayFromStroke(equipped, equipped__s);
localStorage.setItem("health", health);
localStorage.setItem("heal_b", heal_b);
localStorage.setItem("bigheal_b", bigheal_b);
localStorage.setItem("kills", kills);
localStorage.setItem("weapons", weapons);
localStorage.setItem("armors", armors);
localStorage.setItem("equipped", equipped);

document.getElementById("health").innerHTML = health;
document.getElementById("money").innerHTML = money;
