function Animations(canvas) {
  this.ctx = canvas.getContext('2d');

  this.idlePlayer = new Image();
  this.idlePlayer.src = "./img/idle.png"
  this.idlePlayer.frames = 4;
  this.idlePlayer.frameIndex = 0;
  this.movePlayerFCounter = 0;
  this.movePlayerF = new Image();
  this.movePlayerF.src = "./img/move-f.png"
  this.movePlayerF.frames = 7;
  this.movePlayerF.frameIndex = 0;
  this.movePlayerRCounter = 0;
  this.movePlayerR = new Image();
  this.movePlayerR.src = "./img/move-r.png"
  this.movePlayerR.frames = 7;
  this.movePlayerR.frameIndex = 0;
  this.movePlayerLCounter = 0;
  this.movePlayerL = new Image();
  this.movePlayerL.src = "./img/move-l.png"
  this.movePlayerL.frames = 7;
  this.movePlayerL.frameIndex = 7;
  this.movePlayerBCounter = 0;
  this.movePlayerB = new Image();
  this.movePlayerB.src = "./img/move-b.png"
  this.movePlayerB.frames = 8;
  this.movePlayerB.frameIndex = 0;

  this.swordSwingF = new Image();
  this.swordSwingF.src = "./img/sword-f.png"
  this.swordSwingR = new Image();
  this.swordSwingR.src = "./img/sword-r.png"
  this.swordSwingL = new Image();
  this.swordSwingL.src = "./img/sword-l.png"
  this.swordSwingB = new Image();
  this.swordSwingB.src = "./img/sword-b.png"

  this.attackSwingF = new Image();
  this.attackSwingF.src = "./img/attack-f.png"
  this.attackSwingR = new Image();
  this.attackSwingR.src = "./img/attack-r.png"
  this.attackSwingL = new Image();
  this.attackSwingL.src = "./img/attack-l.png"
  this.attackSwingB = new Image();
  this.attackSwingB.src = "./img/attack-b.png"

  this.enemyFCounter = 0;
  this.enemyF = new Image();
  this.enemyF.src = "./img/enemy-f.png"
  this.enemyF.frames = 2;
  this.enemyF.frameIndex = 0;
  this.enemyRCounter = 0;
  this.enemyR = new Image();
  this.enemyR.src = "./img/enemy-r.png"
  this.enemyR.frames = 2;
  this.enemyR.frameIndex = 0;
  this.enemyLCounter = 0;
  this.enemyL = new Image();
  this.enemyL.src = "./img/enemy-l.png"
  this.enemyL.frames = 2;
  this.enemyL.frameIndex = 2;
  this.enemyBCounter = 0;
  this.enemyB = new Image();
  this.enemyB.src = "./img/enemy-b.png"
  this.enemyB.frames = 2;
  this.enemyB.frameIndex = 0;

  this.bossCounter = 0;
  this.boss = new Image();
  this.boss.src = "./img/boss.png"
  this.boss.frames = 3;
  this.boss.frameIndex = 0;

  this.princess = new Image();
  this.princess.src = "./img/princess.png";
}

Animations.prototype.playerDraw = function () {
  switch (player.direction) {
    case "N":
      this.idlePlayer.frameIndex = 3;
      this.ctx.drawImage(this.idlePlayer, this.idlePlayer.frameIndex * Math.floor(this.idlePlayer.width / this.idlePlayer.frames) + 3,
        0, Math.floor(this.idlePlayer.width / this.idlePlayer.frames), this.idlePlayer.height, player.x, player.y,
        player.width, player.height)
      break;
    case "W":
      this.idlePlayer.frameIndex = 1;
      this.ctx.drawImage(this.idlePlayer, this.idlePlayer.frameIndex * Math.floor(this.idlePlayer.width / this.idlePlayer.frames),
        0, Math.floor(this.idlePlayer.width / this.idlePlayer.frames), this.idlePlayer.height, player.x, player.y,
        player.width, player.height)
      break;
    case "S":
      this.idlePlayer.frameIndex = 0;
      this.ctx.drawImage(this.idlePlayer, this.idlePlayer.frameIndex * Math.floor(this.idlePlayer.width / this.idlePlayer.frames),
        0, Math.floor(this.idlePlayer.width / this.idlePlayer.frames), this.idlePlayer.height, player.x, player.y,
        player.width, player.height)
      break;
    case "E":
      this.idlePlayer.frameIndex = 2;
      this.ctx.drawImage(this.idlePlayer, this.idlePlayer.frameIndex * Math.floor(this.idlePlayer.width / this.idlePlayer.frames) + 2,
        0, Math.floor(this.idlePlayer.width / this.idlePlayer.frames), this.idlePlayer.height, player.x, player.y,
        player.width, player.height)
      break;
  }
}

Animations.prototype.movePlayerDraw = function () {
  switch (player.direction) {
    case "N":
      this.ctx.drawImage(this.movePlayerB, this.movePlayerB.frameIndex * 17,
        0, Math.floor(this.movePlayerB.width / this.movePlayerB.frames), this.movePlayerB.height, player.x, player.y,
        player.width, player.height);
      this.movePlayerBCounter += 1;
      if (this.movePlayerBCounter % 5 == 0) {
        this.movePlayerB.frameIndex += 1;
        this.movePlayerBCounter = 0;
      }
      if (this.movePlayerB.frameIndex >= this.movePlayerB.frames) {
        this.movePlayerB.frameIndex = 0;
      }
      break;
    case "W":
      this.ctx.drawImage(this.movePlayerR, this.movePlayerR.frameIndex * 17.5,
        0, Math.floor(this.movePlayerR.width / this.movePlayerR.frames), this.movePlayerR.height, player.x, player.y,
        player.width, player.height);
      this.movePlayerRCounter += 1;
      if (this.movePlayerRCounter % 5 == 0) {
        this.movePlayerR.frameIndex += 1;
        this.movePlayerRCounter = 0;
      }
      if (this.movePlayerR.frameIndex >= this.movePlayerR.frames) {
        this.movePlayerR.frameIndex = 0;
      }
      break;
    case "S":
      this.ctx.drawImage(this.movePlayerF, this.movePlayerF.frameIndex * 17,
        0, Math.floor(this.movePlayerF.width / this.movePlayerF.frames), this.movePlayerF.height, player.x, player.y,
        player.width, player.height);
      this.movePlayerFCounter += 1;
      if (this.movePlayerFCounter % 5 == 0) {
        this.movePlayerF.frameIndex += 1;
        this.movePlayerFCounter = 0;
      }
      if (this.movePlayerF.frameIndex >= this.movePlayerF.frames) {
        this.movePlayerF.frameIndex = 0;
      }
      break;
    case "E":
      this.ctx.drawImage(this.movePlayerL, this.movePlayerL.frameIndex * 17.5,
        0, Math.floor(this.movePlayerL.width / this.movePlayerL.frames), this.movePlayerL.height, player.x, player.y,
        player.width, player.height);
      this.movePlayerLCounter += 1;
      if (this.movePlayerLCounter % 5 == 0) {
        this.movePlayerL.frameIndex -= 1;
        this.movePlayerLCounter = 0;
      }
      if (this.movePlayerL.frameIndex <= 0) {
        this.movePlayerL.frameIndex = 6;
      }
      break;
  }
}

Animations.prototype.enemyDraw = function () {
  canvas.enemies.forEach((enemy) => {
    switch (enemy.direction) {
      case "N":
        this.ctx.drawImage(this.enemyB, this.enemyB.frameIndex * 17.5,
          0, Math.floor(this.enemyB.width / this.enemyB.frames), this.enemyB.height, enemy.x, enemy.y,
          enemy.width, enemy.height);
        this.enemyBCounter += 1;
        if (this.enemyBCounter % 5 == 0) {
          this.enemyB.frameIndex += 1;
          this.enemyBCounter = 0;
        }
        if (this.enemyB.frameIndex >= this.enemyB.frames) {
          this.enemyB.frameIndex = 0;
        }
        break;

      case "W":
        this.ctx.drawImage(this.enemyR, this.enemyR.frameIndex * 17.5,
          0, Math.floor(this.enemyR.width / this.enemyR.frames), this.enemyR.height, enemy.x, enemy.y,
          enemy.width, enemy.height);
        this.enemyRCounter += 1;
        if (this.enemyRCounter % 5 == 0) {
          this.enemyR.frameIndex += 1;
          this.enemyRCounter = 0;
        }
        if (this.enemyR.frameIndex >= this.enemyR.frames) {
          this.enemyR.frameIndex = 0;
        }
        break;

      case "S":
        this.ctx.drawImage(this.enemyF, this.enemyF.frameIndex * 17.5,
          0, Math.floor(this.enemyF.width / this.enemyF.frames), this.enemyF.height, enemy.x, enemy.y,
          enemy.width, enemy.height);
        this.enemyFCounter += 1;
        if (this.enemyFCounter % 5 == 0) {
          this.enemyF.frameIndex += 1;
          this.enemyFCounter = 0;
        }
        if (this.enemyF.frameIndex >= this.enemyF.frames) {
          this.enemyF.frameIndex = 0;
        }
        break;

      case "E":
        this.ctx.drawImage(this.enemyL, this.enemyL.frameIndex * 17.5,
          0, Math.floor(this.enemyL.width / this.enemyL.frames), this.enemyL.height, enemy.x, enemy.y,
          enemy.width, enemy.height);
        this.enemyLCounter += 1;
        if (this.enemyLCounter % 5 == 0) {
          this.enemyL.frameIndex += 1;
          this.enemyLCounter = 0;
        }
        if (this.enemyL.frameIndex >= this.enemyL.frames) {
          this.enemyL.frameIndex = 0;
        }
        break;
    }
  })
}

Animations.prototype.drawBoss = function () {
  this.ctx.drawImage(this.boss, this.boss.frameIndex * (this.boss.width / this.boss.frames),
    0, Math.floor(this.boss.width / this.boss.frames), this.boss.height, boss.x, boss.y,
    boss.width, boss.height);
  this.bossCounter += 1;
  if (this.bossCounter % 5 == 0) {
    this.boss.frameIndex += 1;
    this.bossCounter = 0;
  }
  if (this.boss.frameIndex >= this.boss.frames) {
    this.boss.frameIndex = 0;
  }
}

Animations.prototype.princessDraw = function () {
  this.ctx.drawImage(this.princess, princess.x, princess.y, princess.width, princess.height);
}

Animations.prototype.update = function () {
  this.princessDraw();
  this.enemyDraw();
  if (waves === true && canvas.enemyRate === 60 && boss) {
    this.drawBoss();
  }
}

const animations = new Animations(canvas.canvas)