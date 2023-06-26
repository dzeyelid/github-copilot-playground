// オセロゲームのロジックを記述する
// 盤面は縦5マス、横5マス
// 盤面の状況を管理する
// 盤面の各マスにはアルファベットが割り振られている
// 左上がaで始まり横向きに順番に割り振られている
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

// 白かどうかを判定する
function isWhite(status) {
  return status === STONE_WHITE;
}

// 石が置かれていないかどうかを判定する
function isNone(status) {
  return status === STONE_NONE;
}

// 入力されたキーコードにより盤面の状況を更新する
function updateBoardStatusByInput(key) {
  // 入力されたアルファベットをaから数えて何番目かを取得する
  const index = key.charCodeAt(0) - 'a'.charCodeAt(0);

  // インデックスが盤面からはみ出る場合は、何もしない
  if (index < 0 || index > 24) {
    return;
  }

  // 盤面のx座標とy座標を取得する
  const x = index % 5;
  const y = Math.floor(index / 5);

  // 盤面に石がなければ、盤面の状況を更新する
  if (isNone(boardStatus[y][x])) {
    boardStatus[y][x] = stoneStatus;

    // 石の色を反転する
    stoneStatus = isBlack(stoneStatus) ? STONE_WHITE : STONE_BLACK;
  }
}
