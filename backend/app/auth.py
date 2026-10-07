import uuid
from types import SimpleNamespace
from fastapi import Header, HTTPException, status

async def current_user(authorization: str = Header(None)):
    """
    Перевіряє наявність заголовка Authorization.
    Повертає об'єкт (не словник), щоб працював доступ через крапку (current_user.id).
    """
    if not authorization:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="You are signed out"
        )
    
    token = authorization.replace("Bearer ", "").strip()
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials"
        )

    # Використовуємо SimpleNamespace для підтримки dot-notation (current_user.id)
    # та дефолтний UUID для сумісності з PostgreSQL / SQLModel
    return SimpleNamespace(
        id=uuid.UUID("123e4567-e89b-12d3-a456-426614174000"),
        email="user@example.com",
        is_active=True
    )