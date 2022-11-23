require("dotenv").config();

let ip = require("ip");

const TelegramApi = require("node-telegram-bot-api");

const bot = new TelegramApi(process.env.TELEGRAM_API_TOKEN, { polling: true });

let chatId = process.env.LIZKA_ID;

bot.on("message", (msg) => {
  if (msg.chat.username != "eliz_sharapova") {
    bot.sendMessage(msg.chat.id, ip.address());
  }
});

setInterval(() => {
  if (chatId) {
    bot.sendMessage(
      chatId,
      "Лиза, привет, это Серёжа. Пишу просто напомнить, что я тебя люблю)"
    );
  }
}, 10000);
