from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

main = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text='Открыть магазин')],
    [KeyboardButton(text='Связаться с оператором')]
],
    resize_keyboard=True,
    input_field_placeholder="Выберите пункт меню...")


settings = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text='Каталог', web_app=WebAppInfo(url="https://classxx.github.io/geekstore.github.io/"))],
    [InlineKeyboardButton(text='Наш канал', url='https://t.me/DonatotPolinaZoLoTaYa'), InlineKeyboardButton(text='Связь с оператором', url='https://t.me/ZLT_support')],
    [InlineKeyboardButton(text='Отзывы', callback_data='reviews')]
    ])

reviews_kb = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text='Назад', callback_data='goback_from_reviews')]
    ])

