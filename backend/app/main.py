# app/main.py

# Calling Dependencies
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # CORS module
from app.api import users # import user creation routes
from app.api import auth # import auth routes

# Creating FastAPI App
app = FastAPI()

# CORS settings
origins = [
    "http://localhost:5173", # React/Vite default port
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Register routers
app.include_router(users.router)
app.include_router(auth.router)