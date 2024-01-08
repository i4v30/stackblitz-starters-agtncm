const { MessageEmbed, Permissions, Client, Intents } = require('discord.js');
const { readFileSync, writeFileSync } = require("fs")
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!c')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment")

///الاكواد

client.on("message", message => {
if(message.author.bot) return;
if(message.channel.id == "1128300826469875806") { ///ايدي روم
  message.react('😂');
message.channel.send("https://cdn.discordapp.com/attachments/1166588748255985714/1166597695268462712/standard.gif") ///رابط الخط
} else { return; }
})
//-------------------------------------------
client.on("message", message => {
if(message.author.bot) return;
if(message.channel.id == "1164971725323251783") { ///ايدي روم
  message.react('<a:heart4:1164478263519879218>');
  message.channel.send(" ") ///رابط الخط
} else { return; }
})
//-------------------------------------------
client.on("message", message => {
if(message.author.bot) return;
if(message.channel.id == "1166296020976672848") { ///ايدي روم
  message.react('<a:heart4:1164478263519879218>');
   message.react('<a:heart2:1164305240003186798>');
message.channel.send("https://cdn.discordapp.com/attachments/1166588748255985714/1168416422565773312/AD25BE75-F7B2-4D0D-9132-CF5F418338FF.png") ///رابط الخط
} else { return; }
})
//-------------------------------------------
client.on("message", message => {
if(message.author.bot) return;
if(message.channel.id == " ") { ///ايدي روم
message.channel.send(" ") ///رابط الخط
} else { return; }
});

//-------------------------------------------
let sug = ['','1128327693541326959','']; ///ايدي روم الاقتراحات

let link = "https://cdn.discordapp.com/attachments/1166588748255985714/1167586659282452501/LINE.png";///خطك

//=================================

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor(`BLACK`)      .setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(` **${args}**`)
//.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send(embed).then(msg => {
 msg.react(`<a:heart4:1164478263519879218>`).then(() => {
 msg.react('<a:heart2:1164305240003186798>')
      })
    message.channel.send({files: [link]});
    })
//message.author.send(`Thank you for <#${message.channel.id}>`).catch(console.error) 
  }
});  
//=================================
// التحكم في صورة البوت
client.on('message', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!setavatar') {
    if (message.attachments.size === 0) {
      return message.reply('يرجى إرفاق صورة لتحديث صورة البوت.');
    }

    const attachment = message.attachments.first();
    const avatarURL = attachment.url;

    try {
      await client.user.setAvatar(avatarURL);
      message.reply('تم تحديث صورة البوت بنجاح.');
    } catch (error) {
      console.error('Error:', error);
      message.reply('حدث خطأ أثناء تحديث صورة البوت.');
    }
  }
});

// التحكم في اسم البوت
client.on('message', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().startsWith('!setname')) {
    const newName = message.content.slice(9); // قم بتغيير الرقم حسب طول البريفكس + 1

    try {
      await client.user.setUsername(newName);
      message.reply(`تم تحديث اسم البوت بنجاح إلى ${newName}.`);
    } catch (error) {
      console.error('Error:', error);
      message.reply(`حدث خطأ أثناء تحديث اسم البوت إلى ${newName}.`);
    }
  }
});



//keepAlive();
client.login(process.env.token);
