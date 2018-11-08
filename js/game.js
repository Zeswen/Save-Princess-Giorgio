const keys = {};

window.onload = function () {

	function updateGame() {
		requestAnimationFrame(updateGame);
		canvas.update();
		player.update();
		princess.update();
		if (boss !== undefined) boss.update();
		canvas.enemies.forEach(enemy => enemy.update());
		animations.update();
	}
	updateGame();
}

document.addEventListener("keydown", function (e) {
	keys[e.keyCode] = true;
});

document.addEventListener("keyup", function (e) {
	keys[e.keyCode] = false;
});