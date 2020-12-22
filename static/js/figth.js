let heal_b = Number(localStorage.getItem("heal_b"));
let e_health = 50;
let health = Number(localStorage.getItem("health"));
document.getElementById("health").innerHTML = "Здоровье = " + health;
document.getElementById("e_health").innerHTML = "Здоровье противника = " + e_health;
document.getElementById("heal_b").innerHTML = "хилки = " + heal_b;
function attack(health) {
  e_health -= 10;
  health -= 10;
  if (health > 0) {
    if (e_health>0) {
    } else if (e_health<=0){
      alert ('');
      document.location.href = "/main_menu";
    }
    document.getElementById("health").innerHTML = "Здоровье = " + health;
    document.getElementById("e_health").innerHTML = "Здоровье противника = " + e_health;
    localStorage.setItem("health", health);
    return health;
  } else {
    alert ("ЛОХ");
    localStorage.clear();
    document.location.href = "/main_menu";
  }
}
function heal(health) {
  localStorage.setItem("heal_b", heal_b);
  document.getElementById("heal_b").innerHTML = "хилки = " + heal_b;
  if (heal_b>0) {
    heal_b-=1;
    health += 20;
    health -= 10;
    document.getElementById("heal_b").innerHTML = "хилки = " + heal_b;
    if (health<=100) {
      document.getElementById("health").innerHTML = "Здоровье = " + health;
      localStorage.setItem("health", health);
      return health
      document.getElementById("heal_b").innerHTML = "хилки = " + heal_b;
    }
  } else {
    alert ("GG чел куда хилки дел");
  }
}
