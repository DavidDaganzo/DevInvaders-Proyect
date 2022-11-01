const app = {
  appName: 'DevInvaders',
  version: '1.0.0',
  license: undefined,
  author: 'David Daganzo y Gonzalo García',
  description: 'First Ironhack project',
  ctx: undefined,
  background: undefined,
  // createEnemy: undefined,
  fpsCouter: 0,
  randomEnemy: undefined,
  enemyMap: undefined,
  developer: undefined,
  enemyRandom: [],
  FPS: 60,
  canvasSize: {
    w: undefined, h: undefined
  },


  init() {
    this.setDimensions()
    this.setContext()
    this.start()
  },

  setDimensions() {
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
    document.querySelector('#canvas').setAttribute('height', this.canvasSize.h)
    document.querySelector('#canvas').setAttribute('width', this.canvasSize.w)
  },

  setContext() {
    this.ctx = document.querySelector('#canvas').getContext('2d')

  },

  start() {
    this.reset()
    setInterval(() => {
      this.fpsCouter++
      if (this.fpsCouter % 200 === 0) {
        this.generateEnemy()
      }
      this.clearAll()
      this.drawAll()
    }, 1000 / this.FPS)
  },

  reset() {
    // Create Background
    this.background = new Background(this.ctx, this.canvasSize)

    // Create enemys




    //Create Developer
    this.developer = new Developer(this.ctx, this.canvasSize)
  },

  generateEnemy() {
    this.enemyRandom.push(new Enemy(this.ctx, this.canvasSize))
    console.log(this.enemyRandom.length)
  },




  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    // this.enemyArray = this.enemyArray.filter(elm => elm.enemyPos.y >= this.window.innerHeight)
  },

  drawAll() {
    this.background.draw()
    this.developer.draw()

    // this.enemyArray[0].draw()
    // this.enemyArray[1].draw()
    // this.enemyArray[2].draw()

    // if (this.enemyArray[0].enemyPos.y || this.enemyArray[1].enemyPos.y || this.enemyArray[2].enemyPos.y > 200) {
    //   this.enemyArray[3].draw()
    //   this.enemyArray[4].draw()
    //   this.enemyArray[5].draw()
    // }

  },



}
