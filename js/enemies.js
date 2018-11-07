function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndArr(arr) {
	return arr[Math.floor(Math.random() * 2)]
}


function Enemy(canvas) {
	this.ctx = canvas.ctx;
	this.x = getRndInteger(43, canvas.width - 16);
	this.y = getRndArr([0, canvas.height - 35]);
	this.direction = "N";
	this.width = 24;
	this.height = 32;
	this.minXPos = 0;
	this.minYPos = 0;
	this.maxXPos = canvas.width - this.width;
	this.maxYPos = canvas.height - this.height;
	this.class = "Warrior";
	this.hp = 25;
	this.str = 5;
}

Enemy.prototype.move = function () {
	if (this.x === canvas.width / 2 && this.y < canvas.height / 2) {
		this.y += 1;
	} else if (this.x === canvas.width / 2 && this.y > canvas.height / 2) {
		this.y -= 1;
	} else if (this.x < canvas.width / 2 && this.y === canvas.height / 2) {
		this.x += 1;
	} else if (this.x > canvas.width / 2 && this.y === canvas.height / 2) {
		this.x -= 1;
	} else if (this.x < canvas.width / 2 && this.y > canvas.height / 2) {
		this.x += 1;
		this.y -= 1;
		this.direction = "W";
	} else if (this.x > canvas.width / 2 && this.y < canvas.height / 2) {
		this.x -= 1;
		this.y += 1;
		this.direction = "E";
	} else if (this.x < canvas.width / 2 && this.y < canvas.height / 2) {
		this.y += 1;
		this.x += 1;
		this.direction = "S";
	} else if (this.x > canvas.width / 2 && this.y > canvas.height / 2) {
		this.y -= 1;
		this.x -= 1;
		this.direction = "N";
	}
}

Enemy.prototype.receiveDamage = function () {
	if (player.attacks) {
		switch (player.direction) {
			case "E":
				if (this.x + this.width + 10 >= player.x &&
					player.x + player.width >= this.x &&
					this.y + this.height >= player.y &&
					player.height + player.y >= this.y) {
					this.hp -= player.str;
					this.x -= 5;
				}
				break;

			case "W":
				if (this.x + this.width >= player.x &&
					player.x + player.width + 10 >= this.x &&
					this.y + this.height >= player.y &&
					player.height + player.y >= this.y) {
					this.hp -= player.str;
					this.x += 5;
				}
				break;

			case "N":
				if (this.x + this.width >= player.x &&
					player.x + player.width >= this.x &&
					this.y + this.height + 10 >= player.y &&
					player.height + player.y >= this.y) {
					this.hp -= player.str;
					this.y -= 5;
				}
				break;

			case "S":
				if (this.x + this.width >= player.x &&
					player.x + player.width >= this.x &&
					this.y + this.height >= player.y &&
					player.height + player.y + 10 >= this.y) {
					this.hp -= player.str;
					this.y += 5;
				}
				break;
		}
	}
}

Enemy.prototype.update = function () {
	this.receiveDamage();
	this.move();
}