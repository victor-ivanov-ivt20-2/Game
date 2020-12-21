export function objects(weapons_names) {
  const object_weapon = {
    name: "название оружия",
    cost: "цена оружия",
    damage: "урон оружия"
  }
  localStorage.setItem("weapons", JSON.stringify(object_weapon));

  const weapon = localStorage.getItem("weapons");
  const hell_sword = JSON.parse(weapon);
  const sword = JSON.parse(weapon);
  sword.name = "меч";
  sword.cost = 300;
  sword.damage = 10;
  hell_sword.name = "Адский меч";
  hell_sword.cost = 1000;
  hell_sword.damage = 50;
  let all_weapons = [sword, hell_sword];
  for (let i = 0; i < weapons_names.length; i++) {
    for (let j = 0; j < weapons_names.length; j++)
    if (weapons_names[i] == all_weapons[j].name) weapons_names[i] = weapons[j];
  }
  return weapons_names;
}
