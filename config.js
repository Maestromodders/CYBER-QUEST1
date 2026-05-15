/**
 * Global Configuration for CYBER_QUEST WhatsApp Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['CYBER_QUEST Owner'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'CYBER_QUEST',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/CYBER_QUEST-Mini/archive/refs/heads/main.zip',
    
    // Sticker Configuration
    packname: 'CYBER_QUEST',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false,
      antiviewonce: false,
      antibot: false,
      anticall: false,
      antigroupmention: false,
      antigroupmentionAction: 'delete',
      welcome: false,
      welcomeMessage: '╭╼━≪•𝐂𝐘𝐁𝐄𝐑_𝐐𝐔𝐄𝐒𝐓•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ CYBER_QUEST*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 See you on the other side of the matrix!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false
    },
    
    // API Keys (add your own)
    apiKeys: {
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Processing...',
      success: '✅ Done!',
      error: '❌ System Error!',
      ownerOnly: '🔐 Access Denied! Only the CYBER_QUEST Owner can use this command!',
      adminOnly: '🛡️ Admins Only! This command requires admin privileges!',
      groupOnly: '👥 Group Only! This command can only be used in groups!',
      privateOnly: '💬 Private Chat Only!',
      botAdminNeeded: '🤖 CYBER_QUEST needs admin rights to execute this command!',
      invalidCommand: '❓ Unknown command! Type .menu to see all CYBER_QUEST commands'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
