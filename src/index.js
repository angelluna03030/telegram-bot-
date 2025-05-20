
const dotenv = require('dotenv');
const { Telegraf } = require('telegraf')
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
  ctx.reply("¡Hola! Soy tu bot de Telegram.");
});

async function main() {
  console.log("Starting bot...");
}

bot.help((ctx) => {
  ctx.reply("¡Hola! Soy tu bot de Telegram, en que te podemos ayudar");
});
bot.settings((ctx) => {
  ctx.reply("¡Hola! Soy tu bot de Telegram, en que te podemos ayudar, a muchas muchas formas");
});
main();
bot.launch();