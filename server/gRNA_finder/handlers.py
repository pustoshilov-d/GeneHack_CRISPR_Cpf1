import json
import logging

from telegram import InlineKeyboardButton, InlineKeyboardMarkup

from gRNA_finder.gRNAfinder import process_query

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

logger = logging.getLogger()
logger.setLevel(logging.INFO)

psf = "gRNA_finder/telegram_bot_persistent_state.json"
nes_set = {"genome", "PAM"}


def load_ps():
    with open(psf, "r") as f:
        ps = json.load(f)
    return ps


def safe_ps(dic):
    with open(psf, "w") as f:
        json.dump(dic, f, indent=4)


def start(update, context):
    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="Let it CRISPR!\n"
             "Type /PAM for PAM specification\n"
             "Type /genome for genome specification\n"
             "Type /gRNA chr:start-stop for gRNA search"
    )


def PAM(update, context):
    chooseSMTH(update, context, "PAM")


def genome(update, context):
    chooseSMTH(update, context, "genome")


def chooseSMTH(update, context, SMTH):
    smths = load_ps()["db"][SMTH].keys()
    keyboard = [
        [InlineKeyboardButton(smth, callback_data=json.dumps({SMTH: smth}))] for smth in smths
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    message_reply_text = 'choose {}'.format(SMTH)
    update.message.reply_text(message_reply_text, reply_markup=reply_markup)


def press_button_callback(update, context):
    # reply_markup = InlineKeyboardMarkup(keyboard)
    # update.callback_query.edit_message_reply_markup(reply_markup)
    username = update.effective_user["username"]
    ps = load_ps()
    user_update = json.loads(
        update.callback_query["data"]
    )
    if username not in ps:
        ps[username] = {}

    text_pat = "Set {} to {}\n"
    mes_text = ""

    for key, val in user_update.items():
        ps[username][key] = val
        mes_text += text_pat.format(key, val)

    safe_ps(ps)

    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text=mes_text
    )


def gRNA(update, context):
    ps = load_ps()
    username = update.effective_user["username"]

    if username not in ps or ps[username].keys() != nes_set:
        context.bot.send_message(
            chat_id=update.effective_chat.id,
            text="Please, specify genome and PAM for search"
        )

    else:
        g = ps[username]["genome"]
        p = ps[username]["PAM"]
        coords = update.effective_message["text"].replace("/gRNA ", "")
        context.bot.send_message(
            chat_id=update.effective_chat.id,
            text="Genome: {g}\n"
                 "PAM: {p}\n"
                 "Coords: {c}\n\n"
                 "Wait for the process to complete".format(
                g=g, p=p, c=coords
            )
        )
        ps = load_ps()

        try:
            gRNA, offs = process_query(
                ps["db"]["genome"][ps[username]["genome"]],
                ps["db"]["PAM"][ps[username]["PAM"]],
                coords,
                username
            )

            with open(gRNA, "r") as output:
                # response = output.read()
                fn = "{0}_{1}_{2}_{3}.tsv".format(g, p, coords, "gRNA").replace(" ", "_")
                context.bot.send_document(
                    chat_id=update.effective_chat.id,
                    document=output,
                    filename=fn
                )

        except Exception as ex:
            text_msg = "During processing your query an error occurred: {ex}\n" \
                       "Please, contact @praefrontalis".format(ex=ex)
            context.bot.send_message(
                chat_id=update.effective_chat.id,
                text=text_msg
            )
            logger.error(ex)
        # context.bot.callback_query.edit_message_text()
