import fetch from 'node-fetch'
//import * as baileys from '@adiwajshing/baileys'
let baileys = (await import(global.baileys)).default
import PhoneNumber from 'awesome-phonenumber'
import { sticker } from '../lib/sticker.js'
 
let handler = async (m, { conn, command, usedPrefix, args, participants, groupMetadata, text }) => {
let pp, groupAdmins, listAdmin, owner
const isCommand1 = /^(инфогруппы))$/i.test(command)
const isCommand2 = /^(админы)$/i.test(command)
const isCommand3 = /^(ссылкагруппы)?)$/i.test(command)

async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {     
case isCommand1:
try{
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
groupAdmins = participants.filter(p => p.admin) 
listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let info = 
`✤ ${lenguajeGB['smsGI1']()} ✤
⎔ ${lenguajeGB['smsGI2']()}
・ ${groupMetadata.id}

⎔ ${lenguajeGB['smsGI3']()}
・ ${groupMetadata.subject}

⎔ ${lenguajeGB['smsGI4']()}
・ ${groupMetadata.desc?.toString() || lenguajeGB['smsGI5']()}

⎔ ${lenguajeGB['smsGI6']()}
・ ${participants.length} ${lenguajeGB['smsGI7']()}

⎔ ${lenguajeGB['smsGI8']()}
・ @${owner.split('@')[0]}

⎔ ${lenguajeGB['smsGI9']()}
${listAdmin}
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', info, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })    
} catch (e) {
reportError(e)
}
break
    
case isCommand2:
try{
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
groupAdmins = participants.filter(p => p.admin)
listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${lenguajeGB.smsAddB5()} ${pesan ? '_' + pesan + '_' : "📣📣📣📣"}`
let textoA = `⭔ ${lenguajeGB.smsAddB3()}
⭔ ${oi}\n\n`
let textoB = `${listAdmin}\n
⛔ ${lenguajeGB.smsAddB4()} ⛔`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
} catch (e) {
reportError(e)
} 
break
    
case isCommand3:
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let group = m.chat
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let fsizedoc = '1'.repeat(10)
try{
await conn.sendFile(m.chat, pp, 'error.jpg', '*https://chat.whatsapp.com/' + await conn.groupInviteCode(group) + '*', m)
} catch (e) {
reportError(e)
}    
break
}}

handler.command = /^(ДНПЗШГНПЗШР8ЗНАПЕШОЛРХЩГПЗШНП9ГШПН)$/i
handler.group = true
export default handler
