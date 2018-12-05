export interface HotModule extends NodeModule {
  hot: {
    accept(callback: () => void): void,
    dispose(callback: () => void): void
  }
}

export function hot(target: HotModule, game: Phaser.Game) {
  const el = document.getElementById(game.config.parent)
  if (el && target.hot) {
    target.hot.dispose(() => {
      while (el.firstChild) {
        el.removeChild(el.firstChild)
      }
    })
  }
}
