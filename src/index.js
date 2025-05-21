const dotenv = require("dotenv");
const { Telegraf } = require("telegraf");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);


async function main() {
  console.log("Starting bot...");
}

bot.help((ctx) => {
  ctx.reply("¡Hola! Soy tu bot de Telegram, en que te podemos ayudar");
});
bot.settings((ctx) => {
  ctx.reply(
    "¡Hola! Soy tu bot de Telegram, en que te podemos ayudar, a muchas muchas formas"
  );
});
main();
//para crear un comando
bot.command(["comando", "test", "micomando"], (ctx) => {
  ctx.reply("hola nuevo comando!");
});

bot.hears("computer", (ctx) => {
ctx.reply("¡Hola! Soy tu bot de Telegram, estas vendio un computador  ");
});




bot.start((ctx)=>{
  console.log(ctx.message);
  console.log(ctx.chat);
  console.log(ctx.from);
  console.log(ctx.update);
  console.log(ctx.update.message);
  console.log(ctx.update.message.chat);
  console.log(ctx.update.message.from);
ctx.reply("¡Hola! Soy tu bot de Telegram, en que te podemos ayudar");
})

bot.mention("BotFather", (ctx) => {
ctx.reply("haz mensacion a alguien "+ctx.message.from.first_name);

})
bot.launch();
