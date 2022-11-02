const app = {
  appName: 'DevInvaders',
  version: '1.0.0',
  license: undefined,
  author: 'David Daganzo y Gonzalo García',
  description: 'First Ironhack project',
  ctx: undefined,
  background: undefined,
  fpsCouter: 0,
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
    this.interval = setInterval(() => {
      this.fpsCouter++
      if (this.fpsCouter % 100 === 0) {
        this.generateEnemy()
      }

      this.clearAll()
      this.drawAll()
      this.isCollision() ? this.gameOver() : null
      this.bulletsCollision() ? this.gameOver() : null

    }, 1000 / this.FPS)
  },

  reset() {
    // Create Background
    this.background = new Background(this.ctx, this.canvasSize)

    //Create Developer
    this.developer = new Developer(this.ctx, this.canvasSize)
  },

  generateEnemy() {
    let randomImg = Math.floor(Math.random() * 11)
    this.enemyRandom.push(new Enemy(this.ctx, this.canvasSize, randomImg))
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.enemyRandom = this.enemyRandom.filter(elm => elm.enemyPos.y <= this.canvasSize.h)
    this.developer.bullets = this.developer.bullets.filter(elm => elm.position.y >= 0 - elm.size.h)
  },

  drawAll() {
    this.background.draw()
    this.developer.draw()
    this.enemyRandom.forEach(enemy => {
      enemy.draw()
    })

  },

  isCollision() {
    this.enemyRandom.forEach((element) => {
      if (
        this.developer.position.x < element.enemyPos.x + element.enemySize.w &&
        this.developer.position.x + this.developer.size.w > element.enemyPos.x &&
        this.developer.position.y < element.enemyPos.y + element.enemySize.h &&
        this.developer.position.y + this.developer.size.h > element.enemyPos.y
      ) {
        this.gameOver()
      }
    })
  },

  bulletsCollision() {
    this.developer.bullets.forEach((bulletObject) => {
      this.enemyRandom.forEach((element) => {

        if (
          element.enemyPos.x < bulletObject.position.x + bulletObject.size.w &&
          element.enemyPos.x + element.enemySize.w > bulletObject.position.x &&
          element.enemyPos.y < bulletObject.position.y + bulletObject.size.h &&
          element.enemyPos.y + element.enemySize.h > bulletObject.position.y
        ) {
          this.gameOver()
        }
      })
    })
  },


  gameOver() {
    clearInterval(this.interval)
    let gameOverSound = new Audio('./Sounds/GameOver.mp3')
    gameOverSound.play()
  }

}
