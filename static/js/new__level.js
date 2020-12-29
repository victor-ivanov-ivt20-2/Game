//js для проверки пройденных уровней

function not__yet(i) {
  if (check__levels[0] != i) alert("Уровень недоступен");
}
if (check__levels[0] == 1) {
  document.getElementById(`a_${check__levels[0]}`).removeAttribute("onclick");
  document.getElementById(`a_${check__levels[0]}`).setAttribute("href", `/fight/${check__levels[0]}`);
}
for (let i = 2; i-1 < 5; i++) {
  if (check__levels[0] == i) {
    document.getElementById(`a_${check__levels[0]}`).removeAttribute("onclick");
    document.getElementById(`a_${check__levels[0]}`).setAttribute("href", `/fight/${check__levels[0]}`);
    document.getElementById(`a_${Number(check__levels[0])-1}`).setAttribute("onclick", `not__yet(${i-1})`);
    document.getElementById(`a_${Number(check__levels[0])-1}`).removeAttribute("href");
  }
}
