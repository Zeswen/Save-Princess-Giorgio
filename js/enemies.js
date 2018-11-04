function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Enemy(canvas) {
  this.ctx = canvas.ctx;
  this.x = getRndInteger(0, canvas.width);
  this.y = 0;
  this.direction = "N";
  this.width = 16;
  this.height = 32;
  this.minXPos = 0;
  this.minYPos = 0;
  this.maxXPos = canvas.width - this.width;
  this.maxYPos = canvas.height - this.height;
  this.class = "Warrior";
  this.hp = 10;
  this.str = 5;
}

Enemy.prototype.draw = function () {
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Enemy.prototype.move = function () {
  if (this.x < canvas.width / 2) {
    this.x += 1;
    this.direction = "W";
  } else if (this.x > canvas.width / 2) {
    this.x -= 1;
    this.direction = "E";
  } else if (this.y < canvas.height / 2) {
    this.y += 1;
    this.direction = "S"
  } else if (this.y > canvas.height / 2) {
    this.y -= 1;
    this.direction = "N"
  } else if (this.x === canvas.width / 2 && this.y === canvas.height / 2) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
}

Enemy.prototype.receiveDamage = function () {
  if (this.x + this.width >= player.x &&
    player.x + player.width >= this.x &&
    this.y + this.height >= player.y &&
    player.height + player.y >= this.y) {
    if (player.attacks) {
      this.hp -= player.str;
      switch (player.direction) {
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
  }
}


Enemy.prototype.update = function () {
  this.receiveDamage();
  this.move();
  this.draw();
}