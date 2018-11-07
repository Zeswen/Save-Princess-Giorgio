function showShop() {
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector(".shop").style.display = "flex";
document.querySelector("#skillPoints").innerHTML = player.skillPoints;
}

document.querySelector(".exitShop").onclick = function () {
  document.querySelector("#gameContainer").style.display = "flex";
  document.querySelector(".shop").style.display = "none";
  document.querySelector(".juan > img").style.display = "block";
  document.querySelector(".general").style.display = "none";
  document.querySelector(".diego > img").style.display = "block";
  document.querySelector(".weapon").style.display = "none";
  document.querySelector(".teo > img").style.display = "block";
  document.querySelector(".armor").style.display = "none";
  document.querySelector(".gabi > img").style.display = "block";
  document.querySelector(".skills").style.display = "none";
  player.x -= 25;
}

document.querySelector(".juan").onclick = function () {
  document.querySelector(".juan > img").style.display = "none";
  document.querySelector(".general").style.display = "block";
}

document.querySelector(".diego").onclick = function () {
  document.querySelector(".diego > img").style.display = "none";
  document.querySelector(".weapon").style.display = "block"
}

document.querySelector(".teo").onclick = function () {
  document.querySelector(".teo > img").style.display = "none";
  document.querySelector(".armor").style.display = "block";
}

document.querySelector(".gabi").onclick = function () {
  document.querySelector(".gabi > img").style.display = "none";
  document.querySelector(".skills").style.display = "block";
}

document.querySelector("#healthPot").onclick = function () {
  if (player.coins >= 10) {
    player.coins -= 10;
    player.hp += 50;
    if (player.hp > player.maxHp) {
      player.hp = player.maxHp;
    }
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#princessPot").onclick = function () {
  if (player.coins >= 20) {
    player.coins -= 20;
    princess.hp += 100;
    if (princess.hp > 300) {
      princess.hp = 300;
    }
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#sword1").onclick = function () {
  if (player.coins >= 50) {
    player.coins -= 50;
    player.str += 10;
    document.querySelector("#sword1").disabled = true;
    document.querySelector("#sword1").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#sword2").onclick = function () {
  if (player.coins >= 150) {
    player.coins -= 150;
    player.str += 20;
    document.querySelector("#sword2").disabled = true;
    document.querySelector("#sword2").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#sword3").onclick = function () {
  if (player.coins >= 300) {
    player.coins -= 300;
    player.str += 50;
    document.querySelector("#sword3").disabled = true;
    document.querySelector("#sword3").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}


document.querySelector("#iron").onclick = function () {
  if (player.coins >= 250) {
    player.coins -= 250;
    player.maxHp += 50;
    player.hp = player.maxHp;
    document.querySelector("#iron").disabled = true;
    document.querySelector("#iron").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#steel").onclick = function () {
  if (player.coins >= 500) {
    player.coins -= 500;
    player.maxHp += 250;
    player.hp = player.maxHp;
    document.querySelector("#steel").disabled = true;
    document.querySelector("#steel").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#strUp").onclick = function () {
  if (player.skillPoints >= 1) {
    player.skillPoints -= 1;
    player.str += 1;
  } else {
    window.alert("No tienes suficientes skill Points!")
  }
}

document.querySelector("#hpUp").onclick = function () {
  if (player.skillPoints >= 1) {
    player.skillPoints -= 1;
    player.maxHp += 10;
  } else {
    window.alert("No tienes suficientes skill Points!")
  }
}

document.querySelector("#dexUp").onclick = function () {
  if (player.dex === 1) {
    document.querySelector("#dexUp").disabled = true;
    document.querySelector("#dexUp").innerHTML = "Max";
  }
  if (player.skillPoints >= 1) {
    player.skillPoints -= 1;
    player.dex -= 1;
  } else {
    window.alert("No tienes suficientes skill Points!")
  }
}