from fastapi import FastAPI, HTTPException,Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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
async def recommend(request: Request):
    try:
        request_data = await request.json()
        hunger_level = request_data.get("hunger_level")
        food_type = request_data.get("food_type")

        if hunger_level is None or food_type is None:
            raise HTTPException(status_code=400, detail="Invalid input data")

        prompt = f"空腹度は{hunger_level}で、ジャンル{food_type}でおすすめの料理を教えてください。口調は端的かつ愉快でお願いします。"
        recommendation = get_recommendation(prompt)
        return recommendation
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error occurred: {e}")
