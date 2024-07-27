import requests
import os

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent"


def get_recommendation(prompt: str) -> dict:
    if not GEMINI_API_KEY:
        raise ValueError("GEMINI_API_KEY is not set")

    headers = {
        "Authorization": f"Bearer {GEMINI_API_KEY}",
        "Content-Type": "application/json",
    }  # APIキーをヘッダーにセット
    payload = {"prompt": prompt}  # リクエストボディ

    response = requests.post(
        GEMINI_API_URL, json=payload, headers=headers
    )  # POSTリクエストを送信
    response.raise_for_status()  # エラーがあれば例外を投げる
    return response.json()  # レスポンスをJSON形式で返す
