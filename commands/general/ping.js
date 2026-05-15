/**
 * Ping Command - CYBER_QUEST Bot
 */

module.exports = {
    name: 'ping',
    aliases: ['p'],
    category: 'general',
    description: 'Check bot response time',
    usage: '.ping',
    
    async execute(sock, msg, args, extra) {
      try {
        const start = Date.now();
        const sent = await extra.reply('🌐 *CYBER_QUEST* is scanning the network...');
        const end = Date.now();
        
        const responseTime = end - start;
        let status = responseTime < 200 ? '🟢 Excellent' : responseTime < 500 ? '🟡 Good' : '🔴 Slow';
        
        await sock.sendMessage(extra.from, {
          text: `╔══『 *🌐 CYBER_QUEST* 』══╗\n\n⚡ *PONG!*\n📡 Response: \`${responseTime}ms\`\n🔋 Status: ${status}\n\n> _Cyber systems nominal_ ✅`,
          edit: sent.key
        });
        
      } catch (error) {
        await extra.reply(`❌ Error: ${error.message}`);
      }
    }
  };
