Page({

  data: {
    chessboard: [
      [,,,,,,,,],
      [,,,,,,,,],
      [,,,,,,,,],
      [,,,,,,,,],
      [,,,,,,,,],
      [,,,,,,,,],
      [,,,,,,,,],
      [,,,,,,,,],
    ],
    initial: ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
    chess: {
      black: {
        rook: '♖',
        knight: '♘',
        bishop: '♗',
        queen: '♕',
        king: '♔',
        pawn: '♙',
      },
      white: {
        rook: '♜',
        knight: '♞',
        bishop: '♝',
        queen: '♛',
        king: '♚',
        pawn: '♟',
      },
    },
  },

  onLoad() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.data.chessboard[i][j] = null
      }
    }
    this.data.initial.forEach((name, index) => {
      this.data.chessboard[0][index] = ['black', name]
      this.data.chessboard[1][index] = ['black', 'pawn']
      this.data.chessboard[6][index] = ['white', 'pawn']
      this.data.chessboard[7][index] = ['white', name]
    })
  },

})
