import 'phaser'

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

declare var module: {
  hot: {
    dispose(callback: () => void): void
  }
}

if (module.hot) {
  const gameEl = document.getElementById(game.config.parent)
  module.hot.dispose(() => {
    while (gameEl && gameEl.firstChild) {
      gameEl.removeChild(gameEl.firstChild)
    }
  })
}
