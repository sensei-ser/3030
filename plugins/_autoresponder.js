import axios from 'axios'

let handler = m => m
handler.all = async function (m, {conn}) {
let user = global.db.data.users[m.sender] 
  
let chat = global.db.data.chats[m.chat]
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
if (prefixRegex.test(m.text)) return
if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid) && !chat.isBanned) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result
} catch (error) {
return
//console.error(error)
}}

async function geminiProApi(q, logic) {
            try {
                const response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(logic)}`);
                if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`);
                const result = await response.json();
                return result.answer;
            } catch (error) {
                console.error('Error en Gemini Pro:', error);
                return null;
            }
        }
        
let query = m.text
let username = m.pushName
let syms1 = `

выапро
`.trim()

if (!chat.autorespond) return 
if (m.fromMe) return
if (!user.registered) return
await this.sendPresenceUpdate('composing', m.chat)

let result
if (result && result.trim().length > 0) {
result = await geminiProApi(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1)
}

if (result && result.trim().length > 0) {
await this.reply(m.chat, result, m)
} else {    
}}
return true
}
export default handler
