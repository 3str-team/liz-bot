require("dotenv").config();

const TelegramApi = require("node-telegram-bot-api");

const bot = new TelegramApi(process.env.TELEGRAM_API_TOKEN, { polling: true });

const chatId = process.env.LIZKA_ID;

bot.on("message", (msg) => {
  console.log(msg.text);
  bot.sendMessage(msg.chat.id, msg.text);
});

// setInterval(() => {
//   bot.sendMessage(
//     chatId,
//     "Лиза, привет, это Серёжа. Пишу просто напомнить, что я тебя люблю)"
//   );
// }, 1000);
