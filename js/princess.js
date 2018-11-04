function Princess(canvas) {
  this.ctx = canvas.ctx;
  this.x = canvas.width / 2;
  this.y = canvas.height / 2;
  this.width = 16;
  this.height = 32;
}

Princess.prototype.draw = function () {
  this.ctx.fillStyle = "pink";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Princess.prototype.update = function () {
  this.draw();
}