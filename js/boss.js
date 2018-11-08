function Boss(canvas) {
  this.ctx = canvas.ctx;
  this.x = canvas.width / 2 - 30;
  this.y = 0;
  this.direction = "N";
  this.width = 96;
  this.height = 64;
  this.minXPos = 0;
  this.minYPos = 0;
  this.maxXPos = canvas.width - this.width;
  this.maxYPos = canvas.height - this.height;
  this.hp = 750;
  this.str = 25;
}

Boss.prototype.move = function () {
  if (this.y < canvas.height / 2) {
    this.y += 0.15;
    this.direction = "S"
  } else if (this.y > canvas.height / 2) {
    this.y -= 0.15;
    this.direction = "N"
  } else if (this.x < canvas.width / 2) {
    this.x += 0.15;
    this.direction = "W";
  } else if (this.x > canvas.width / 2) {
    this.x -= 0.15;
    this.direction = "E";
  } else if (this.x === canvas.width / 2 && this.y === canvas.height / 2) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
}

Boss.prototype.receiveDamage = function () {
  if (player.attacks) {
    switch (player.direction) {
      case "E":
        if (this.x + this.width + 10 >= player.x &&
          player.x + player.width >= this.x &&
          this.y + this.height >= player.y &&
          player.height + player.y >= this.y) {
          this.hp -= player.str;
          this.ctx.fillStyle = "rgba(255, 0, 0, 0.3)"
          this.ctx.fillRect(this.x, this.y, this.width, this.height);
          this.x -= 5;
        }
        break;

      case "W":
        if (this.x + this.width >= player.x &&
          player.x + player.width + 10 >= this.x &&
          this.y + this.height >= player.y &&
          player.height + player.y >= this.y) {
          this.hp -= player.str;
          this.ctx.fillStyle = "rgba(255, 0, 0, 0.3)"
          this.ctx.fillRect(this.x, this.y, this.width, this.height);
          this.x += 5;
        }
        break;

      case "N":
        if (this.x + this.width >= player.x &&
          player.x + player.width >= this.x &&
          this.y + this.height + 10 >= player.y &&
          player.height + player.y >= this.y) {
          this.hp -= player.str;
          this.ctx.fillStyle = "rgba(255, 0, 0, 0.3)"
          this.ctx.fillRect(this.x, this.y, this.width, this.height);
          this.y -= 5;
        }
        break;

      case "S":
        if (this.x + this.width >= player.x &&
          player.x + player.width >= this.x &&
          this.y + this.height >= player.y &&
          player.height + player.y + 10 >= this.y) {
          this.hp -= player.str;
          this.ctx.fillStyle = "rgba(255, 0, 0, 0.3)"
          this.ctx.fillRect(this.x, this.y, this.width, this.height);
          this.y += 5;
        }
        break;
    }
  }
}

Boss.prototype.checkHp = function () {
  if (this.hp <= 0) {
    boss = undefined;
    player.xp += 10000;
    player.coins += 5000;
  }
}

Boss.prototype.update = function () {
  if (waves === true && canvas.enemyRate === 60 && boss) {
    audios.backgroundMusic.pause();
    audios.bossSong.play();
    this.receiveDamage();
    this.checkHp();
    this.move();
  }
}

boss = new Boss(canvas);