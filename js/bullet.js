// function Bullet(canvas) {
//   this.ctx = canvas.getContext('2d');
//   this.x = player.x;
//   this.y = player.y;
//   this.velX = 1.5;
//   this.velY = 1.5;
//   this.width = 10;
//   this.height = 10;
//   this.radius = 2;
// }

// Bullet.prototype.draw = function () {
//   this.ctx.beginPath();
//   this.ctx.fillStyle = "black";
//   this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//   this.ctx.fill();
//   this.ctx.closePath();
// }

// Bullet.prototype.move = function () {
//   switch (player.direction) {
//     case "N":
//       this.y -= 5;
//       break;

//     case "E":
//       this.x -= 5;
//       break;

//     case "S":
//       this.y += 5;
//       break;

//     case "W":
//       this.x += 5;
//       break;
//   }
// }

// Bullet.prototype.update = function () {
//   this.move();
//   this.draw();
// }