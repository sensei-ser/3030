import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { ytmp3, ytmp4 } = require("@hiudyy/ytdl");
let tempStorage = {}
const youtubeRegexID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/

const handler = async (m, {conn, command, args, text, usedPrefix}) => {
try {
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} Billie Eilish - Bellyache*\n*${usedPrefix + command} https://youtu.be/gBRi6aZJGj4*`)

let videoIdToFind = text.match(youtubeRegexID) || null
  
const yt_play = await search(args.join(' '))
let ytplay2 = await yts(videoIdToFind === null ? text : 'https://youtu.be/' + videoIdToFind[1])
  
if (videoIdToFind) {
const videoId = videoIdToFind[1]  
ytplay2 = ytplay2.all.find(item => item.videoId === videoId) || ytplay2.videos.find(item => item.videoId === videoId)
} 
ytplay2 = ytplay2.all?.[0] || ytplay2.videos?.[0] || ytplay2  
  
let caption = `*◜⋯ ⋯ ⋯ Y O U T U B E ⋯ ⋯ ⋯◞*
*◎ ${lenguajeGB.smsYT1()}*
${ytplay2?.title}

*◎ ${lenguajeGB.smsYT2()}*
${ytplay2?.description}

*◎ ${lenguajeGB.smsYT3()}*
${ytplay2?.timestamp}

*◎ ${lenguajeGB.smsYT4()}*
${MilesNumber(ytplay2?.views)}

*◎ ${lenguajeGB.smsYT5()}*
${ytplay2?.url.replace(/^https:\/\//, "")}
*◜⋯ ⋯ ⋯ ${gt} ⋯ ⋯ ⋯◞*

*_Para seleccionar, reacciona o escribe respondiendo a este mensaje:_*
> "❤️" o "audio" → *Audio*
> "👍" o "video" → *Video*
> "🙏" o "audiodoc" → *Audio (doc)*
> "😮" o "videodoc" → *Video (doc)*`
tempStorage[m.sender] = { url: ytplay2.url, title: ytplay2.title, resp: m, usedPrefix: usedPrefix, command: command }
await conn.sendMessage(m.chat, {text: caption, contextInfo: { forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, forwardingScore: 9999999, isForwarded: true,  externalAdReply: { title: wm, body: wait2.replace(/\*/g, ''), thumbnailUrl: ytplay2.thumbnail, sourceUrl: md, mediaType: 1, showAdAttribution: true, containsAutoReply: true, renderLargerThumbnail: true }}})
} catch (e) {
m.reply('Error')
console.log(e)
}}

handler.before = async (m, { conn }) => {
const text = m.text.trim().toLowerCase()
if (!['❤️', 'audio', '👍', 'video', '🙏', 'audiodoc', '😮', 'videodoc'].includes(text)) return
const userVideoData = tempStorage[m.sender]
const gata = tempStorage[m.sender]
if (!userVideoData || !userVideoData.url) return
  
const optionsAudio = {
"❤️": "audio",
"audio": "audio",
"🙏": "document",
"audiodoc": "document"
}
const typeAudio = optionsAudio[text]
console.log(typeAudio)

const optionsVideo = {
"👍": { type: "video", caption: true },
"video": { type: "video", caption: true },
"😮": { type: "document", caption: false },
"videodoc": { type: "document", caption: false }
}
const typeVideo = optionsVideo[text]
  
try {
if ((typeAudio === "audio" || typeAudio === "document") && ['❤️', '🙏', 'audio', 'audiodoc'].includes(text)) {
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + `*${!typeAudio || typeAudio.type === "audio" ? lenguajeGB.smsYTA1() : lenguajeGB.smsYTA2()}*`, fkontak, m || null)
try {
const response = await fetch(APIs.neoxr.url + `youtube?url=${userVideoData.url}&type=audio&quality=128kbps&apikey=${APIs.neoxr.key}`)
const json = await response.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: json.data.url }, mimetype: 'audio/mpeg', fileName: json.data.filename }, { quoted: gata.resp })
} catch {   
try {
const response = await ytmp3(userVideoData.url);
await conn.sendMessage(m.chat, { [typeAudio]: response, mimetype: 'audio/mpeg', fileName: gata.title + '.mp3' }, { quoted: gata.resp })
} catch {
try {
const response = await fetch(APIs.ryzendesu.url + `downloader/ytmp3?url=${userVideoData.url}`)
const json = await response.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: json.url }, mimetype: 'audio/mpeg', fileName: json.filename }, { quoted: gata.resp })
} catch {
try {
const res = await fetch(APIs.vreden.url + `ytmp3?url=${userVideoData.url}`);
const { result } = await res.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: result.download.url }, mimetype: 'audio/mpeg', fileName: result.download.filename }, { quoted: gata.resp })
} catch {   
try {   
const response = await fetch(APIs.exonity.url + `dl/ytmp3?url=${userVideoData.url}&apikey=${APIs.exonity.key}`)
const json = await response.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: json.result.dl }, mimetype: 'audio/mpeg', fileName: json.result.title + '.mp3' }, { quoted: gata.resp })
} catch {
try {
const res = await fetch(APIs.siputzx.url + `d/ytmp3?url=${userVideoData.url}`)
let { data } = await res.json();
await conn.sendMessage(m.chat, { [typeAudio]: { url: data.dl }, mimetype: 'audio/mpeg' }, { quoted: gata.resp })
} catch {
try {   
const response = await fetch(APIs.delirius.url + `download/ytmp3?url=${userVideoData.url}`)
const json = await response.json()
await conn.sendMessage(m.chat, { [typeAudio]: { url: json.data.download.url }, mimetype: 'audio/mpeg', fileName: json.data.download.filename }, { quoted: gata.resp })
} catch (e) { 
reportError(e, conn, m, gata)
}}}}}}}
  
} else if ((typeVideo.type === "video" || typeVideo.type === "document") && ['👍', '😮', 'video', 'videodoc'].includes(text)) {
await conn.reply(m.chat, lenguajeGB.smsAvisoEG() + `*${!typeVideo || typeVideo.type === "video" ? lenguajeGB.smsYTV1() : lenguajeGB.smsYTV2()}*`, fkontak, m || null)
try {
const response = await fetch(APIs.neoxr.url + `youtube?url=${userVideoData.url}&type=video&quality=480p&apikey=${APIs.neoxr.key}`)
const json = await response.json()
let caption = `🎬 *${json.title}*\n📺 *Canal:* ${json.channel}\n📁 *Calidad:* ${json.data.quality}\n📦 *Tamaño:* ${json.data.size}`
await conn.sendMessage(m.chat, { [typeVideo.type]: { url: json.data.url }, mimetype: 'video/mp4', fileName: json.data.filename, ...(typeVideo.caption && { caption: caption }) }, { quoted: gata.resp })
} catch {
try {
const response = await ytmp4(userVideoData.url);
await conn.sendMessage(m.chat, { [typeVideo.type]: response, mimetype: 'video/mp4', fileName: gata.title + '.mp4' }, { quoted: gata.resp })
} catch {
try {
const response = await fetch(APIs.delirius.url + `download/ytmp4?url=${userVideoData.url}`)
const json = await response.json()
let caption = `🎬 *${json.data.title}*\n📺 *Canal:* ${json.data.author}\n📁 *Calidad:* ${json.data.download.quality}\n📦 *Tamaño:* ${json.data.download.size}`
//let url = await fetch(json.data.download.url, { method: 'HEAD' }).then(response => response.url)
await conn.sendMessage(m.chat, { [typeVideo.type]: { url: json.data.download.url }, mimetype: 'video/mp4', fileName: json.data.download.filename, ...(typeVideo.caption && { caption: caption }) }, { quoted: gata.resp })
} catch {
try {
const response = await fetch(APIs.ryzendesu.url + `downloader/ytmp4?url=${userVideoData.url}&quality=720`)
const json = await response.json()
let caption = `🎬 *${json.title}*\n📺 *Canal:* ${json.authorUrl}\n📁 *Calidad:* 720p\n📦 *Tamaño:* ${await getFileSize(json.url)}`
await conn.sendMessage(m.chat, { [typeVideo.type]: { url: json.url }, mimetype: 'video/mp4', fileName: json.filename, ...(typeVideo.caption && { caption: caption }) }, { quoted: gata.resp })
} catch {
try {   
const response = await fetch(APIs.exonity.url + `dl/ytmp4?url=${userVideoData.url}&apikey=${APIs.exonity.key}`)
const json = await response.json()
let caption = `🎬 *${json.result.title}*`
await conn.sendMessage(m.chat, { [typeVideo.type]: { url: json.result.dl }, mimetype: 'video/mp4', fileName: json.result.title + '.mp4', ...(typeVideo.caption && { caption: caption }) }, { quoted: gata.resp })
} catch (e) {
reportError(e, conn, m, gata)
}}}}}
}

} catch (error) {
console.log(error)
} finally {
delete tempStorage[m.sender]
}}
handler.command = /^(play|play2)$/i
 
export default handler

async function reportError(e, conn, m, gata) {
let errb = await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + gata.usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + gata.usedPrefix + gata.command)
await console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${gata.usedPrefix + gata.command} ❗❗`)
await console.log(e)
let faultkey = await conn.sendMessage(m.chat, { react: { text: fault, key: errb.key }})
await m.react(notsent)
}

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options})
return search.videos
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

async function getFileSize(url) {
try {
const response = await fetch(url, { method: 'HEAD' })
const contentLength = response.headers.get('content-length')
if (!contentLength) return "Tamaño no disponible"
const sizeInBytes = parseInt(contentLength, 10);
return await formatSize(sizeInBytes)
} catch (error) {
console.error("Error al obtener el tamaño del archivo:", error)
return "Error al obtener el tamaño"
}}

async function formatSize(bytes) {
if (bytes >= 1e9) {
return (bytes / 1e9).toFixed(2) + " GB"
} else if (bytes >= 1e6) {
return (bytes / 1e6).toFixed(2) + " MB"
} else {
return bytes + " bytes"
}}
