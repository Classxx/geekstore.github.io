from aiogram import Router, F
from aiogram.filters import CommandStart
from aiogram.types import Message, CallbackQuery

import app.keyboards as kb

router = Router()

@router.message(CommandStart())
async def cmd_start(message: Message):
    await message.answer(
        '''Рады приветствовать вас в ZLT SHOP!
Нажмите на кнопку "Каталог" чтобы попасть на страницу с актуальными предложениями.''', reply_markup=kb.settings)
    
@router.callback_query(F.data == 'reviews')
async def catalog(callback: CallbackQuery):
    await callback.answer()
    await callback.message.edit_text(
        '''Впервые попав в наш канал и охнув от цен, по сравнению с ценами в магазине игры, будущие клиенты хотят увидеть отзывы о нашей работе и мы это прекрасно понимаем. Но существует весомая причина из-за которой мы всегда были противниками «сбора» отзывов . Это  мошенники (кидалы).

Подробнее: собрав в одном месте, например в обсуждениях нашей группы вк или специальном канале телеграмм, не одну сотню отзывов кидалы начинают спамить людей, которые эти отзывы и оставили. Предлагают заоблачно низкие цены, невозможные акции или сделать донат в играх, в которых вообще невозможно работать. Все это происходит под видом накрученных страниц или что самое обидное под видом наших профилей в телеграмм. Доверчивые граждане в надежде сэкономить еще пару сотен рублей в итоге просто остаются ни с чем.

Мы дорожим нашими клиентами и не хотим чтобы они были обмануты. Посему, после пары таких случаев, было принято решение закрыть тему с отзывами и более не просить оставлять их.

Отзывы никуда не делись,они теперь скрыты от посторонних глаз. По требованию клиента мы всегда можем предоставить все доказательства нашей работы. И после выполнения заказа вы так же по желанию сможете оставить о нас отзыв. Но приглашение в канал с отзывами Вы получаете только после выполнения заказа.''', reply_markup=kb.reviews_kb)

@router.callback_query(F.data == 'goback_from_reviews')
async def goback(callback: CallbackQuery):
    await callback.answer()
    await callback.message.photo
    await callback.message.edit_text('''Рады приветствовать вас в ZLT SHOP!
Нажмите на кнопку "Каталог" чтобы попасть на страницу с актуальными предложениями.''', reply_markup=kb.settings)