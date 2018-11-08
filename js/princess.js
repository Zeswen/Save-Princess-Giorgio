function Princess(canvas) {
	this.ctx = canvas.ctx;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.width = 24;
	this.height = 32;
	this.maxHp = 300;
	this.hp = 300;
	this.interacted = false;
}

Princess.prototype.checkCollision = function () {
	if (this.x + this.width - 5 >= player.x &&
		player.x + player.width >= this.x + 5 &&
		this.y + this.height - 5 >= player.y &&
		player.height + player.y - 5 >= this.y) {
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
			audios.princessHit.play();
			this.ctx.fillStyle = "rgba(255, 0, 0, 0.2)"
			this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
		audios.princessDie.play();
		setTimeout(() => {
			if(!alert('The gorgeous Princess Giorgio died. Good luck on the next one!')){window.location.reload();}
		}, 500)
	}
}

Princess.prototype.showHp = function () {
	document.querySelector(".health-bar-princess").dataset.total = this.maxHp;
	document.querySelector(".health-bar-princess").dataset.value = this.hp;
	document.querySelector(".bar-princess").style.width = (this.hp / this.maxHp) * 100 + "%";
}

Princess.prototype.showDialog = function () {
	if (this.interacted) {
		document.querySelector(".dialog").style.opacity = 1;
		audios.princessSave.play();
		setTimeout(() => document.querySelector(".dialog").style.opacity = 0, 1500);
		setTimeout(() => document.querySelector(".dialog").style.display = "none", 2500);
		this.interacted = false;
	}
}

Princess.prototype.update = function () {
	this.checkCollision();
	this.receiveDamage();
	this.checkHp();
	this.showHp();
	this.showDialog();
}

const princess = new Princess(canvas);