const moment = require("moment-timezone");
const pkg = require(process.cwd()+"/package.json");
const axios = require('axios');
const fs = require("node:fs");
const path = require("node:path");

module.exports = {
    command: "menu-polos",
    alias: ["menu-polos", "polos-menu"],
    category: ["main"],
    description: "Menampilkan menu polosan bot",
    loading: true,
    async run(m, { sock, plugins, config, Func }) {
    let data = fs.readFileSync(process.cwd()+'/system/case.js', 'utf8');
    let casePattern = /case\s+"([^"]+)"/g;
    let matches = data.match(casePattern).map(match => match.replace(/case\s+"([^"]+)"/, '$1'));
     let menu = {};
    plugins.forEach(item => {
      if (!item.category) {
       item.category = []
     }
      item.category.forEach(cat => {
         if (!menu[cat]) {
             menu[cat] = { command: [] };
         }  
        menu[cat].command.push({
                name: item.command,
                alias: item.alias,
                description: item.description
             });
          });
       });
    let cmd = 0;
    let alias = 0;
    let pp = await sock.profilePictureUrl(m.sender, 'image').catch(e => 'https://files.catbox.moe/8getyg.jpg')
   Object.values(menu).forEach(category => {
       cmd += category.command.length
          category.command.forEach(command => {
            alias += command.alias.length; 
        });
    });
      let caption = `*👋 Hai @${m.sender.split('@')[0]} saya adalah ~ Devolution Bot WhatsApp yang siap membantu sehari - hari anda agar lebih mudah dan simple*

*– 乂 Info User*
> *- Nama :* ${m.pushName}
> *- Perangkat :* ${m.device}
> *- Tag :* @${m.sender.split("@")[0]}

*– 乂 Info - Bot*
> *- Nama :* ${pkg.name}
> *- Versi :* v${pkg.version}
> *- Runtime :* ${Func.toDate(process.uptime() * 1000)}
> *- Prefix :* [ ${m.prefix} ]

Jika menemukan bug pada bot ini bisa langsung hubungi owner bot

*– 乂 M e n u - O t h e r*

${matches.map((a, i) => `*${i + 1}.* ${m.prefix + a}\n> Fitur sampingan ( Case Fitur )`).join("\n")} 
`
Object.entries(menu).forEach(([tag, commands]) => {
    caption += `\n*– 乂 M e n u – ${tag.split('').join(' ').capitalize()}*\n\n`;
    commands.command.forEach((command, index) => {
        caption += `*${index + 1}.* ${m.prefix + command.name}\n${command.description ? `> ${command.description}\n` : ''}`
            });
      });
      
     m.reply(caption)
    }
}