from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
from recommender import get_recommendation

app = FastAPI()

# CORSの設定
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RecommendationRequest(BaseModel):
    hunger_level: int
    food_type: str
    food_genre: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the Food Recommendation API"}

@app.post("/recommend")
def recommend(request: RecommendationRequest):
    try:
        print(f"Received Request: {request}")
        prompt = f"おすすめの料理を1品教えてください。現在の空腹度を10段階で表すと{request.hunger_level}で、ジャンル{request.food_type}で{request.food_genre}を使用した料理が食べたいです。口調は端的かつ愉快でお願いします。また，回答は太字をや改行などの装飾を使わずに出力して下さい。"
        print(f"Generated Prompt: {prompt}")
        recommendation = get_recommendation(prompt)
        print(f"Recommendation: {recommendation}")
        return recommendation
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
