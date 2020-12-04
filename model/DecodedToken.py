from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
import jwt

from settings import settings


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="v1/userauth/login")
credentials_exception = HTTPException(
    status_code=401,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


class DecodedTokenDash:
    def __init__(self, token: str = Depends(oauth2_scheme)):
        try:
            payload = jwt.decode(
                token, settings.JWT_SECRET, algorithms="HS256")
        except jwt.PyJWTError:
            raise credentials_exception

        if payload["dash_access"]:
            self.user_id = payload["user_id"]
        else:
            raise HTTPException(
                403, "Anda tidak diizinkan untuk mengakses dashboard")


class DecodedTokenMobile:
    def __init__(self, token: str = Depends(oauth2_scheme)):
        try:
            payload = jwt.decode(
                token, settings.JWT_SECRET, algorithms="HS256")
        except jwt.PyJWTError:
            raise credentials_exception

        self.user_id = payload["user_id"]
        self.encoded_token = token
