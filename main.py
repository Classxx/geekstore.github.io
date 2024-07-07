import asyncio
import logging # включить на проде

from aiogram import Bot, Dispatcher

from config import TOKEN
from app.handlers import router


bot = Bot(token=TOKEN)
dp = Dispatcher()





async def main():
    dp.include_router(router)
    await dp.start_polling(bot)
 







if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO) # включить на проде
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print('Exit')