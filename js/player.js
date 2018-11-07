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
	this.minXPos = 43;
	this.minYPos = 0;
	this.maxXPos = canvas.width - this.width;
	this.maxYPos = canvas.height - this.height;
	this.direction = "N";
	this.class = "Warrior";
	this.maxXp = 100;
	this.xp = 0;
	this.level = 1;
	this.skillPoints = 0;
	this.coins = 0;
	this.hp = 100;
	this.maxHp = 100;
	this.str = 5;
	this.dex = 4;
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

	if (this.y > 178 && this.y < 235 && this.x > 677) {
		this.y += 5;
		this.x -= 5;
	} else if (this.y > 245 && this.y < 310 && this.x > 677) {
		this.y -= 5;
		this.x -= 5;
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
	if (waves === true) {
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
		if (boss) {
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
	}
}

Player.prototype.checkHp = function () {
	if (this.hp <= 0) {
		location.reload();
	}
}

Player.prototype.levelUp = function () {
	if (this.xp >= this.maxXp) {
		this.level += 1;
		this.skillPoints += 1;
		this.xp -= this.maxXp;
	}
}

Player.prototype.showHp = function () {
	document.querySelector(".health-bar").dataset.total = this.maxHp;
	document.querySelector(".health-bar").dataset.value = this.hp;
	document.querySelector(".bar").style.width = (this.hp / this.maxHp) * 100 + "%";
}

Player.prototype.showXp = function () {
	document.querySelector(".xp-bar").dataset.total = this.maxXp;
	document.querySelector(".xp-bar").dataset.value = this.xp;
	document.querySelector(".bar-xp").style.width = (this.xp / this.maxXp) * 100 + "%";
}

Player.prototype.showCoins = function () {
	document.querySelector(".coins>span").innerHTML = this.coins;
}

Player.prototype.showLvl = function () {
	document.querySelector("#myLevel").innerHTML = this.level;
}

Player.prototype.enterShop = function () {
	if (this.x > canvas.width - 32 && this.y <= canvas.height / 2 + 25 && this.y >= canvas.height / 2 - 25) {
		if (waves === false) showShop();
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
	this.showHp();
	this.showXp();
	this.showCoins();
	this.showLvl()
}

const player = new Player(canvas);