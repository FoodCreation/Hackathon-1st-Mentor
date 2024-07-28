import os
import google.generativeai as genai
from dotenv import load_dotenv

# .envファイルの場所を指定してロードする
env_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '.env'))
print(f'Loading .env file from: {env_path}')
load_dotenv(dotenv_path=env_path)

# APIキーの取得
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY is not set")

# APIキーの設定
genai.configure(api_key=GEMINI_API_KEY)

# print(GEMINI_API_KEY)

# モデルの初期化
model = genai.GenerativeModel('gemini-1.5-flash')

def get_recommendation(prompt: str) -> dict:
    try:
        # コンテンツの生成
        response = model.generate_content(
            contents=prompt,
            # max_outputs_tokens=100  # 必要に応じて変更
        )
        return response.to_dict()
    except Exception as e:
        # 具体的なエラーメッセージをログに出力
        print(f"Error: {e}")
        raise ValueError(f"Error while getting recommendation: {str(e)}")