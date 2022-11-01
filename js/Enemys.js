class Enemy {
  constructor(ctx, canvasSize,) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.velocity = 0.5
    this.enemyPos = { x: this.canvasSize.w * Math.random(), y: 20 }
    this.enemySize = { w: 100, h: 100 }
    this.randomImg = undefined
    this.enemyImg = ['Angular', 'Bootstrap', 'CSS', 'GIT', 'Github', 'HTML', 'Ironhack', 'Javascript', 'MongoDB', 'NodeJS', 'React'],

      this.enemyInstance = new Image();
    this.enemyInstance.src = `images/Logos/${this.enemyImg[this.randomImg]}.jpg`;

  }

  draw() {
    this.randomImg = Math.floor(Math.random() * this.enemyImg.length)
    this.ctx.drawImage(
      this.enemyInstance,
      this.enemyPos.x,
      this.enemyPos.y,
      this.enemySize.w,
      this.enemySize.h
    )
  }

  move() {
    this.enemyPos.y += this.velocity

  }



  // createEnemy() {
  //   let random = Math.random() * this.enemyImg.length
  //   let EnemyAngular = new Enemy(this.ctx, this.canvasSize, this.enemyImg[0])
  //   this.enemyArray.push(EnemyAngular);
  //   let EnemyBootstrap = new Enemy(this.ctx, this.canvasSize, this.enemyImg[1])
  //   this.enemyArray.push(EnemyBootstrap);
  //   let EnemyCSS = new Enemy(this.ctx, this.canvasSize, this.this.enemyImg[2])
  //   this.enemyArray.push(EnemyCSS);
  // }


  moveAll() {
    this.enemyArray.forEach(elm => elm.move())
  }
}
