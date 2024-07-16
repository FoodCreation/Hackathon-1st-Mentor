# Node.jsのベースイメージ
FROM node:latest

# pnpmのインストール
RUN npm install -g pnpm

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係ファイルをコピーしてインストール
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションのビルド
RUN pnpm build

# アプリケーションの実行
CMD ["pnpm", "start"]

