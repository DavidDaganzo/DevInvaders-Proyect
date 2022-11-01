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


  moveAll() {
    this.enemyArray.forEach(elm => elm.move())
  }
}
