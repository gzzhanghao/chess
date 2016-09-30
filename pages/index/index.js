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
      this.data.chessboard[0][i] = ['black', this.data.initial[i]]
      this.data.chessboard[1][i] = ['black', 'pawn']
      this.data.chessboard[6][i] = ['white', 'pawn']
      this.data.chessboard[7][i] = ['white', this.data.initial[i]]
      for (let j = 2; j < 6; j++) {
        this.data.chessboard[j][i] = null
      }
    }
  },

})
