let handler = async (m, { isPrems, conn }) => {

let img = 'https://masterpiecer-images.s3.yandex.net/8b141c383f5611eeb12e6a2aaa288599:upscaled' 
let texto = `🌟 𝐌𝐄𝐍𝐔 🌟
*˚₊·˚₊· ͟͟͞͞➳❥ @+${m.sender.split("@")[0]}*
> ┆ *│* ┊▸ ✦ 
> ┆ *│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*> ┣━━━━━━━━━━━ ┅*
*> ┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*> ┃*       *Создатель бота*
*> ┃*              *Серега*
*> ┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*> ┗━━━━━━━━━━━*  
> ┆ ——————«•»——————
> ┆          ☆::Меню::☆*
> ┆——————«•»——————
> ┆ *Правила
> ┆ *Ушла
> ┆ *Давай
> ┆ *Время
> ┆ *Как дела
> ┆ *Спать
> ┆ *Друг
> ┆ *Смешно
> ┆ *Сука
> ┆ *Секс
> ┆ *Здравствуйте
> ┆ *Красавица
> ┆ *Музыка
> ┆ *Плов
> ┆ *С днём рождения

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
