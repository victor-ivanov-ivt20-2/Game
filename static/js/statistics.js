let health = 100;
let money = 0;
let strength = 10;
let heal_b = 5;
let kills = 1;
let weapons = [10];
let armors = [10];

if (Number(localStorage.getItem("health")) > 0) {
  health = Number(localStorage.getItem("health"));
  money = Number(localStorage.getItem("money"));
  strength = Number(localStorage.getItem("money"));
  heal_b = Number(localStorage.getItem("heal_b"));
  kills = Number(localStorage.getItem("kills"));
  weapons = localStorage.getItem("weapons");
  armors = localStorage.getItem("armors");
}

localStorage.setItem("health", health);
localStorage.setItem("heal_b", heal_b);
localStorage.setItem("kills", kills);
localStorage.setItem("weapons", weapons);
localStorage.setItem("armors", armors);

document.getElementById("health").innerHTML = health;
document.getElementById("money").innerHTML = money;
