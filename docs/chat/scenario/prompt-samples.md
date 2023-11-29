# プロンプト サンプル集

プロンプトエンジニアリングにおける、Zero-shot、One-Shotのサンプルです。

このサンプルにおいて、それぞれのプロンプトを実行する場合は、会話をクリアしてから実行してください。

### サンプル1

サンプル内の`calculator.js`は存在しなくても差分を確認できます。GitHub Copilotは、ファイル名から推測して電卓を想定したテストを作成します。

#### Zero-shot

```
calculator.jsの全ての実装に対してユニットテストを書いてください
```

#### One-Shot

```
calculator.jsの全ての実装に対してユニットテストを書いてください。例えば、次のようにしてください。test(‘adds 1 + 2 to equal 3’, () => ( expect(calculate(1, 2 ‘+’)).toBe(3); });
```

### サンプル2

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

### サンプル3

#### Zero-shot

```
スネークゲームのコードを書いてくれますか？
```

#### One-Shot

```
スネークゲームのコードを書いてくれますか？例えば、リーダーボードの仕組みを載せてください。
```
