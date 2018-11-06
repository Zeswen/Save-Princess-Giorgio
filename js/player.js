function Player(canvas) {
	this.ctx = canvas.ctx;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2 + 50;
	this.width = 16;
	this.height = 32;
	this.velX = 0;
	this.velY = 0;
	this.speed = 3;
	this.friction = 0.75;
	this.minXPos = 0;
	this.minYPos = 0;
	this.maxXPos = canvas.width - this.width;
	this.maxYPos = canvas.height - this.height;
	this.direction = "N";
	this.class = "Warrior";
	this.xp = 0;
	this.level = 1;
	this.skillPoints = 0;
	this.coins = 0;
	this.hp = 100;
	this.maxHp = 100;
	this.str = 5;
	this.dex = 5;
	this.attacks = false;
	this.skill = "Roar";
	this.counter = 1;
}

Player.prototype.draw = function () {
	this.ctx.fillStyle = "cyan";
	this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.move = function () {
	if (keys[38]) {
		if (this.velY > -this.speed) {
			this.velY--;
			this.direction = "N";
		}
	}

	if (keys[40]) {
		if (this.velY < this.speed) {
			this.velY++;
			this.direction = "S";
		}
	}

	if (keys[39]) {
		if (this.velX < this.speed) {
			this.velX++;
			this.direction = "W";
		}
	}

	if (keys[37]) {
		if (this.velX > -this.speed) {
			this.velX--;
			this.direction = "E";
		}
	}
}

Player.prototype.speedMod = function () {
	this.velY *= this.friction;
	this.y += this.velY;
	this.velX *= this.friction;
	this.x += this.velX;
}

Player.prototype.updatePos = function () {

	if (this.x + this.width >= princess.x &&
		princess.x + princess.width >= this.x &&
		this.y + this.height >= princess.y &&
		princess.height + princess.y >= this.y) {
		this.velY = 0;
		this.velX = 0;
	}


	if (this.x > this.maxXPos) {
		this.x = this.maxXPos;
	} else if (this.x < this.minXPos) {
		this.x = this.minXPos;
	}

	if (this.y > this.maxYPos) {
		this.y = this.maxYPos;
	} else if (this.y < this.minYPos) {
		this.y = this.minYPos;
	}
}

Player.prototype.interact = function () {
	if (keys[90]) {
		if (this.x + this.width >= princess.x &&
			princess.x + princess.width >= this.x &&
			this.y + this.height >= princess.y &&
			princess.height + princess.y + 15 >= this.y) {
			waves = true;
		}
	}
}

Player.prototype.attack = function () {
	this.counter += 1;
	if (keys[88]) {
		if (this.counter > this.dex) {
			this.attacks = true;
			this.counter = 1;
			switch (this.direction) {
				case "N":
					this.ctx.fillRect(this.x - 8, this.y - this.width, this.height, this.width);
					break;

				case "E":
					this.ctx.fillRect(this.x - this.width, this.y, this.width, this.height);
					break;

				case "S":
					this.ctx.fillRect(this.x - 8, this.y + this.height, this.height, this.width);
					break;

				case "W":
					this.ctx.fillRect(this.x + this.width, this.y, this.width, this.height);
					break;
			}
		} else {
			this.attacks = false;
		}
	}
}

Player.prototype.receiveDamage = function () {
	canvas.enemies.forEach(enemy => {
		if (this.x + this.width >= enemy.x &&
			enemy.x + enemy.width >= this.x &&
			this.y + this.height >= enemy.y &&
			enemy.height + enemy.y >= this.y) {
			this.hp -= enemy.str;
			switch (enemy.direction) {
				case "E":
					this.x -= 10;
					break;

				case "W":
					this.x += 10;
					break;

				case "N":
					this.y -= 10;
					break;

				case "S":
					this.y += 10;
					break
			}
		}
	})
	if (this.x + this.width >= boss.x &&
		boss.x + boss.width >= this.x &&
		this.y + this.height >= boss.y &&
		boss.height + boss.y >= this.y) {
		this.hp -= boss.str;
		switch (boss.direction) {
			case "E":
				this.x -= 15;
				break;

			case "W":
				this.x += 15;
				break;

			case "N":
				this.y -= 15;
				break;

			case "S":
				this.y += 15;
				break
		}
	}
}

Player.prototype.checkHp = function () {
	if (this.hp <= 0) {
		location.reload();
	}
}

Player.prototype.levelUp = function () {
	if (this.xp === 100) {
		this.level += 1;
		this.skillPoints += 1;
		this.xp = 0;
	}
}

Player.prototype.enterShop = function () {
	if (this.x  === canvas.width - 16 && this.y <= canvas.height / 2 + 25 && this.y >= canvas.height / 2 - 25) {
		showShop();
	}
}

Player.prototype.update = function () {
	this.move();
	this.enterShop();
	this.receiveDamage();
	this.checkHp();
	this.interact();
	this.attack();
	this.speedMod();
	this.updatePos();
	this.draw();
	this.levelUp();
}

const player = new Player(canvas);