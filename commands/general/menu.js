/**
 * Menu Command - CYBER_QUEST Bot
 */

const config = require('../../config');
const { loadCommands } = require('../../utils/commandLoader');

module.exports = {
  name: 'menu',
  aliases: ['help', 'commands'],
  category: 'general',
  description: 'Show all available commands',
  usage: '.menu',
  
  async execute(sock, msg, args, extra) {
    try {
      const commands = loadCommands();
      const categories = {};
      
      commands.forEach((cmd, name) => {
        if (cmd.name === name) {
          if (!categories[cmd.category]) {
            categories[cmd.category] = [];
          }
          categories[cmd.category].push(cmd);
        }
      });
      
      const ownerNames = Array.isArray(config.ownerName) ? config.ownerName : [config.ownerName];
      const displayOwner = ownerNames[0] || 'Bot Owner';
      
      let menuText = `╔══『 *🌐 CYBER_QUEST* 』══╗\n\n`;
      menuText += `🖥️ *Welcome, @${extra.sender.split('@')[0]}!*\n`;
      menuText += `💀 *Entering the cyber realm...*\n\n`;
      menuText += `⚡ Prefix: \`${config.prefix}\`\n`;
      menuText += `📦 Commands: ${commands.size}\n`;
      menuText += `👑 Owner: ${displayOwner}\n\n`;
      menuText += `╚═══════════════════╝\n\n`;
      
      const categoryConfig = [
        { key: 'general',   icon: '🧭', label: 'GENERAL' },
        { key: 'ai',        icon: '🤖', label: 'AI' },
        { key: 'admin',     icon: '🛡️', label: 'ADMIN' },
        { key: 'owner',     icon: '👑', label: 'OWNER' },
        { key: 'media',     icon: '🎞️', label: 'MEDIA' },
        { key: 'fun',       icon: '🎭', label: 'FUN' },
        { key: 'utility',   icon: '🔧', label: 'UTILITY' },
        { key: 'anime',     icon: '👾', label: 'ANIME' },
        { key: 'textmaker', icon: '🖋️', label: 'TEXTMAKER' },
      ];

      for (const cat of categoryConfig) {
        if (categories[cat.key] && categories[cat.key].length > 0) {
          menuText += `┌──[ ${cat.icon} *${cat.label}* ]\n`;
          categories[cat.key].forEach(cmd => {
            menuText += `│  ⮞ ${config.prefix}${cmd.name}\n`;
          });
          menuText += `└────────────────────\n\n`;
        }
      }
      
      menuText += `🌐 *CYBER_QUEST* | Always Online\n`;
      menuText += `💡 Type ${config.prefix}help <command> for details\n`;
      menuText += `> ⚡ _Powered by CYBER\\_QUEST_`;
      
      const fs = require('fs');
      const path = require('path');
      const imagePath = path.join(__dirname, '../../utils/bot_image.jpg');
      
      if (fs.existsSync(imagePath)) {
        const imageBuffer = fs.readFileSync(imagePath);
        await sock.sendMessage(extra.from, {
          image: imageBuffer,
          caption: menuText,
          mentions: [extra.sender],
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: config.newsletterJid || '120363161513685998@newsletter',
              newsletterName: config.botName,
              serverMessageId: -1
            }
          }
        }, { quoted: msg });
      } else {
        await sock.sendMessage(extra.from, {
          text: menuText,
          mentions: [extra.sender]
        }, { quoted: msg });
      }
      
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
