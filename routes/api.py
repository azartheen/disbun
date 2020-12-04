from fastapi import APIRouter, Depends, HTTPException

from model import Userauth
from model.DecodedToken import DecodedTokenDash
from model.BasicResponses import BasicMessage

router = APIRouter()


# routes that doesn't need auth
@router.post(
    "/login",
    response_model=Userauth.Token,
    tags=["Userauth"],
    responses={400: {"model": BasicMessage}},
)
async def login(result=Depends(Userauth.MobileAuth.login)):
    return result


@router.post("/signup", response_model=Userauth.Token, tags=["Userauth"], status_code=201)
async def signup(result=Depends(Userauth.MobileAuth.signup)):
    return result


@router.get("", response_model=BasicMessage, tags=["Test"])
async def api_test():
    return BasicMessage(detail="Hello from Braga Teknologi Nusantara!")
