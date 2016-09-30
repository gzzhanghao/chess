Page({

  black: '♜♞♝♛♚♟',
  white: '♖♘♗♕♔♙',

  data: {
    chessboard: '♖♘♗♕♔♗♘♖♙♙♙♙♙♙♙♙                                ♟♟♟♟♟♟♟♟♜♞♝♛♚♝♞♜',
    cellState: {},
    selected: null,
  },

  onTapCell(event) {
    const dataset = event.currentTarget.dataset

    const row = dataset.row|0
    const col = dataset.col|0

    if (this.data.selected) {
      // @todo check movement
      return this.setData({ cellState: {} })
    }

    const cellState = { [`${row} ${col}`]: 'selected' }

    const target = this.data.chessboard[8 * row + col]
    // @todo update `available` status
    // @todo update `attack` status

    // @todo update `danger` status

    this.setData({ cellState })
  },

})
