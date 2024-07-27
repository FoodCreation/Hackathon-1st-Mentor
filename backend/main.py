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


@app.get("/")
def read_root():
    return {"message": "Welcome to the Food Recommendation API"}


@app.post("/recommend")
def recommend(request: RecommendationRequest):
    try:
        prompt = f"空腹度は{request.hunger_level}で、ジャンル{request.food_type}でおすすめの料理を教えてください。口調は端的かつ愉快でお願いします。"
        recommendation = get_recommendation(prompt)
        return recommendation
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)