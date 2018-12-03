import { Scene } from "phaser";

export default class MainScene extends Scene {
  constructor() {
    super('main')
  }

  create(): void {
    this.add.text(400, 300, 'Hello, Phaser!')
      .setFontSize(32)
      .setOrigin(0.5)
  }
}
