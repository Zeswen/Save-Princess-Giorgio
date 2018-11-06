function showShop() {
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector(".shop").style.display = "flex";
}

document.querySelector(".exitShop").onclick = function () {
  document.querySelector("#gameContainer").style.display = "flex";
  document.querySelector(".shop").style.display = "none";
  player.x = canvas.width / 2;
  player.y = canvas.height / 2 + 50; 
}

document.querySelector(".juan").onclick = function () {
  document.querySelector(".juan > img").style.display = "none";
  document.querySelector(".general").style.display = "block"
}

document.querySelector(".diego").onclick = function () {
  document.querySelector(".diego > img").style.display = "none";
  document.querySelector(".weapon").style.display = "block"
}

document.querySelector(".teo").onclick = function () {
  document.querySelector(".teo > img").style.display = "none";
  document.querySelector(".armor").style.display = "block"
}

document.querySelector(".gabi").onclick = function () {
  document.querySelector(".gabi > img").style.display = "none";
  document.querySelector(".skills").style.display = "block"
}

document.querySelector("#healthPot").onclick = function () {
  if (player.coins > 25) {
    player.coins -= 25;
    player.hp += 50;
    if (player.hp > player.maxHp) {
      player.hp = player.maxHp;
    }
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#princessPot").onclick = function () {
  if (player.coins > 50) {
    player.coins -= 50;
    princess.hp += 50;
    if (princess.hp > 300) {
      princess.hp = 300;
    }
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#sword1").onclick = function () {
  if (player.coins > 50) {
    player.coins -= 50;
    player.str += 10;
    document.querySelector("#sword1").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#sword2").onclick = function () {
  if (player.coins > 150) {
    player.coins -= 150;
    player.str += 20;
    document.querySelector("#sword2").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#sword3").onclick = function () {
  if (player.coins > 300) {
    player.coins -= 300;
    player.str += 50;
    document.querySelector("#sword3").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}


document.querySelector("#iron").onclick = function () {
  if (player.coins > 250) {
    player.coins -= 250;
    player.maxHp += 50;
    document.querySelector("#iron").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#steel").onclick = function () {
  if (player.coins > 500) {
    player.coins -= 500;
    player.maxHp += 250;
    document.querySelector("#steel").innerHTML = "Owned";
  } else {
    window.alert("No tienes suficientes monedas!")
  }
}

document.querySelector("#strUp").onclick = function () {
  if (player.skillPoints > 1) {
    player.skillPoints -= 1;
    player.str += 1;
  } else {
    window.alert("No tienes suficientes skill Points!")
  }
}

document.querySelector("#hpUp").onclick = function () {
  if (player.skillPoints > 1) {
    player.skillPoints -= 1;
    player.maxHp += 10;
  } else {
    window.alert("No tienes suficientes skill Points!")
  }
}

document.querySelector("#dexUp").onclick = function () {
  if (player.dex === 1) {
    document.querySelector("#dexUp").innerHTML = "Owned";
  }
  if (player.skillPoints > 1) {
    player.skillPoints -= 1;
    player.dex -= 1;
  } else {
    window.alert("No tienes suficientes skill Points!")
  }
}