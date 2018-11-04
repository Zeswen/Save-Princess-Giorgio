function Player(canvas) {
  this.ctx = canvas.ctx;
  this.x = canvas.width / 2;
  this.y = canvas.height / 2;
  this.width = 36;
  this.height = 36;
  this.minXPos = this.width;
  this.minYPos = 0;
  this.maxXPos = this.ctx.width - this.x;
  this.maxYPos = this.ctx.height - this.height;
}

Player.prototype.draw = function () {
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.move = function () {
  if (keys[38]) {
    this.y -= this.height / 4;
    // if (velY > -speed) {
      // velY--;
    // }
  }

  if (keys[40]) {
    this.y += this.height / 4;
    // if (velY < speed) {
      // velY++;
    // }
  }

  if (keys[39]) {
    // if (velX < speed) {
      // velX++;
    // }
  }

  if (keys[37]) {
    // if (velX > -speed) {
      // velX--;
    // }
  }
}

Player.prototype.updatePos = function () {
  if (this.x >= this.maxXPos - this.width) {
    this.x = this.maxXPos;
  } else if (this.x <= this.minXPos) {
    this.x = this.minXPos;
  }

  if (this.y + this.height > this.maxYPos) {
    console.log('me paso')
    this.y = this.maxYPos;
  } else if (this.y <= this.minYPos) {
    this.y = this.minYPos;
  }
}

// velY *= friction;
// y += velY;
// velX *= friction;
// x += velX;

Player.prototype.update = function () {
  this.move();
  this.updatePos();
  this.draw();
}