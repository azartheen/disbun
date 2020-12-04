import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from db import db
from routes import api

app = FastAPI(
    title="DISBUN Non HASURA API",
    version="0.14.0",
    description="API for Disbun",
    openapi_url="/api/openapi.json",
    docs_url="/api/docs",
    redoc_url=None,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(api.router, prefix="/api")

app.mount("/", StaticFiles(directory="client/build", html=True), name="build")


@app.on_event("startup")
async def startup():
    await db.open_pool()


@app.on_event("shutdown")
async def shutdown():
    await db.close_pool()


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
