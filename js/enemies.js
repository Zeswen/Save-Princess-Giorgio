function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function Enemy(canvas) {
  this.ctx = canvas.ctx;
  this.x = getRndInteger(0, canvas.width);
  this.y = 0;
  this.width = 16;
  this.height = 32;
  this.minXPos = 0;
  this.minYPos = 0;
  this.maxXPos = canvas.width - this.width;
  this.maxYPos = canvas.height - this.height;
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
  } else if (this.x > canvas.width / 2) {
    this.x -= 1;
  } else if (this.y < canvas.height / 2) {
    this.y += 1;
  } else if (this.y > canvas.height / 2) {
    this.y -= 1;
  } else if (this.x === canvas.width / 2 && this.y === canvas.height / 2) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
}

Enemy.prototype.update = function () {
  this.move();
  this.draw();
}