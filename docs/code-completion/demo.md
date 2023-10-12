# [自由研究] GitHub Copilot ってぶっちゃけどう書くといいの？

2023年6月2日に開催されたイベント「GitHub Copilot開発者が語る最新アップデート ～ コード生成の裏側を知って、より効率的に開発しよう！」で子なったデモの資料です。

Challenge real-time demo!

## デモ

### Microsoft Build 2023で紹介されていたポイント

3つのS

- Single
- Specific
- Short

### 最初の実験

- [ ] ゼロから書き出してみる
  - コメントの書き方
    - 序盤は期待する提案はあまり出てこないので、とりあえず書き出す必要がある
  - 関数名や変数名
    - 明確な関数名や変数名にすると、提案も明確になる
  - 先にドキュメントを用意するといいのか
    - あまり考慮されなさそう
- [ ] カーソルの前後のコンテキストが考慮されるか
  - 前後どちらも考慮される
- [ ] タブに開いているファイルが考慮されるか
  - される
- [ ] コードに内容をもとにREADMEを書く

ヒント

```js
// 二つの時間を加算する
// HH:MM:SS形式の文字列を受け取る
// 1桁の場合は0で埋める
// addTimeをテストする
```

### さまざまな言語を試してみる

#### Node.js

- `package.json`はタブに開いていても、あまり考慮されない

#### Front-end(HTML, CSS framework)

HTMLを書き出してみある

```html
<!DOCTYPE html>
```

CSSを書く

```html
  <style>
    /* 文字色は */

    /* 背景色は */
  </style>
```

Bootstrap 5を導入してみる

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

#### Regex

```js
// セマンティックバージョニングのmajor,minor,patchを分割する正規表現を記述する
const semverRegex = new RegExp('^v([0-9]+)\.([0-9]+)\.([0-9]+)$')

const ver = 'v1.2.3'
const matches = semverRegex.exec(ver)
console.log(matches[1]) // 1
console.log(matches[2]) // 2
console.log(matches[3]) // 3
```

#### PHP

```bash
cd sample/php
XDEBUG_MODE=off composer create-project laravel/laravel example-app
cd example-app
XDEBUG_MODE=off php artisan serve
```

試しにコントローラを作成し、何らかの処理を書きます。

```bash
XDEBUG_MODE=off php artisan make:controller HelloController
```

次に、`routes/api.php`にルーティングを記述します。

まずはコントローラをインポートしておきます。

```php
use App\Http\Controllers\HelloController;
```

`/api/hello`にアクセスしたときに処理が行われるように記述していきます。

なお、下記のようにバージョンの違いに留意します。

```php
// これは古い書き方
Route::get('/hello', 'HelloController@hello');

// こちらが現行バージョンの書き方
Route::get('/hello', [HelloController::class, 'hello']);
```

サーバを実行して確認します。

```bash
XDEBUG_MODE=off php artisan serve
```

## [Appendix] GitHub CopilotとGitHub Copilot chatの比較

- 使いどころの所感

| GitHub Copilot | GitHub Copilot chat |
|----|----|
| 柔軟なコード補完 | よりペアプロをしているかのような対話型のサポート |

### [Appendix] OpenAIのCodexと比較してみる

OpenAIおよびAzure OpenAIのREST APIでCodexモデル（または後継として推奨されるモデル）を試してみます。

#### OpenAIリファレンス

- [Code completion (deprecated) - OpenAI API](https://platform.openai.com/docs/guides/code/code-completion-deprecated)
  - [Inserting code](https://platform.openai.com/docs/guides/code/inserting-code)
  - [Editing code](https://platform.openai.com/docs/guides/code/editing-code)
- [Chat completion - OpenAI API](https://platform.openai.com/docs/guides/chat)

#### Azure OpenAIリファレンス

- [Codex モデルを使用してコードを操作する方法 - Azure OpenAI Service | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/how-to/work-with-code)
- [Azure OpenAI Service の REST API リファレンス - Azure OpenAI | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/reference)
