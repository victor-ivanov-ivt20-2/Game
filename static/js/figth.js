let heal_b = Number(localStorage.getItem("heal_b"));
let health = Number(localStorage.getItem("health"));
let money = Number(localStorage.getItem("money"));
let kills = Number(localStorage.getItem("kills"));
let k = [50,100,150];
let e_health = k[kills];
document.getElementById("health").innerHTML = health;
document.getElementById("e_health").innerHTML = e_health;
document.getElementById("heal_b").innerHTML = heal_b;

function attack(health) {
    e_health -= 10;
    health -= 1;
    if (health > 0) {
      if (e_health>0) {
        console.log("враг и игрок получили -10 хп");
      } else if (e_health<=0){
        alert ('враг убит, вы получили 5 монет');
        money += 5;
        localStorage.setItem("money", money);
        console.log("враг уничтожен, вы получили 5 монет");
        e_health = k[kills];
        if (kills<k.length-1) {
        kills++;
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
