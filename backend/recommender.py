import os
import requests
import logging
from google.oauth2 import service_account
from google.auth.transport.requests import Request
from dotenv import load_dotenv
from fastapi import HTTPException

# .envファイルの内容を読み込む
load_dotenv()

# ログの設定
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# 環境変数からサービスアカウントの情報を取得
SERVICE_ACCOUNT_FILE = os.getenv("SERVICE_ACCOUNT_FILE")
SCOPES = ["https://www.googleapis.com/auth/cloud-platform"]

if not SERVICE_ACCOUNT_FILE:
    raise ValueError("SERVICE_ACCOUNT_FILE is not set")

credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES
)

GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent"


def get_recommendation(prompt: str) -> dict:
    logger.debug(f"Prompt: {prompt}")

    if not credentials:
        logger.error("Credentials are not set")
        raise ValueError("Credentials are not set")

    try:
        credentials.refresh(Request())
        token = credentials.token
    except Exception as e:
        logger.error(f"Error refreshing credentials: {e}")
        raise HTTPException(
            status_code=500, detail=f"Error refreshing credentials: {e}"
        )

    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }
    payload = {"prompt": prompt}

    try:
        response = requests.post(GEMINI_API_URL, json=payload, headers=headers)
        logger.debug(f"Response status code: {response.status_code}")
        response.raise_for_status()
        logger.debug(f"Response: {response.json()}")
        return response.json()
    except requests.RequestException as e:
        logger.error(f"Request failed: {e}")
        raise HTTPException(status_code=500, detail=f"Request to GeminiAPI failed: {e}")
