function Canvas() {
	this.canvas = document.querySelector("#myCanvas");
	this.ctx = this.canvas.getContext('2d');
	this.x = 0;
	this.y = 0;
	this.width = 720;
	this.height = 480;
	this.img = new Image();
	this.img.src = './img/wood-background.png'
	this.counter = 1;
	this.secCounter = 1;
	this.enemies = [];
}

Canvas.prototype.draw = function () {
	this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

Canvas.prototype.clearAll = function () {
	this.ctx.clearRect(this.x, this.y, this.width, this.height);
}

let waves = false;


Canvas.prototype.createEnemy = function () {
	if (waves === true) {
		this.counter += 1;

		if (this.counter % 180 === 0) {
			canvas.enemies.push(new Enemy(canvas))
		}
	}
}

Canvas.prototype.checkHp = function () {
	canvas.enemies.forEach(enemy => {
		if (enemy.hp <= 0) {
			let enemyIndex = canvas.enemies.indexOf(enemy);
			canvas.enemies.splice(enemyIndex, 1);
			player.xp += 10;
			player.coins += 5;
		}
	})
}


Canvas.prototype.stopEnemySpawn = function () {
	if (waves === true) {
		this.secCounter += 1;

		if (this.secCounter >= 1800) {
			waves = false;
			this.secCounter = 1;
		}
	}
}

Canvas.prototype.update = function () {
	this.clearAll();
	this.createEnemy();
	this.checkHp();
	this.stopEnemySpawn();
	this.draw();
}

const canvas = new Canvas(); 