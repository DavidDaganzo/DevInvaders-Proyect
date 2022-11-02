class Bullets {

  constructor(ctx, canvasSize, developerPosX, developerPosY, developerWidth, developerHeight) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.position = {
      x: developerPosX + developerWidth / 2,
      y: developerPosY
    }
    this.size = { w: developerWidth, h: developerHeight }
    this.velocity = 2
    this.bulletSize = { w: 10, h: 45 }
    this.bulletInstance = new Image();
    this.bulletInstance.src = `./images/bullet.png`;

  }
  draw() {
    this.ctx.drawimage(
      this.bulletInstance,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
    )
    move()
  }

  move() {
    this.position.y -= this.velocity
  }


}