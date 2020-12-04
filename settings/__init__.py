from pydantic import BaseSettings


class Settings(BaseSettings):
    PGSTRING: str
    AWS_ACCESS_KEY_ID: str
    AWS_SECRET_ACCESS_KEY: str
    JWT_SECRET: str

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
