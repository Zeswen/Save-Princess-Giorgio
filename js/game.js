const keys = {};

window.onload = function () {

	function updateGame() {
		requestAnimationFrame(updateGame);
		canvas.update();
		player.update();
		princess.update();
		canvas.enemies.forEach(enemy => enemy.update());
	}
	updateGame();
}

document.addEventListener("keydown", function (e) {
	keys[e.keyCode] = true;
});

document.addEventListener("keyup", function (e) {
	keys[e.keyCode] = false;
});