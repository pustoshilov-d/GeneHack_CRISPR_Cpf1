
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler

from gRNA_finder.handlers import start, PAM, genome, press_button_callback, gRNA, logger
from gRNA_finder.local import TOKEN


def main():

    updater = Updater(token=TOKEN, use_context=True)
    dispatcher = updater.dispatcher

    start_handler = CommandHandler('start', start)
    dispatcher.add_handler(start_handler)

    dispatcher.add_handler(CommandHandler('PAM', PAM))
    dispatcher.add_handler(CommandHandler('genome', genome))
    dispatcher.add_handler(CommandHandler('gRNA', gRNA))

    dispatcher.add_handler(CallbackQueryHandler(press_button_callback))

    updater.start_polling()
    updater.idle()


if __name__ == '__main__':
    main()
