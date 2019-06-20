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
  '(F( *)(to( *)pay)|for( *)respect(s?))',
  '(F( *)please)'
];
var re = new RegExp(regexs.join('|'), 'i');

var Big_F = [
  '(can( *)(I|we)( *)get( *)(a|the)( *)biggest( *)F)',
  '(can( *)(I|we)( *)get( *)(a|the)( *)(big|huge|fat|thicc)( *)F)',
  '(a( *)moment( *)of( *)silence( *)for( *)our( *)fallen( *)comrade(s?))'
];

var re2 = new RegExp(Big_F.join('|'), 'i');

var bot = new Discord.Client();

/*logger mostly used for debugging

bot.on('ready', () => {
  logger.info('Connected!');
});*/

bot.on('message', msg => {
  if (re2.test(msg.content)) {
    msg.reply('\nFFFFFF\nFF\nFFFFF\nFF\nFF');
  }
  else if (re.test(msg.content)) {
    msg.reply('F');
  }
});

bot.login(auth.token);
