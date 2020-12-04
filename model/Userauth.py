from datetime import datetime, timedelta
from typing import Optional

from fastapi import HTTPException, Form, Depends
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr, constr
from passlib.hash import pbkdf2_sha256
import jwt
import json

from db import db
from settings import settings

private_key = b'''-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCJrqmCYhUdwaIR
GkGyj+b0jIe4NvprqK1JfsLmo9MdQJelf56mMwKvCX9tLjZvRztdhB8Wjq8H6Rqv
8w+50q6umU7WoiHX2PZgEa4QOEtML3M2UUtH+CvvHPjSNmHJWJ3n1H8dHrYeneod
slyouQa/Fnq6b1TvgV508ufSNjS9FKk+d9LgR0MBt8FhBHYDB8xT5s9Q7DQ1cNm+
u8fOivBJgG5PttEi4gpDDgmswGzupPhHaU4i27BCGK/qoVscjPc9nhHl9I1pD43c
owIT4tQEC9GQsQse6byViTgqa1xbpzwxMBjUbeCGS1VYWhhC9ji15FRf3EiVv+I1
EQeMRblXAgMBAAECggEBAIP/4KQQRQ5yRl7/PV1keZib4sLKcuwkm36K+XEGP7Eb
7EfPQts0rK4D/Rc/5xBoypGtyeBmi4iaA+wMrFcLlk3uzZcZejjm2c7hJHCIiChS
lbLN3c7yL6zfqe5gFQBk5X8OS5AvkYto+rvd9NgODFnHw4JamqPE9DpLZ9YyAf4E
FWGY45aJYG0YQPEjjoUEWq3SLienUCZoLYUAqMjt9JNdyIuDWVakEwUIF5NqkD9J
s7qcipDzBBTrBI8P3ZQ4mskwvmTl0CkozJgKxpb0iZws+u3U4VXj2JmqeXqyTBQm
MzF6+RHzR0y2WWdVsT2HSzW8T71yJmX0AhQ88QMRkIECgYEA2Fab2Ew0LJQWR0fO
jjvNmxhEqRp3SP6hLjJkU4DTRRPAs1W0Wt9rUwrNgMWwIVLokRu8xQ4rLn2cU7+v
sDsyLkT/hy0e4VlvNp/XDl7rm90/VcYRkYgBgrU7RptzfMFE6rfQ2MsxiuOyaJ3I
6sTytPIx/ljPUGKV+UvH6r711R0CgYEAoux+q9TisD/lvRNCjbdf34qXR2teVNSq
sQkfRRExph6phHCr73nG/XUHYJGGqjlCSlbUFaPbHtenvN5DTHgMTPkYBkx44vR4
jTYNV8QcDJoXrvyPHaDLe8sKQ4vKifuSmAsUG82aGtWFJbbKLwsuDEinKpJJxp9m
w6eDXueCAgMCgYAsBAMVUPvUjhSyUAPQoI5GnftqRH48lcIJeis7ahySE2DDnA5j
5s0ZSjthldcuEIZM783KcgWLIfdqereuLX0aOOOchyufQekEviStQdbCEZPPSctN
RtS32VPEG+C1Y0U4VEnjsgPUdFtaObAlRAj1k8lkLIGRo11MKYT1WAEAaQKBgADk
eMEqNl+uyexiOaAbHAxWbwO2I9slGxZDLYesU3BMhLM0Bs0WBrAGvxaZVXqDO8i6
dwjzT9T4a3POZ+H4WmDlkGsgah0cJ7jmTeZoLZsoEO8ldQc9hT/VWeYK0v40gZYR
oXeRhcGV39fYC318ezEYCMpj6MGMx/xUY5TWgdDPAoGAU7K6Ky4dus4cnVLYyn6a
yxRryQpDz/8voTMHl8AdY+qhiBdKzBW7VKOpmPDlhUp6j1SQJb4JJ6MTbZZkWXEI
nM1oweiE7/qd1I0BBenBQ+6n/nrxJbdea1a1s0/yXYUBLyWrmZIqGPxrfKOPreAq
K8f22gyiAX/Fgr6ZR89cHiQ=
-----END PRIVATE KEY-----'''


credentials_exception = HTTPException(
    status_code=401,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


class OAuth2PasswordRequestFormWithEmailStr(OAuth2PasswordRequestForm):
    def __init__(
        self,
        grant_type: str = Form(None, regex="password"),
        username: EmailStr = Form(...),
        password: str = Form(...),
        scope: str = Form(""),
        client_id: Optional[str] = Form(None),
        client_secret: Optional[str] = Form(None),
    ):
        super().__init__(
            grant_type=grant_type,
            username=username,
            password=password,
            scope=scope,
            client_id=client_id,
            client_secret=client_secret,
        )


class Token(BaseModel):
    accessToken: str


class Input(BaseModel):
    email: EmailStr
    password: constr(min_length=8)


class SignUpData(BaseModel):
    input: Input


def create_access_token(payload: dict):
    encoded_jwt = jwt.encode(
        payload, private_key, algorithm="RS256"
    )
    return Token(
        accessToken=encoded_jwt
    )


async def authenticate_user(email: str, password: str):
    pool = db.get_pool()
    user = await pool.fetchrow(
        """
        SELECT *
        FROM disbun_user
        WHERE email = $1
        """,
        email,
    )
    if user is not None:
        if pbkdf2_sha256.verify(password, user["password"]):
            return user
    raise HTTPException(400, "Email atau password salah")


class MobileAuth:
    async def signup(data: SignUpData):
        pool = db.get_pool()
        hashed_password = pbkdf2_sha256.hash(data.input.password)
        created_email = await pool.fetchval(
            """
            INSERT INTO disbun_user(
                email, password
            )
            VALUES ($1, $2)
                RETURNING email
            """,
            data.input.email,
            hashed_password,
        )
        return create_access_token({"https://hasura.io/jwt/claims": json.dumps({
            "x-hasura-user-id": created_email,
            "x-hasura-default-role": "user",
            "x-hasura-allowed-roles": ["user"],
        })})

    async def login(data: SignUpData):
        user = await authenticate_user(data.input.email, data.input.password)
        return create_access_token({"https://hasura.io/jwt/claims": json.dumps({
            "x-hasura-user-id": user['email'],
            "x-hasura-default-role": "user",
            "x-hasura-allowed-roles": ["user"],
        })})
