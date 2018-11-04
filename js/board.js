function Canvas() {
  this.canvas = document.querySelector("#myCanvas");
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.width = 720;
  this.height = 480;
  this.img = new Image();
  this.img.src = './img/wood-background.png'
  this.counter = 0;
  this.enemies = [];
}

Canvas.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

Canvas.prototype.clearAll = function () {
  this.ctx.clearRect(this.x, this.y, this.width, this.height);
}


Canvas.prototype.createEnemy = function () {
  this.counter += 1;

  if (this.counter % 180 === 0) {
    canvas.enemies.push(new Enemy(canvas))
  }
}
Canvas.prototype.update = function () {
  this.clearAll();
  this.createEnemy();
  this.draw();
}



const canvas = new Canvas(); 