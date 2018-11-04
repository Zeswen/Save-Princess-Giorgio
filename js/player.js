function Player(canvas) {
  this.ctx = canvas.ctx;
  this.x = canvas.width / 2;
  this.y = canvas.height / 2 + 50;
  this.width = 16;
  this.height = 32;
  this.velX = 0;
  this.velY = 0;
  this.speed = 3;
  this.friction = 0.90;
  this.minXPos = 0;
  this.minYPos = 0;
  this.maxXPos = canvas.width - this.width;
  this.maxYPos = canvas.height - this.height;
}

Player.prototype.draw = function () {
  this.ctx.fillStyle = "cyan";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.move = function () {
  if (keys[38]) {
    if (this.velY > -this.speed) {
      this.velY--;
    }
  }

  if (keys[40]) {
    if (this.velY < this.speed) {
      this.velY++;
    }
  }

  if (keys[39]) {
    if (this.velX < this.speed) {
      this.velX++;
    }
  }

  if (keys[37]) {
    if (this.velX > -this.speed) {
      this.velX--;
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
}

Player.prototype.update = function () {
  this.move();
  this.speedMod();
  this.updatePos();
  this.draw();
}