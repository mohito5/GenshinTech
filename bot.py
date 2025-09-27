pip install python-telegram-bot

from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Обработчик команды /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('Привет! Я твой игровой помощник для Genshin Impact.')

if __name__ == '__main__':
    TOKEN = '8472912554:AAETvICA3Yb1MZDl4nzo5cWtpflWpZfrUho'
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler('start', start))
    app.run_polling()