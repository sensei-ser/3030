let handler = async (m, { conn, participants, usedPrefix, command, isROwner }) => {
	
let kickte = `🚩 Укажите пользователя, которого вы хотите снести.`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`🚩 Удаленный пользователь.`)
m.reply(`Извините, вас только что исключили из группы.`, user)
}

handler.help = ['kick *@user*']
handler.tags = ['group']
handler.command = ['снести', 'expulsar'] 
handler.group = true
export default handler
