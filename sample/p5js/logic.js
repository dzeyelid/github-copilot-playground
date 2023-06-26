// オセロゲームのロジックを記述する
// 盤面は縦5マス、横5マス
// 盤面の状況を管理する
// 入力されたアルファベットの位置に石を配置する
// 最初は黒石から始める

// 盤面の状況
// 0: 石が置かれていない
// 1: 黒石が置かれている
// 2: 白石が置かれている
let boardStatus = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const STONE_NONE = 0;
const STONE_BLACK = 1;
const STONE_WHITE = 2;

let stoneStatus = STONE_BLACK;

// 黒かどうかを判定する
function isBlack(status) {
  return status === STONE_BLACK;
}

// 石が置かれていないかどうかを判定する
function isNone(status) {
  return status === STONE_NONE;
}

// 入力されたキーコードから、盤面の状況を取得する
// 入力されたキーコードが盤面からはみ出る場合は、-1を返す
function getBoardStatus(keyCode) {
  // 入力されたアルファベットをaから数えて何番目かを取得する
  const index = keyCode - 'a'.charCodeAt(0);

  if (index < 0 || index > 24) {
    return -1;
  }

  // 盤面のx座標とy座標を取得する
  const x = index % 5;
  const y = Math.floor(index / 5);

  return boardStatus[y][x];
}

module.exports = {
  boardStatus,
  isBlack,
  isNone,
  getBoardStatus,
  stoneStatus,
}
