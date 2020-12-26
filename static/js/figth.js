let heal_b = Number(localStorage.getItem("heal_b"));
let health = Number(localStorage.getItem("health"));
let money = Number(localStorage.getItem("money"));
let kills = Number(localStorage.getItem("kills"));
let k = [50,10,100,20,150,30];
let e_health = k[kills];
let equipped__s = [];
let equipped  = getArrayFromStroke(localStorage.getItem("equipped"), equipped__s);
document.getElementById("health").innerHTML = health;
document.getElementById("e_health").innerHTML = e_health;
document.getElementById("heal_b").innerHTML = heal_b;

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

function selfRandom(e_attack) {
    let a = Math.floor(Math.random() * (e_attack*0.5 - e_attack + 1)) + e_attack;;
    return a;
  }

function attack(health) {
  e_health -= selfRandom(equipped__s[0]);
  health -= selfRandom(k[kills+1]);
  if (health > 0) {
    if (e_health>0) {
      console.log(e_health);
      console.log(health);
    } else if (e_health<=0){
      alert ('враг убит, вы получили 5 монет');
      money += 5;
      localStorage.setItem("money", money);
      console.log("враг уничтожен, вы получили 5 монет");
      if (kills == k.lengths) {
      document.location.href = "/main_menu";
      } else {
        kills+=2;
        e_health = k[kills];
      }
    }
    document.getElementById("health").innerHTML = health;
    document.getElementById("e_health").innerHTML = e_health;
    localStorage.setItem("health", health);
    return health;
  } else {
    alert ("Вы погибли");
    localStorage.clear();
    document.location.href = "/main_menu";
  }
}
function heal(health) {
  if (heal_b>0 && health < 100) {
    heal_b-=1;
    health += 10;
    localStorage.setItem("heal_b", heal_b);
    localStorage.setItem("health", health);
    document.getElementById("heal_b").innerHTML = heal_b;
    document.getElementById("health").innerHTML = health;
    return health;
  } else if (health >= 100) {
    alert ("ХП заполнено на максимум");
    return health;
  } else {
    alert ("Бутыли закончились");
    return health;
  }
}
