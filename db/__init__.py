import asyncpg

from settings import settings


class Pool:
    async def open_pool(self):
        self.pool = await asyncpg.create_pool(dsn=settings.PGSTRING)

    async def close_pool(self):
        await self.pool.close()

    def get_pool(self):
        return self.pool


db = Pool()
