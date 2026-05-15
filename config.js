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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaAFFloiKGEBBXBBEcZnohwQSSFmFhBI6/PcOrK7qepjpqXnLLc4995xz8wfIclyhFWqB+AMUJW4gQf2StAUCIpDrIEAlGAIfEghEcJ5Zl4mWxpvA2jdj9zh2lk45NlcXn1t79dJd1kt6p5NrR1sv4DEERe0m2PsDYHx0cYG67Vg2tUBvp3W65O4svh91Zd3a0olV9wfZpK2bNX8Bjx4R4hJn4byIUIpKmKxQa0Jcfo3+Vg8Objv3UvuCyyocvPr02a5VrtLGKpeQRTyXdSUM+BUTf42+e0Mm4u66J1NrnaEXqhVu6zCet6bquLeQcRrV5F8129b4N/oVDjPk6z7KCCbtl3U/qkspPeyru4LXO+FwcYQt9AaaseTOl5xhM3llFLgj6orhv0Z8kHd6cxaEczqzr/s7ojMqpnzq4k+7y/FGtzNNuE7x8ja1Jp+Jm+V7VuL/o3tt2JgVWOJpaQLLnGzgSF04+VldjYtZJLweA2924HOJyaiv0S+EeIQHBqdNOgq5HTshy7ufz/bOEXoUI2zwbXCRu053D5/oQ1KXf2JpNNvjaTqfqLsRNCSjDrjigGPLDO/CImU6VOxqpy2T/a4VUlq1Tf3qWedcn+xOmdIUo3owM5PboA4HvNrkURWfYK3I4cuzoxi1ug9E+jEEJQpxRUpIcJ49z2hhCKDf2MgrEXnKC6bEDicbc8xghySrk+lv60S62Yq1GG1mW0tIFrKR3eubc4xfwBAUZe6hqkL+AlckL9sNqioYogqIf38fggzdyZtxfbkxPQQBLityyOoiyaH/7ur7JfS8vM6I3Wae0i9QCUTq9zEiBGdh1etYZ7D0ItwgJYKkAmIAkwp9dIhK5AORlDX6mFol93vhhbk9Y+ZTGQxB+jQE+0AEDDvheH5CCTTFihz/V/XttYeFRfEtQwQMQfJ8Rgv8lOYohh5TLEUJ/cv+4vHBsAf0EYE4qYAIlGXq3AVPnpuBlxmSpknzUFJCCfzu6D0ab9JPrhbt6wzZzAurCg8a7rhssWpMO9i79E2FMeXQDon1I3V++QcQIIIxPdZGHK+fk2h+zTfp7XTP1HrbSlP/suIvd8IKqt1dnd0spNLJ0j2M1EUGE4NfOnuLn4+N3HXtKAqqUZPycketreisWC99NR812EOfi4WnQvL2kv26iHhumuPzdnBS7GDMRfK2sws0iexzF+sLRuia9V4pWCeUTtN0dFuc+INBO8vcIBFnXNA6pcxJiEIBNjPpLbTPoUl+fVb4Gafeq34bYPSc/Qz2Dv63d2/E+4hRj+EnjF+/yb9MpIx0yjjZRrmXV4e1rsp5NWDvbdlRGcUIMDoWhuo77kVRiQYej+9DUCSQBHmZAhHAzC9z7IMhKPO6z6yeBfkfiinSRles0O47T2BFpN9zsMcpqghMCyDSHMfzLMuy9OMnyl1rOj0HAAA=',
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
