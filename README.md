# プロジェクト名

## 概要
<!-- プロジェクトの説明 -->

## セットアップ

### 必要条件
- Node.js v25+
- npm

### インストール
```bash
git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
cd PROJECT_NAME
npm install
```

### 環境変数
`.env.local` を作成し、以下の変数を設定:
```
WORDPRESS_API_URL=https://example.com/graphql
```

### 開発サーバー起動
```bash
npm run dev
```
http://localhost:3000 で確認

## 開発

### ブランチ戦略
- `main` — 本番（Vercel 自動デプロイ）
- `feature/xxx` — 機能開発
- `fix/xxx` — バグ修正

### コミットメッセージ
日本語で簡潔に書く:
```
機能: ヘッダーナビゲーションを追加
修正: モバイル表示の崩れを修正
改善: 画像読み込みの最適化
```

### コード品質
```bash
npm run lint        # ESLint チェック
npm run format      # Prettier フォーマット
npm run type-check  # TypeScript 型チェック
```
pre-commit フックで自動実行されます。

## デプロイ
- `main` ブランチへの push で Vercel に自動デプロイ
- 環境変数変更時は Vercel 側も同期すること

## ライセンス
<!-- ライセンスを記載 -->
