/**
 * Global Configuration for CYBER_QUEST WhatsApp Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['254788409105'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['CYBER_QUEST Owner'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'CYBER_QUEST',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3ptYwSRmxEdsYAIiCKISuvGPpRQYLVYXKpQYcJ/36B7enoedmd73+oWefJk5qnvgBSYIhe1YPIdlDW+Qob6JWtLBCZAb9IU1WAAEsggmIDLKml8f5+hQs1Pu/V0vj5dBUe6Num4awpukXVwMV4kuphrz+AxAGVzzHH8G0BnUSyWeVdLrdVe0pc4m5a81jabM+eEOxZRIxt5xgu9H9vlM3j0iBDXmGRmeUIXVMPcRa0Pcf01+oE9Hxa+4w87pB10C3oVdg8z+XDvsixc3WZhVGnB6nJdWfRr9E3lSsbua0h5ONYKqRCE0aHWOU01tFt60lPfi3eea6yl7fadPsUZQYmTIMIwa7+sO9RE7Wbb8UqNbUTlU+FE63MxWg7xbdi0SoU6bSNUVDTPt68Rj9rd5gYtj0Mn9BRJ9msg8zBvOzeNMH+sTubo5bh+DQ40Gv9K3K8/snL+P7oX9nCcd2wq3N2jwDSoRHG8TPbBzbA2+86sDpg+PaVKtyX7r9Gnm8vdS0OrWxFLnh2T0zyR6oDXp3QhcYRppWsVvl7d7R39pA9ZU/+OZdeu1WsidudsrAaazumts3tayUngHmbB+sgUytnTOXHCyxqaqF5cDIKXtTUPfX5RHq3tmQU5udbhabNz4uF+GE5nGs6e3zo6o9ZJwIR/DECNMkxZDRkuSH82GisDAJNriOIasTd5AYVpLip4pp27Qp+v0mrxonPEzLzFzU6ihaeKI3f0sn29MvMZDEBZFzGiFCU2pqyo2yWiFGaIgsmffw0AQXf2blxfTuAHIMU1ZVvSlHkBkw9XPy5hHBcNYWFLYqNfoBpMuM9jxBgmGe11bAis4xO+IuMEGQWTFOYU/ewQ1SgBE1Y36OfUGkXSC6/NI1EJzCUYgMubITgBEzASx7KijDmV58SJrP5Bv916WFiW3whiYADyt2e8qki8zI14gRM5Tu1f9hePnwx7wAQxiHMKJsCYV7u7Guum71PiaZalmZlmZBr47OgjGu/Sj18DPnFGbGmWAc22Fu5kYrtXP0w3R76awTO343fs7ETc/vkfQMAEkEheNUa0Sbjdjr3OZq6oumu/DCVpXfCuObUVjmsEUXii1tqKOd9W7TEnz2+Rqe/JeXX0mmU111YbNDx0867FNsf2U+25r5agK47Rr8VWsprPdftW5WGxMVTuXq31VSeogiKls9afYrGRhDtbqEISaYdCn2XdvPTkpvKItK1CS7Judz+93K7FxmOqiupOk07Be2jfhib/8Vnhtzj1XvXbFKO32Sewd/C/vXsn3keMewx+wfjxm/zLROrI4byX0Ks3urtdODO9oE/iva07jnAjFZ6i0pslu+PBmDELPB5/DUCZQ5YW9aX/M0lSFzgBA1AXTZ9Zh6TFb4oZ2tIxgizsO88hZdrnHGzwBVEGLyWY8LKsKKIsqsLjb6/4/bA9BwAA',
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
