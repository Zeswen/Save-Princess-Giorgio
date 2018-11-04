function Enemy(canvas) {
  this.ctx = canvas.ctx;
  this.x = 0;
  this.y = 0;
  this.width = 16;
  this.height = 32;
  this.minXPos = 0;
  this.minYPos = 0;
  this.maxXPos = canvas.width - this.width;
  this.maxYPos = canvas.height - this.height;
}

Enemy.prototype.draw = function () {
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

