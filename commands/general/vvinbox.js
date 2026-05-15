/**
 * VV Inbox Command - CYBER_QUEST Bot
 * Reveals a view-once message and sends it privately to the command sender's inbox
 */

const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

module.exports = {
  name: 'vvinbox',
  aliases: ['vvi', 'vobox', 'antiviewonce'],
  category: 'general',
  description: 'Reveal a view-once message and send it to your private inbox',
  usage: '.vvinbox (reply to a view-once message)',

  async execute(sock, msg, args, extra) {
    try {
      const chatId = msg.key.remoteJid;
      const senderJid = extra.sender; // The person who sent the command

      // Get context info from various message types
      const ctx =
        msg.message?.extendedTextMessage?.contextInfo ||
        msg.message?.imageMessage?.contextInfo ||
        msg.message?.videoMessage?.contextInfo ||
        msg.message?.buttonsResponseMessage?.contextInfo ||
        msg.message?.listResponseMessage?.contextInfo;

      if (!ctx?.quotedMessage || !ctx?.stanzaId) {
        return await sock.sendMessage(
          chatId,
          { text: '↩️ Reply to a *view-once* message to send it to your inbox.' },
          { quoted: msg }
        );
      }

      const quotedMsg = ctx.quotedMessage;

      // Detect view-once flag across all known Baileys formats
      const hasViewOnce =
        !!quotedMsg.viewOnceMessageV2 ||
        !!quotedMsg.viewOnceMessageV2Extension ||
        !!quotedMsg.viewOnceMessage ||
        !!quotedMsg.viewOnce ||
        !!quotedMsg?.imageMessage?.viewOnce ||
        !!quotedMsg?.videoMessage?.viewOnce ||
        !!quotedMsg?.audioMessage?.viewOnce;

      if (!hasViewOnce) {
        return await sock.sendMessage(
          chatId,
          { text: '❌ This is not a view-once message!' },
          { quoted: msg }
        );
      }

      // Resolve the actual media message
      let actualMsg = null;
      let mtype = null;

      if (quotedMsg.viewOnceMessageV2Extension?.message) {
        actualMsg = quotedMsg.viewOnceMessageV2Extension.message;
        mtype = Object.keys(actualMsg)[0];
      } else if (quotedMsg.viewOnceMessageV2?.message) {
        actualMsg = quotedMsg.viewOnceMessageV2.message;
        mtype = Object.keys(actualMsg)[0];
      } else if (quotedMsg.viewOnceMessage?.message) {
        actualMsg = quotedMsg.viewOnceMessage.message;
        mtype = Object.keys(actualMsg)[0];
      } else if (quotedMsg.imageMessage?.viewOnce) {
        actualMsg = { imageMessage: quotedMsg.imageMessage };
        mtype = 'imageMessage';
      } else if (quotedMsg.videoMessage?.viewOnce) {
        actualMsg = { videoMessage: quotedMsg.videoMessage };
        mtype = 'videoMessage';
      } else if (quotedMsg.audioMessage?.viewOnce) {
        actualMsg = { audioMessage: quotedMsg.audioMessage };
        mtype = 'audioMessage';
      }

      if (!actualMsg || !mtype) {
        return await sock.sendMessage(
          chatId,
          { text: '❌ Unsupported view-once message type.' },
          { quoted: msg }
        );
      }

      const downloadType =
        mtype === 'imageMessage' ? 'image' :
        mtype === 'videoMessage' ? 'video' : 'audio';

      // Download the media
      const mediaStream = await downloadContentFromMessage(actualMsg[mtype], downloadType);
      let buffer = Buffer.from([]);
      for await (const chunk of mediaStream) {
        buffer = Buffer.concat([buffer, chunk]);
      }

      const caption = actualMsg[mtype]?.caption || '';
      const headerText = `╔══『 *🌐 CYBER_QUEST* 』══╗\n📩 *View-Once Revealed*\n💡 Sent privately to your inbox\n╚═══════════════════╝\n\n${caption}`.trim();

      // Notify in the chat
      await sock.sendMessage(
        chatId,
        { text: '📬 *CYBER_QUEST* | View-once sent to your inbox!' },
        { quoted: msg }
      );

      // Send to the sender's private DM
      if (mtype === 'imageMessage') {
        await sock.sendMessage(senderJid, {
          image: buffer,
          caption: headerText,
          mimetype: 'image/jpeg'
        });
      } else if (mtype === 'videoMessage') {
        await sock.sendMessage(senderJid, {
          video: buffer,
          caption: headerText,
          mimetype: 'video/mp4'
        });
      } else if (mtype === 'audioMessage') {
        await sock.sendMessage(senderJid, {
          audio: buffer,
          ptt: true,
          mimetype: 'audio/ogg; codecs=opus'
        });
        // Send caption separately for audio since it doesn't support captions
        await sock.sendMessage(senderJid, { text: headerText });
      }

    } catch (error) {
      console.error('vvinbox error:', error);
      await sock.sendMessage(
        msg.key.remoteJid,
        { text: `❌ Error: ${error.message || 'Unknown error'}` },
        { quoted: msg }
      );
    }
  }
};
