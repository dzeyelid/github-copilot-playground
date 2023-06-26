// p5.jsによる描画を行う
// オセロの盤面を描画する
// 縦5マス、横5マスの盤面を描画する
// 入力されたアルファベットの位置に石を描画する
// 最初は黒石から始める

const STONE_NONE = 0;
const STONE_BLACK = 1;
const STONE_WHITE = 2;

let stoneStatus = STONE_BLACK;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(40, 40, 40);
  drawBoard();
  drawStones();
}

// 盤面を描画する
function drawBoard() {
  // 盤面の縦線を描画する
  for (let i = 0; i < 6; i++) {
    line(100 * i, 0, 100 * i, 500);
  }

  // 盤面の横線を描画する
  for (let i = 0; i < 6; i++) {
    line(0, 100 * i, 500, 100 * i);
  }

  // 盤面の各マスの中央にアルファベットを振る
  let sign = 'a';
  // y軸の段を繰り返す
  for (let y = 0; y < 5; y++) {
    // x軸の列を繰り返す
    for (let x = 0; x < 5; x++) {
      // アルファベットを描画する
      stroke(10, 10, 10);
      text(sign, 100 * x + 46, 100 * y + 54);
      // アルファベットを更新する
      sign = String.fromCharCode(sign.charCodeAt(0) + 1);
    }
  }
}

// オセロの石を描画する
function drawStones() {
  // y軸の段を繰り返す
  for (let y = 0; y < 5; y++) {
    // x軸の列を繰り返す
    for (let x = 0; x < 5; x++) {
      // 盤面の状況を取得する
      const status = boardStatus[y][x];
      // 石を描画する
      if (status !== STONE_NONE) {
        drawStone(x, y, status);
      }
    }
  }
}

// 石を描画する
function drawStone(x, y, status) {
  // 石の縁の色を指定する
  stroke(10, 10, 10);
  const c = isBlack(status) ? color(0, 0, 0) : color(255, 255, 255);
  fill(c);
  // 石を描画する
  circle(100 * x + 50, 100 * y + 50, 80);
}

// 黒かどうかを判定する
function isBlack(status) {
  return status === STONE_BLACK;
}

// キー入力を受け付ける
function keyPressed() {
  // 入力されたアルファベットをaから数えて何番目かを取得する
  const index = key.charCodeAt(0) - 'a'.charCodeAt(0);

  // インデックスが盤面からはみ出る場合は、何もしない
  if (index < 0 || index > 24) {
    return;
  }

  // 盤面のx座標とy座標を取得する
  const x = index % 5;
  const y = Math.floor(index / 5);

  // 盤面の状況を更新する
  boardStatus[y][x] = stoneStatus;
  // 石の色を反転する
  stoneStatus = isBlack(stoneStatus) ? STONE_WHITE : STONE_BLACK;
}
