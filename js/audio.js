function Audios(canvas) {
  this.ctx = canvas.getContext('2d');

  this.bossSong = new Audio();
  this.bossSong.src = "./audio/boss-song.mp3",
  this.bossSong.volume = 0.5;

  this.backgroundMusic = new Audio();
  this.backgroundMusic.src = "./audio/dark-world.mp3"
  this.backgroundMusic.volume = 0.5;
  this.backgroundMusic.autoplay = true;


  this.enemyDies = new Audio();
  this.enemyDies.src = "./audio/enemy-dies.wav"
  this.enemyHit = new Audio();
  this.enemyHit.src = "./audio/enemy-hit.wav"

  this.swordSound = new Audio();
  this.swordSound.src = "./audio/sword-swing.wav"
  this.playerDies = new Audio();
  this.playerDies.src = "./audio/link-dies.wav"
  this.playerHit = new Audio();
  this.playerHit.src = "./audio/link-hurt.wav"

  this.princessHit = new Audio();
  this.princessHit.src = "./audio/princess-hit.mp3"
  this.princessDie = new Audio();
  this.princessDie.src = "./audio/princess-die.mp3"
  this.princessSave = new Audio();
  this.princessSave.src = "./audio/princess-save.mp3"
  

  this.shopMusic = new Audio();
  this.shopMusic.src = "./audio/shop.mp3"

  this.juanSound = new Audio();
  this.juanSound.src = "./audio/juan.mp3"

  this.diegoSound = new Audio();
  this.diegoSound.src = "./audio/diego.mp3"

  this.teoSound = new Audio();
  this.teoSound.src = "./audio/teo.mp3"

  this.gabiSound = new Audio();
  this.gabiSound.src = "./audio/gabi.mp3"

}

const audios = new Audios(canvas.canvas);