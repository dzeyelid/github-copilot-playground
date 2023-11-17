# GitHub Copilotセルフペースドハンズオン - クイックキャッチアップ

## はじめに

本ハンズオンでは、GitHub Copilotの概要をご紹介してから、code completionとchatについてポイントをご紹介します。

## GitHub Copilotとは

GitHub Copilotは、GitHubが開発した開発に特化したAIアシスタントです。コード補完や生成、解説を行うことができます。始めはコード補完のみでしたが、今ではチャットやCLI上など、さまざまなシーンでAIの支援を活用できるようになってきています。

### 機能

| 機能 | リリース状況 | 説明 |
|----|----|----|
| **GitHub Copilot(Code completion)** | GA | AIによるコード補完。IDEの拡張機能として提供される。LLMモデルはGPT-3.5 Turbo（※1）。 |
| **GitHub Copilot Chat** | Public beta, 12月GA予定 | IDEまたはモバイルアプリ（※2）上で、会話形式でAIによるコード生成、解説を支援する。LLMモデルはGPT-4（※3）。 |
| **Copilot in the CLI** | Public beta | AIによるコマンド生成支援 |
| GitHub Copilot Chat in GitHub.com | GitHub Enterpriseに内包予定 | GitHub.com上でGitHub Copilot Chatを利用できる。指定したリポジトリをコンテキストに含められる。 |
| GitHub Copilot pull request summaries | GitHub Enterpriseに内包予定 |  |

- ※1 2023年6月の情報。
  - 参考: [GitHub Copilot - June 29th Update - The GitHub Blog](https://github.blog/changelog/2023-06-29-copilot-june-2023-update/#code-completion-improvements)
    > GitHub Copilot is now even more powerful and responsive for developers, thanks to a new model powered by GPT-3.5 Turbo through the collaboration across OpenAI, Azure AI, and GitHub that offers 13% latency improvements.
- ※2 GitHubのモバイルアプリで提供される予定。
- ※3 GitHub Universe 2023で、GitHub Copilot ChatはGPT-4ベースだと公表されている。
  - 参考: [Universe 2023: Copilot transforms GitHub into the AI-powered developer platform - The GitHub Blog](https://github.blog/2023-11-08-universe-2023-copilot-transforms-github-into-the-ai-powered-developer-platform/)

### 料金体系

| プラン | 説明 |
|----|----|
| GitHub Copilot Individual | 個人利用向けプラン。データの収集の可否を選択できる。 |
| GitHub Copilot Business | Organization単位、Enterprise単位での利用。Individualと異なり、データの収集は一律行わない。 |
| GitHub Copilot Enterprise | 最近発表されたプラン。Organization単位、Enterprise単位での利用。後述。 |

#### GitHub Copilot Enterpriseについて
GitHub Copilot Enterpriseは、GitHub Universe 2023で発表されました。GitHub Copilot Businessの機能に加え、以下のようなGA前に試用するには、waitlistの申請が開始されています。

- Copilot Chat in GitHub.com
- Documentation search and summaries
- Copilot pull request summaries
- Code review skills
- Fine-tuned models（Currently in preview. Copilot Enterprise grants you access to customization for fine-tuned models (available in 2024).）

詳しくは下記サービスサイトやドキュメントをご参照ください。

- 参考: [About GitHub Copilot Enterprise - GitHub Docs](https://docs.github.com/ja/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise)
- 参考: [Pricing - GitHub Copilot · Your AI pair programmer](https://github.com/features/copilot#pricing)