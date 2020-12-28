let equipped__s = [];

function enemy__type(name, id, health, damage) {
  this.name = name;
  this.id = id;
  this.health = health;
  this.damage = damage;
}

let weak_monster = new enemy__type("слабый монстр", 1, 25, 5);
let average_monster = new enemy__type("средний монстр", 2, 100, 5);
let strong_monster = new enemy__type("сильный монстр", 3, 100, 15);
let powerful_monster = new enemy__type("всемогущий", 4, 150, 20);
let boss = new enemy__type("босс", 5, 250, 25);

let equipped  = getArrayFromStroke(localStorage.getItem("equipped"), equipped__s);

let small_heal = Number(localStorage.getItem("small_heal"));
let big_heal = Number(localStorage.getItem("big_heal"));
let money = Number(localStorage.getItem("money"));
let lowkills = Number(localStorage.getItem("lowkills"));
let k = [25,5,50,5,50,10,100,15];
let e_health = k[lowkills];
let health = Number(localStorage.getItem("health"));
let cooldown = 0;

if (lowkills != 0) {
  const enemy = document.querySelector(".enemy");
  let enemy__lowkills = document.createElement("img");
  let enemy__image = document.getElementById("enemy__image");
  enemy__lowkills.setAttribute("class", "enemy__png");
  enemy__lowkills.setAttribute("src", `static/resources/images/unknown__${lowkills}.png`);
  enemy__lowkills.setAttribute("id", "enemy__image");
  enemy.replaceChild(enemy__lowkills,enemy__image);
  // enemy__image = enemy__lowkills;
}

document.getElementById("health").innerHTML = health;
document.getElementById("e_health").innerHTML = e_health;
document.getElementById("small_heal").innerHTML = small_heal;
document.getElementById("big_heal").innerHTML = big_heal;

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

function selfRandom(element, k) {
  let a = Math.floor(Math.random() * (element*k - element + 1)) + element;
  return a;
}

let random__s = 0;

function attack(health) {
  if (cooldown <= 3) {
    cooldown--;
  }
  const enemy = document.querySelector(".enemy");
  let enemy__lowkills = document.createElement("img");
  let enemy__image = document.getElementById("enemy__image");
  e_health -= selfRandom(equipped__s[0], 0.5);
  if (e_health>0) {
    console.log(e_health);
    console.log(health);
  } else if (e_health<=0){
    random__s = selfRandom(k[lowkills+1], 2);
    money += random__s;
    alert (`враг убит, вы получили ${random__s} монет`);
    localStorage.setItem("money", money);
    console.log(`враг уничтожен, вы получили ${random__s} монет`);
    lowkills+=2;
    localStorage.setItem("health", health);
    if (lowkills == k.length) {
    lowkills = 0;
    document.location.href = "/main_menu";
  } else {
      enemy__lowkills.setAttribute("class", "enemy__png");
      enemy__lowkills.setAttribute("src", `static/resources/images/unknown__${lowkills}.png`);
      enemy__lowkills.setAttribute("id", "enemy__image");
      enemy.replaceChild(enemy__lowkills,enemy__image);
      enemy__image = enemy__lowkills;
      // enemy__image.setAttribute("src", `static/resources/images/unknown__${lowkills-2}.png`);
      console.log(enemy__image);
      console.log(enemy__lowkills);
      e_health = k[lowkills];
    }
    localStorage.setItem("lowkills", lowkills);
    document.getElementById("e_health").innerHTML = e_health;
    return health;
  }
  document.getElementById("e_health").innerHTML = e_health;
  health = e_attack(health);
  return health;
}
function e_attack(health) {
  if (equipped__s[1] != undefined) {
    health = Math.floor(health - (selfRandom(k[lowkills+1],0.8)/(1 + equipped__s[1]/100)));
  } else {
    health -= selfRandom(k[lowkills+1], 0.8);
  }
  if (health > 0) {
    console.log("У вас столько хп" + health);
  } else if (health <= 0) {
    alert ("Вы погибли");
    localStorage.clear();
    document.location.href = "/main_menu";
    return health;
  }
  document.getElementById("health").innerHTML = health;
  localStorage.setItem("health", health);
  return health;
}

function heal(health) {
  if (small_heal > 0 && health > 90 && health != 100) {
    small_heal-=1;
    health = health + (100-health);
    localStorage.setItem("small_heal", small_heal);
    localStorage.setItem("health", health);
    document.getElementById("small_heal").innerHTML = small_heal;
    document.getElementById("health").innerHTML = health;
    return health;
  } else if (health >= 100) {
    alert ("ХП заполнено на максимум");
    return health;
  } else if (small_heal>0 && health < 100) {
    small_heal-=1;
    health += 10;
    localStorage.setItem("small_heal", small_heal);
    localStorage.setItem("health", health);
    document.getElementById("small_heal").innerHTML = small_heal;
    document.getElementById("health").innerHTML = health;
    return health;
  } else {
    alert ("Бутыли закончились");
    return health;
  }
}

function bigheal(health) {
  if (big_heal > 0 && health > 80 && health != 100) {
    big_heal-=1;
    health = health + (100-health);
    localStorage.setItem("big_heal", big_heal);
    localStorage.setItem("health", health);
    document.getElementById("big_heal").innerHTML = big_heal;
    document.getElementById("health").innerHTML = health;
    return health;
  } else if (health >= 100) {
    alert ("ХП заполнено на максимум");
    return health;
  } else if (big_heal>0 && health < 100) {
    big_heal-=1;
    health += 20;
    localStorage.setItem("big_heal", big_heal);
    localStorage.setItem("health", health);
    document.getElementById("big_heal").innerHTML = big_heal;
    document.getElementById("health").innerHTML = health;
    return health;
  } else {
    alert ("Бутыли закончились");
    return health;
  }
}

function sattack(health) {
  if (cooldown <= 0) {
    cooldown = 3;
    const enemy = document.querySelector(".enemy");
    let enemy__lowkills = document.createElement("img");
    let enemy__image = document.getElementById("enemy__image");
    e_health -= selfRandom(equipped__s[0], 2.5);
    if (e_health>0) {
      console.log(e_health);
      console.log(health);
    } else if (e_health<=0){
      random__s = selfRandom(k[lowkills+1], 2);
      money += random__s;
      alert (`враг убит, вы получили ${random__s} монет`);
      localStorage.setItem("money", money);
      console.log(`враг уничтожен, вы получили ${random__s} монет`);
      lowkills+=2;
      localStorage.setItem("health", health);
      if (lowkills == k.length) {
      lowkills = 0;
      document.location.href = "/main_menu";
    } else {
        enemy__lowkills.setAttribute("class", "enemy__png");
        enemy__lowkills.setAttribute("src", `static/resources/images/unknown__${lowkills}.png`);
        enemy__lowkills.setAttribute("id", "enemy__image");
        enemy.replaceChild(enemy__lowkills,enemy__image);
        enemy__image = enemy__lowkills;
        // enemy__image.setAttribute("src", `static/resources/images/unknown__${lowkills-2}.png`);
        console.log(enemy__image);
        console.log(enemy__lowkills);
        e_health = k[lowkills];
      }
      localStorage.setItem("lowkills", lowkills);
      document.getElementById("e_health").innerHTML = e_health;
      return health;
    }
    document.getElementById("e_health").innerHTML = e_health;
    health = e_attack(health);
    return health;
  } else {
    alert("перезарядка"+cooldown+"ход(-а)");
    return health;
  }
}
