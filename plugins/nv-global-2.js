let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!chat.isBanned && chat.audios && m.text.match(/(правила|Правила)/gi)) {
let vn = './media/правила.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    

    

    

    

    




if (!chat.isBanned && chat.audios && m.text.match(/(пошол нах)/gi)) {    
let vn = './media/пошол нах.webp'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(о бот)/gi)) {    
let vn = './media/о бот.webp'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(😭)/gi)) {    
let vn = './media/смайл.webp'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(вызов)/gi)) {    
let vn = './media/вызов.webp'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    


if (!chat.isBanned && chat.audios && m.text.match(/(лот)/gi)) {    
    let vn = './media/лот.webp'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
            
                    



                

                    


   
return !0 }
export default handler
