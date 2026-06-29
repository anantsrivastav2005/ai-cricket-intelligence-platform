from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

batter_insights = pd.read_csv("../data/batter_insights.csv")
bowler_insights = pd.read_csv("../data/bowler_insights.csv")
team_insights = pd.read_csv("../data/team_insights.csv")
@app.get("/top-batsmen")
def top_batsmen():
    return (
        batter_insights
        .sort_values("runs", ascending=False)
        .head(10)
        .to_dict(orient="records")
    )
@app.get("/top-bowlers")
def top_bowlers():
    return (
        bowler_insights
        .sort_values("wickets", ascending=False)
        .head(10)
        .to_dict(orient="records")
    )

@app.get("/top-teams")
def top_teams():
    return team_insights.head().to_dict(orient="records")