class Developer {
  constructor(ctx, canvasSize) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.position = {
      x: window.innerWidth / 2 - 50,
      y: window.innerHeight - 130
    },
      this.size = { w: 100, h: 100 },
      this.developerInstance = new Image();
    this.developerInstance.src = '../images/Developer.png';
    this.setEventHandlers();
  }

  draw() {
    this.ctx.drawImage(
      this.developerInstance,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
    )
  }

  setEventHandlers() {
    document.onkeydown = event => {
      switch (event.key) {
        case 'ArrowLeft':
          this.position.x -= 10
          break;
        case 'ArrowRight':
          this.position.x += 10
          break;
        case 'ArrowUp':
          this.position.y -= 10
          break;
        case 'ArrowDown':
          this.position.y += 10
          break;
      }
    }
  }
}