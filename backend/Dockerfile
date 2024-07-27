#ベースイメージとして公式のPythonイメージを使用
FROM python:3.9-slim

#作業ディレクトリを設定
WORKDIR /app

#必要なパッケージをインストール
COPY requirements.txt .

#pipを使用してPythonパッケージをインストール
RUN pip install --no-cache-dir -r requirements.txt

#アプリケーションのソースコードをコピー
COPY . .

# FastAPIのサーバーを起動
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
