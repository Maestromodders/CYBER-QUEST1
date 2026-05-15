/**
 * Owner Command - CYBER_QUEST Bot
 */

const config = require('../../config');

module.exports = {
    name: 'owner',
    aliases: ['creator', 'dev', 'botowner'],
    category: 'general',
    description: 'Show CYBER_QUEST owner contact info',
    usage: '.owner',
    ownerOnly: false,

    async execute(sock, msg, args, extra) {
        try {
            const chatId = extra.from;
            const ownerNames = Array.isArray(config.ownerName) ? config.ownerName : [config.ownerName];
            const vCards = config.ownerNumber.map((num, index) => {
                const name = ownerNames[index] || ownerNames[0] || 'CYBER_QUEST Owner';
                return {
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL;waid=${num}:${num}\nEND:VCARD`
                };
            });

            const displayName = ownerNames[0] || 'CYBER_QUEST Owner';

            await sock.sendMessage(chatId, {
                contacts: {
                    displayName: displayName,
                    contacts: vCards
                }
            });

            await extra.reply('👑 *CYBER_QUEST* | Here is the contact of the *Owner* — the architect of this system.');

        } catch (error) {
            console.error('Owner command error:', error);
            await extra.reply(`❌ Error: ${error.message}`);
        }
    }
};
