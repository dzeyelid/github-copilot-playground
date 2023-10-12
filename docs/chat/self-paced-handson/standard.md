# GitHub Copilot Chatセルフペースドハンズオン

GitHub Copilot Chatを知るためのハンズオンです。

現行のGitHub Copilot（code completion）とは異なり、チャット形式でAIのパワーを享受できるGitHub Copilot Chatについて、操作のポイントと、シナリオベースのハンズオンを掲載します。

後半のシナリオベースのハンズオンは、GitHub Copilot Chatの特性上、手順に従えば完成までたどり着けるというものではありません。シナリオを参考に、GitHub Copilot Chatの扱い方の感覚を模索してみてください。

- [GitHub Copilot Chat操作のポイント](#GitHub-Copilot-Chat操作のポイント)
- [シナリオベースのハンズオン](#シナリオベースのハンズオン)

## GitHub Copilot Chat操作のポイント

- サイドバー（sidebar）
- インライン（`Ctrl + i`）
- クイックチャット（`Ctrl + Shift + i`）

### サイドバー

- Insert into current cursor
- Insert into new file
- Run in terminal
- Inline chat

### クイックチャット

## シナリオベースのハンズオン

- Nuxt 3のプロジェクトを作成する
- Markdownで書いてプレビュー表記できるエディタを作る
- TailwindCSSを適用する
- プレビューのところに、`@tailwindcss/typography`を導入する

### Nuxt 3のプロジェクトを作成する

```
Nuxt 3のプロジェクトを作るにはどうしたらいいですか？
```

ここで、`create-nuxt-app`について回答してきたら、それはNuxt 2の内容なので聞きなおしてください。

```
それはNuxt 2の内容です。Nuxt 3ではどうすればよいですか？
```

Nuxt 3のプロジェクトを作成するときは、`nuxi`を使います。以下のようなコマンドの実行を促されていれば正解です。（`npm install -g nuxi`として、`nuxi`をインストールさせる場合もあります）

```bash
# Nuxt 3のプロジェクトをnuxt3-appというディレクトリの中に作成する
npx nuxt init nuxt3-app
```

ディレクトリに移動して、開発サーバーを起動してみましょう。

```bash
# ディレクトリに移動する
cd nuxt3-app

# 開発サーバーを起動する
npm run dev
```

### Markdownで書いてプレビュー表記できるエディタを作る

```
このプロジェクトにMarkdownのプレビューができるエディタを実装するにはどうすればいいですか？
```

`@nuxtjs/markdown-it`を勧めてくることがありますが、複雑になるので使いません。条件を付けて聞きなおしましょう。

```
@nuxtjs/markdown-itを使わずに、Markdownのプレビューができるエディタを実装するにはどうすればいいですか？
```

`pages/index.js`に書くように誘導されることが多いようです。

だいたい準備できたら開発サーバーを起動してみましょう。

```bash
npm run dev
```

すると、Nuxt 3の初期のサンプルページが表示されるのみで、意図した結果にならないかと思います。ここには、`Remove this welcome page by replacing <NuxtWelcome /> in app.vue  with your own code.`のように書かれ、`app.vue`を編集するように促されます。これもGitHub Copilot Chatに聞いてみましょう。

```
app.vueからpages/index.vueをよびだすにはどうすればいいですか？
```

ここで、`<Nuxt />`を使うように回答してきたら、それはNuxt 2の内容なので聞きなおしてください。

```
それはNuxt 2の書き方です。Nuxt 3でpages/index.vueを呼び出す方法を教えて下さい。
```

正解は、`<NuxtPage />`を使うことです。

`app.vue`の`<NuxtWelcome />`を`<NuxtPage />`書き換えると動作しましたね？

![](../images/markdown-editor-first-result.png)

しかし、ちょっと無骨すぎますね。

TailwindCSSを適用して、見た目のカスタマイズがしやすいようにしましょう。

```
このNuxt 3のプロジェクトにTailwindCSSを適用するにはどうすればよいですか？
```

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

`-p`はNuxt 3で使わない`postcss.config.js`を生成してくれるのですが、不要です。（生成してしまっても使わないだけなので大丈夫です）

```
npx tailwindcss init
```

わかりやすいように、いくつか`class`を付与しておきましょう。エディタの実装は、おそらく下記のように`<textarea>`や`<div v-html>`で構成されていると思います。

```vue
<textarea ...></textarea>
<div v-html="..."></div>
```

この部分を選択し、インラインでCopilot Chatに見た目の変更を指示してみましょう。

```
TailwindCSSを利用し、textareaとdivが横並びになるように、またtextareaの幅を400pxに、ボーダーを明るいオレンジで角丸にしてください。
```

いったんそのまま進めると、以下のような警告が表示され、TailwindCSSが適用されていないことがわかるので、このエラーについて聞いてみましょう。

```bash
WARN  Using postcss.config.js is not supported together with Nuxt. Use options.postcss instead. You can read more in https://nuxt.com/docs/api/configuration/nuxt-config#postcss.
```

`/explain`の後ろに警告文を渡します。

```
/explain WARN  Using postcss.config.js is not supported together with Nuxt. Use options.postcss instead. You can read more in https://nuxt.com/docs/api/configuration/nuxt-config#postcss.
```

うまく回答を得られないときは、以下のように質問を変えてみるのも手かもしれません。

```
Nuxt 3のpostcssの設定について教えて
```

正しく設定できたら、見た目の変更が反映されているはずです。

ただし、Markdownで`# 見出し`や`- 箇条書き`と記述しても、プレビューの`<h1>`や`<li>`などの装飾が表示されません。これは、TailwindCSSは明示的に`class`を指定していない場合はフラットな表示になるように装飾をリセットしているためです。

これを解消する方法をGitHub Copilot Chatに聞いてみましょう。

```
TailwindCSSで明示的にclassを指定しなくてもいい感じの装飾がされるようにする方法はありますか？
```

`@tailwindcs/typography`をお勧めされたと思います。これを導入してみましょう。

```
npm install @tailwindcss/typography
```

`tailwind.config.js`の`plugins`に`require('@tailwindcss/typography')`を追加します。

```js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    // ↓ここから
    require('@tailwindcss/typography'),
    // ↑ここまでを反映する
    // ...
  ],
}
```

そして、いい感じに装飾したいHTML要素に対して`prose`クラスを適用します。

```vue
<div v-html="..." class="prose"></div>
```
