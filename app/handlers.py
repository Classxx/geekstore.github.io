from aiogram import Router
from aiogram.filters import CommandStart
from aiogram.types import Message

import app.keyboards as kb

router = Router()

@router.message(CommandStart())
async def cmd_start(message: Message):
    await message.answer(
        '''Рады приветствовать вас в GeekStore!
Нажмите на кнопку "Каталог" чтобы попасть на страницу с актуальными предложениями.''', reply_markup=kb.settings)