from fastapi import APIRouter, Depends, HTTPException, Response

from model import Userauth
from model.DecodedToken import DecodedTokenDash
from model.BasicResponses import BasicMessage
from model.Mvt import Mvt

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


@router.post(
    "/signup", response_model=Userauth.Token, tags=["Userauth"], status_code=201
)
async def signup(result=Depends(Userauth.MobileAuth.signup)):
    return result


@router.get("", response_model=BasicMessage, tags=["Test"])
async def api_test():
    return BasicMessage(detail="Hello from Braga Teknologi Nusantara!")


@router.get(
    "/mvt/{layer_name}/{z}/{x}/{y}",
    tags=["MVT"],
    responses={
        200: {
            "content": {"application/x-protobuf": {}},
            "description": "Return Mapbox Vector Tile",
        },
        204: {"description": "No content at the specified tile"},
    },
)
def get_mvt(mvt=Depends(Mvt.get_mvt)):
    if mvt == bytes():
        return Response(status_code=204)
    else:
        return Response(content=mvt, media_type="application/x-protobuf")