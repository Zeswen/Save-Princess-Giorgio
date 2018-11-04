function Canvas() {
  this.canvas = document.querySelector("#myCanvas");
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.width = 720;
  this.height = 480;
  this.img = new Image();
  this.img.src = './img/wood-background.png'
}

Canvas.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

Canvas.prototype.clearAll = function () {
  this.ctx.clearRect(this.x, this.y, this.width, this.height);
}

Canvas.prototype.update = function () {
  this.clearAll();
  this.draw();
}