from pydantic import BaseModel, EmailStr
from typing import Optional

class UserBase(BaseModel):
    email: str
    is_active: bool = True

class UserCreate(UserBase):
    password: str

class UserRead(UserBase):
    id: int

    class Config:
        from_attributes = True  # Для Pydantic v2 (якщо v1 — використайте orm_mode = True)