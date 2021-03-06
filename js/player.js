//todo: consider adding a GameConfig object
function Player(canvas) {
	this.ctx = canvas.ctx;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2 + 50;
	this.width = 24;
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
	this.counter = 1;
	this.moving = false;
}

Player.prototype.idle = function () {
	if (this.moving === false) {
		animations.playerDraw();
	}
}

//todo: consider adding a GameKeysConfig object
// GameKeysConfig = {
// 	left: 37
// }
Player.prototype.move = function () {
	if (keys[37] || keys[38] || keys[39] || keys[40]) {
		if (keys[38]) {
			//todo: consider refactoring this to a function
			if (this.velY > -this.speed) {
				this.velY--;
				this.direction = "N";
				animations.movePlayerDraw();
				this.moving = true;
			}
		}

		if (keys[40]) {
			if (this.velY < this.speed) {
				this.velY++;
				this.direction = "S";
				animations.movePlayerDraw();
				this.moving = true;
			}
		}

		if (keys[39]) {
			if (this.velX < this.speed) {
				this.velX++;
				this.direction = "W";
				animations.movePlayerDraw();
				this.moving = true;
			}
		}

		if (keys[37]) {
			if (this.velX > -this.speed) {
				this.velX--;
				this.direction = "E";
				animations.movePlayerDraw();
				this.moving = true;
			}
		}
	} else {
		this.moving = false;
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
			princess.interacted = true;
		}
	}
}

Player.prototype.attack = function () {
	this.counter += 1;
	if (keys[88]) {
		if (this.counter > this.dex) {
			this.attacks = true;
			this.counter = 1;
			audios.swordSound.pause();
			audios.swordSound.currentTime = 0;
			audios.swordSound.play();
			switch (this.direction) {
				case "N":
					this.ctx.drawImage(animations.attackSwingB, this.x, this.y, this.width, this.height)
					this.ctx.drawImage(animations.swordSwingB, this.x + 5, this.y - this.height + 17, this.height, this.width);
					break;

				case "E":
					this.ctx.drawImage(animations.attackSwingL, this.x, this.y, this.width, this.height)
					this.ctx.drawImage(animations.swordSwingL, this.x - this.width + 5, this.y, this.width, this.height);
					break;

				case "S":
					this.ctx.drawImage(animations.attackSwingF, this.x, this.y, this.width, this.height)
					this.ctx.drawImage(animations.swordSwingF, this.x - 5, this.y + this.height - 5, this.height, this.width);
					break;

				case "W":
					this.ctx.drawImage(animations.attackSwingR, this.x, this.y, this.width, this.height)
					this.ctx.drawImage(animations.swordSwingR, this.x + this.width - 3, this.y + 10, this.width, this.height);
					break;
			}
		} else {
			this.attacks = false;
		}
	}
}

Player.prototype.receiveDamage = function () {
	if (waves === true && this.hp > 0) {
		//todo: consider refactor this. it is inneficient currently
		canvas.enemies.forEach(enemy => {
			if (this.x + this.width >= enemy.x &&
				enemy.x + enemy.width >= this.x &&
				this.y + this.height >= enemy.y &&
				enemy.height + enemy.y >= this.y) {
				this.hp -= enemy.str;
				audios.playerHit.play();
				this.ctx.fillStyle = "rgba(255, 0, 0, 0.3)"
				this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
		if (canvas.enemyRate === 60 && waves === true) {
			//todo: consider using a CollisionManager class where you put all this logic
			if (this.x + this.width >= boss.x &&
				boss.x + boss.width >= this.x &&
				this.y + this.height >= boss.y &&
				boss.height + boss.y >= this.y) {
				this.hp -= boss.str;
				audios.playerHit.play();
				this.ctx.fillStyle = "rgba(255, 0, 0, 0.3)"
				this.ctx.fillRect(this.x, this.y, this.width, this.height);
				switch (boss.direction) {
					//todo: please remove hardcoded values
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
		audios.playerDies.play();
		setTimeout(() => canvas.gameOver = true, 750)
	}
}

Player.prototype.levelUp = function () {
	if (this.xp >= this.maxXp) {
		this.level += 1;
		this.skillPoints += 1;
		this.xp -= this.maxXp;
	}
}
//todo: remember to cache repeated DOM elements
//todo: consider using a ScoreManager class
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
		if (waves === false) {
			audios.backgroundMusic.pause();
			audios.backgroundMusic.currentTime = 0;
			audios.shopMusic.play();
			showShop();
		}
	}
}

Player.prototype.update = function () {
	this.idle();
	this.move();
	this.enterShop();
	this.receiveDamage();
	this.checkHp();
	this.interact();
	this.attack();
	this.speedMod();
	this.updatePos();
	this.levelUp();
	this.showHp();
	this.showXp();
	this.showCoins();
	this.showLvl();
}

const player = new Player(canvas);