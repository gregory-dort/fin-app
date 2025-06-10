#app/schemas/user.py

from pydantic import BaseModel, EmailStr

# What client sends to create user
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

# What the API returns after creation
class UserOut(BaseModel):
    id: int
    username: str
    email: EmailStr

    class Config:
        # Allows SQLAlchemy models to be returned as Pydantic objects
        orm_mode = True