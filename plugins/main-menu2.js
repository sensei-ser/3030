let handler = async (m, { isPrems, conn }) => {

let img = 'https://img.freepik.com/premium-photo/young-adult-woman-with-creative-makeup-glamour_1077802-15091.jpg?semt=ais_hybrid&w=740' 
let texto = `🌟 𝐌𝐄𝐍𝐔 🌟
*˚₊·˚₊· ͟͟͞͞➳❥ @+${m.sender.split("@")[0]}*
> ┆ *│* ┊▸ ✦ 
> ┆ *│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*> ┣━━━━━━━━━━━ ┅*
*> ┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*> ┃*       *Создатель бота*
*> ┃*              *Серега* 
*> ┃*      *По всем вопросам*
*> ┃*     *о боте пишите по номеру*
*> ┃*         *+79615370645*
*> ┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*> ┗━━━━━━━━━━━*  
> ┆ ——————«•»——————
> ┆          ☆::Меню::☆*
> ┆——————«•»——————
> ┆ *𒆙Включить приветствие𒆙*
> ┆ *𒆙Выключить приветствие𒆙*
> ┆ *𒆙Включить антиссылка𒆙*
> ┆ *𒆙Выключить антиссылка𒆙*
> ┆ *𒆙Включить антиссылка2𒆙*
> ┆ *𒆙Выключить антиссылка2𒆙*
> ┆ *𒆙Включить аудио𒆙*
> ┆ *𒆙Выключить аудио𒆙*
> ┆ *𒆙Включить авточтение𒆙*
> ┆ *𒆙Выключить авточтение𒆙*
> ┆ *𒆙Включить антивызов𒆙*
> ┆ *𒆙Выключить антивызов𒆙*
> ┆ *𒆙Включить толькоадмин𒆙*
> ┆ *𒆙Выключить толькоадмин𒆙*
> ┆ *𒆙𒆙*
> ┆ *𒆙Вызов𒆙*
> ┆ *𒆙𒆙*
> ┆ *𒆙𒆙*
> ┆ *𒆙𒆙*
> ┆ *𒆙𒆙*
















──────────────────
⚠️ *Ознакомтесь с правильностью команд*.`
const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
}
handler.help = ['menuhot (menu +18)']
handler.tags = ['main']
handler.command = ['меню'] 
export default handler;
