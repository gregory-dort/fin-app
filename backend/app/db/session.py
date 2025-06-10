# app/db/session.py

# SQLAlchemy setup and session creation
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Database URL Connection
DATABASE_URL = "postgresql://postgres:SHUgrad25@localhost:5432/fintracker"


engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit = False, autoflush = False, bind = engine)

Base = declarative_base()