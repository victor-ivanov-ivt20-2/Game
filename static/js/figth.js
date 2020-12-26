let equipped__s = [];

let equipped  = getArrayFromStroke(localStorage.getItem("equipped"), equipped__s);

let heal_b = Number(localStorage.getItem("heal_b"));
let money = Number(localStorage.getItem("money"));
let kills = Number(localStorage.getItem("kills"));
let k = [50,10,100,25,150,50];
let e_health = k[kills];
let health = Number(localStorage.getItem("health"));

if (kills != 0) {
  const enemy = document.querySelector(".enemy");
  let enemy__kills = document.createElement("img");
  let enemy__image = document.getElementById("enemy__image");
  enemy__kills.setAttribute("class", "enemy__png");
  enemy__kills.setAttribute("src", `static/resources/images/unknown__${kills}.png`);
  enemy__kills.setAttribute("id", "enemy__image");
  enemy.replaceChild(enemy__kills,enemy__image);
  // enemy__image = enemy__kills;
}

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

function selfRandom(element) {
    let a = Math.floor(Math.random() * (element*0.5 - element + 1)) + element;;
    return a;
}

let random__s = 0;

function attack(health) {
  const enemy = document.querySelector(".enemy");
  let enemy__kills = document.createElement("img");
  let enemy__image = document.getElementById("enemy__image");
  e_health -= selfRandom(equipped__s[0]);
  if (e_health>0) {
    console.log(e_health);
    console.log(health);
  } else if (e_health<=0){
    random__s = selfRandom(k[kills]/10);
    money += random__s;
    alert (`враг убит, вы получили ${random__s} монет`);
    localStorage.setItem("money", money);
    console.log(`враг уничтожен, вы получили ${random__s} монет`);
    kills+=2;
    localStorage.setItem("health", health);
    if (kills == k.length) {
    kills = 0;
    document.location.href = "/main_menu";
  } else {
      enemy__kills.setAttribute("class", "enemy__png");
      enemy__kills.setAttribute("src", `static/resources/images/unknown__${kills}.png`);
      enemy__kills.setAttribute("id", "enemy__image");
      enemy.replaceChild(enemy__kills,enemy__image);
      enemy__image = enemy__kills;
      // enemy__image.setAttribute("src", `static/resources/images/unknown__${kills-2}.png`);
      console.log(enemy__image);
      console.log(enemy__kills);
      e_health = k[kills];
    }
    localStorage.setItem("kills", kills);
    document.getElementById("e_health").innerHTML = e_health;
    return health;
  }
  document.getElementById("e_health").innerHTML = e_health;
  health = e_attack(health);
  return health;
}
function e_attack(health) {
  health = Math.floor(health - (selfRandom(k[kills+1])/(1 + equipped__s[1]/100)));
  if (health > 0) {
    console.log("У вас столько хп" + health);
  } else if (health <= 0) {
    alert ("Вы погибли");
    localStorage.clear();
    document.location.href = "/main_menu";
    health = "смерть"
    return health;
  }
  document.getElementById("health").innerHTML = health;
  localStorage.setItem("health", health);
  return health;
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
