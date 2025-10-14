import { cpus as _cpus, totalmem, freemem, platform, hostname, version, release, arch } from 'os'
import speed from 'performance-now'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import ws from 'ws'

let format = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix }) => {
   let uniqueUsers = new Map()

   global.conns.forEach((conn) => {
     if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
       uniqueUsers.set(conn.user.jid, conn)
     }
   })
   let users = [...uniqueUsers.values()]
   let totalUsers = users.length
   let totalreg = Object.keys(global.db.data.users).length
   let totalbots = Object.keys(global.db.data.settings).length
   let totalStats = Object.values(global.db.data.stats).reduce((total, stat) => total + stat.total, 0)
   const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
   let totalchats = Object.keys(global.db.data.chats).length
   let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
   const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
   const used = process.memoryUsage()
   const cpus = _cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
      return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
      last.total += cpu.total
      last.speed += cpu.speed / length
      last.times.user += cpu.times.user
      last.times.nice += cpu.times.nice
      last.times.sys += cpu.times.sys
      last.times.idle += cpu.times.idle
      last.times.irq += cpu.times.irq
      return last
   }, {
      speed: 0,
      total: 0,
      times: {
         user: 0,
         nice: 0,
         sys: 0,
         idle: 0,
         irq: 0
      }
   })
   	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   let timestamp = speed()
   let latensi = speed() - timestamp
   let txt = '`*⭒─ׄ─ׅ─ׄ─⭒ Мой Создатель ⭒─ׄ─ׅ─ׄ─⭒*`\n\n'
       txt += `╭───────────\n`
       txt += `┊ [ *ОБРАЩАТЬСЯ ПО НОМЕРУ*\n`
       txt += `┊ [ *Серёга*【  +79615370645  】*\n`
       txt += `╰─────────\n\n`
       txt += `> 🚩 ${textbot}`

let img = `https://i.ibb.co/Y7mhFdf/file.jpg`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, fake)
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['создатель', 'владелиц', 'купить', 'аренда']

export default handler

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


