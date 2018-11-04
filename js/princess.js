function Princess(canvas) {
	this.ctx = canvas.ctx;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.width = 16;
	this.height = 32;
	this.hp = 300;
}

Princess.prototype.draw = function () {
	this.ctx.fillStyle = "pink";
	this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Princess.prototype.checkCollision = function () {
	if (this.x + this.width >= player.x &&
		player.x + player.width >= this.x &&
		this.y + this.height >= player.y &&
		player.height + player.y >= this.y) {
		switch (player.direction) {
			case "E":
				player.x += 5;
				break;

			case "W":
				player.x -= 5;
				break;

			case "N":
				player.y += 5;
				break;

			case "S":
				player.y -= 5;
				break
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

Princess.prototype.update = function () {
	this.draw();
	this.checkCollision();
	this.receiveDamage();
	this.checkHp();
}

const princess = new Princess(canvas);