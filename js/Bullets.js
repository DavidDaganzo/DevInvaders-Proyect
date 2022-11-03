class Bullets {

  constructor(ctx, canvasSize, developerPosX, developerPosY, developerWidth, developerHeight) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.position = {
      x: developerPosX + developerWidth / 2 - 45,
      y: developerPosY
    }
    this.velocity = 4
    this.size = { w: 90, h: 90 }
    this.bulletInstance = new Image();
    this.bulletInstance.src = `./images/bulletsSprite.png`;
    this.bulletInstance.frames = 4;
    this.bulletInstance.framesIndex = 0;
  }
  draw(framesCounter) {
    this.ctx.drawImage(
      this.bulletInstance,
      this.bulletInstance.framesIndex * (this.bulletInstance.width / this.bulletInstance.frames),
      0,
      this.bulletInstance.width / this.bulletInstance.frames,
      this.bulletInstance.height,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
    )
    this.animate(framesCounter)
    this.move()
  }
  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.bulletInstance.framesIndex++;
    }
    if (this.bulletInstance.framesIndex >= this.bulletInstance.frames) {
      this.bulletInstance.framesIndex = 0;
    }
  }

  move() {
    this.position.y -= this.velocity
  }
}