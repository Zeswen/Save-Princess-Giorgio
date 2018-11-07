function Princess(canvas) {
	this.ctx = canvas.ctx;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.width = 16;
	this.height = 32;
	this.maxHp = 300;
	this.hp = 300;
}

Princess.prototype.draw = function () {
	this.ctx.fillStyle = "pink";
	this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Princess.prototype.checkCollision = function () {
	if (this.x + this.width >= player.x &&
		player.x + player.width>= this.x &&
		this.y + this.height >= player.y &&
		player.height + player.y >= this.y) {
			player.velY = 0;
			player.velX = 0;
		switch (player.direction) {
			case "E":
				player.x += 3;
				break;

			case "W":
				player.x -= 3;
				break;

			case "N":
				player.y += 3;
				break;

			case "S":
				player.y -= 3;
				break;
		}
	}
}


Princess.prototype.receiveDamage = function () {
	canvas.enemies.forEach(enemy => {
		if (this.x + this.width >= enemy.x &&
			enemy.x + enemy.width >= this.x &&
			this.y + this.height >= enemy.y &&
			enemy.height + enemy.y >= this.y) {
			this.hp -= enemy.str;
			switch (enemy.direction) {
				case "E":
					enemy.x += 5;
					break;

				case "W":
					enemy.x -= 5;
					break;

				case "N":
					enemy.y += 5;
					break;

				case "S":
					enemy.y -= 5;
					break
			}
		}
	})
}

Princess.prototype.checkHp = function () {
	if (this.hp <= 0) {
		location.reload();
	}
}

Princess.prototype.showHp = function () {
	document.querySelector(".health-bar-princess").dataset.total = this.maxHp;
	document.querySelector(".health-bar-princess").dataset.value = this.hp;
	document.querySelector(".bar-princess").style.width = (this.hp / this.maxHp) * 100 + "%";
}

Princess.prototype.update = function () {
	this.draw();
	this.checkCollision();
	this.receiveDamage();
	this.checkHp();
	this.showHp();
}

const princess = new Princess(canvas);