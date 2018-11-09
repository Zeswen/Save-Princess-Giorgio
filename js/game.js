const keys = {};

window.onload = function () {

	function updateGame() {
		if (canvas.gameOver == false) requestAnimationFrame(updateGame);
		canvas.update();
		player.update();
		princess.update();
		if (boss !== undefined) boss.update();
		canvas.enemies.forEach(enemy => enemy.update());
		animations.update();
		if (canvas.gameOver == true) {
			cancelAnimationFrame(updateGame);
			canvas.gameOverScreen();
		}
	}
	
	updateGame();
}

document.addEventListener("keydown", function (e) {
	keys[e.keyCode] = true;
});

document.addEventListener("keyup", function (e) {
	keys[e.keyCode] = false;
});