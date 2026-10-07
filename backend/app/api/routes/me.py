from fastapi import APIRouter
from app.auth import CurrentUser
from app.schemas.user import UserRead

router = APIRouter()

@router.get("/me", response_model=UserRead)
def read_user_me(current_user: CurrentUser):
    """Отримати інформацію про поточного користувача."""
    return current_user
