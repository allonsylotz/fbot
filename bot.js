var Discord = require('discord.js');
var auth = require('./auth.json');

/*logger mostly used for debugging

var logger = require('winston');

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';*/

var regexs = [
  '(can( *)(I|we)( *)get( *)a(n?)( *)F)',
  '(F( *)(to( *)pay)|for( *)respect(s?))'
];
var re = new RegExp(regexs.join('|'), 'i');

var bot = new Discord.Client();

/*logger mostly used for debugging

bot.on('ready', () => {
  logger.info('Connected!');
});*/

bot.on('message', msg => {
  if (re.test(msg.content)) {
    msg.reply('F');
  }
});

bot.login(auth.token);
