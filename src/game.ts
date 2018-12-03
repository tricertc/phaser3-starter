import 'phaser'

import MainScene from './scenes/MainScene'

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [
    MainScene
  ]
})
