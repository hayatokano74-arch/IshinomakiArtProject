# CLAUDE.md（プロジェクト固有）

## プロジェクト概要
- **名前:** （プロジェクト名）
- **目的:** （何のためのプロジェクトか）
- **URL:** （本番URL）
- **リポジトリ:** （GitHub URL）

## 技術スタック
- Next.js (App Router) + TypeScript
- Tailwind CSS
- WordPress（ヘッドレス CMS）/ WPGraphQL
- パッケージマネージャー: npm
- ホスティング: Vercel

## ディレクトリ構成
```
src/
├── app/          # App Router ページ・レイアウト
├── components/   # 共通コンポーネント
├── lib/          # ユーティリティ・API クライアント
└── types/        # TypeScript 型定義
```

## 開発コマンド
```bash
npm run dev          # 開発サーバー起動
npm run build        # 本番ビルド
npm run lint         # ESLint 実行
npm run lint:fix     # ESLint 自動修正
npm run format       # Prettier フォーマット
npm run type-check   # 型チェック
```

## 環境変数
<!-- .env.local に必要な変数を記載（値はダミーで） -->
```
WORDPRESS_API_URL=https://example.com/graphql
```

## コーディング規約
- 関数コンポーネント + named export
- TypeScript strict モード
- Tailwind CSS ユーティリティクラス優先
- モバイルファースト・レスポンシブ対応
- コメントは日本語

## デプロイ
- Vercel に自動デプロイ（main ブランチ push 時）
- 環境変数変更時は `./scripts/sync-env-to-vercel.sh` で同期

## 注意事項
<!-- プロジェクト固有の注意点を記載 -->
