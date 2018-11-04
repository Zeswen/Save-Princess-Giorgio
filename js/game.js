const keys = {};

window.onload = function() {
  const canvas = new Canvas();
  const player = new Player(canvas);

  function updateGame() {
    requestAnimationFrame(updateGame);
    canvas.update();
    player.update();
  }

  updateGame();
}

document.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});