import 'phaser'
import { hot, HotModule } from './lib/utils/hmr'

import MainScene from './scenes/MainScene'

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  height: 600,
  scene: [
    MainScene
  ]
})

hot(module as HotModule, game)
