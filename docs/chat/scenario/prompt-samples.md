# プロンプト サンプル集

プロンプトエンジニアリングにおける、Zero-shot、One-Shotのサンプルです。

このサンプルにおいて、それぞれのプロンプトを実行する場合は、会話をクリアしてから実行してください。

### サンプル1

#### Zero-shot

```
じゃんけんゲームのコードを書いてくれますか？
```

#### One-Shot

```
じゃんけんゲームのコードを書いてくれますか？例えば、二人のプレイヤーの入力を待って対戦します。
```

### サンプル2

#### Zero-shot

```
JavaScriptで四則演算を行う関数を書いてくれますか？
```

#### One-Shot

```
JavaScriptで四則演算のコードを書いてくれますか？例えば、次のようにしてください。const add = (a, b) => a + b;
```

----

<details>
<summary>備考: プレゼンテーション資料に基づくサンプル</summary>

以下はプレゼンテーション資料に基づいたサンプルです。

### サンプルA

サンプル内の`calculator.js`は存在しなくても差分を確認できます。GitHub Copilotは、ファイル名から推測して電卓を想定したテストを作成します。

#### Zero-shot

```
calculator.jsの全ての実装に対してユニットテストを書いてください
```

#### One-Shot

```
calculator.jsの全ての実装に対してユニットテストを書いてください。例えば、次のようにしてください。test(‘adds 1 + 2 to equal 3’, () => ( expect(calculate(1, 2 ‘+’)).toBe(3); });
```

### サンプルB

#### Zero-shot

```
HTMLの計算機を作ってくれますか？
```

#### One-Shot

```
HTMLの計算機を作ってくれますか？
次の例を使ってください。
<!DOCTYPE html>
<html>
  <head>
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
```

### サンプルC

#### Zero-shot

```
スネークゲームのコードを書いてくれますか？
```

#### One-Shot

```
スネークゲームのコードを書いてくれますか？例えば、リーダーボードの仕組みを載せてください。
```

</details>
