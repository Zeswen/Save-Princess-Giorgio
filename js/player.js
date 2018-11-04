function Player(canvas) {
  this.ctx = canvas.ctx;
  this.x = canvas.width / 2;
  this.y = canvas.height / 2 + 50;
  this.width = 16;
  this.height = 32;
  this.velX = 0;
  this.velY = 0;
  this.speed = 3;
  this.friction = 0.75;
  this.minXPos = 0;
  this.minYPos = 0;
  this.maxXPos = canvas.width - this.width;
  this.maxYPos = canvas.height - this.height;
  this.direction = "N";
  this.class = "warrior";
  this.hp = 100;
  this.str = 10;
  this.def = 0;
  this.attacks = false;
}

Player.prototype.draw = function () {
  this.ctx.fillStyle = "cyan";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.move = function () {
  if (keys[38]) {
    if (this.velY > -this.speed) {
      this.velY--;
      this.direction = "N";
    }
  }

  if (keys[40]) {
    if (this.velY < this.speed) {
      this.velY++;
      this.direction = "S";
    }
  }

  if (keys[39]) {
    if (this.velX < this.speed) {
      this.velX++;
      this.direction = "W";
    }
  }

  if (keys[37]) {
    if (this.velX > -this.speed) {
      this.velX--;
      this.direction = "E";
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

  if (this.x + this.width >= princess.x &&
    princess.x + princess.width >= this.x &&
    this.y + this.height >= princess.y &&
    princess.height + princess.y >= this.y) {
    this.velY = 0;
    this.velX = 0;
  }


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

Player.prototype.interact = function () {
  if (keys[90]) {
    console.log("a");
  }
}

Player.prototype.attack = function () {
  if (keys[88]) {
    this.attacks = true;
  } else {
    this.attacks = false;
  }
}

Player.prototype.update = function () {
  console.log(this.attacks)
  this.move();
  this.interact();
  this.attack();
  this.speedMod();
  this.updatePos();
  this.draw();
}

const player = new Player(canvas);