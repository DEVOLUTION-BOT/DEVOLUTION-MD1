/*
Base By Axel
Creator is Selxyzz
Group Main Bot: https://chat.whatsapp.com/He1CTwgCL6B3lpQ8dvtPvY
Join Untuk Menggunakan Bot
*/

const fs = require('node:fs');

const config = {
    owner: ["6288983298862"],
    name: "~ Devolution",
    botNumber: "6283168629450", 
    sessions: "Devo-Sessions",
    sticker: {
      packname: "Devolution",
      author: "Kibozxd"
    },
    apikey: "cKhWMontjkfJbbewZf", //Jika Feature Rest Api Yang Menggunakan Apikey Ini Gk Berfungsi Maka Daftar Ulang Ke Rest Api anira.site Dan Dapatkan Apikey Baru Anda.
    apikeyPrem: "pasonki23",
   messages: {
      wait: "*( Loading )* Tunggu Sebentar...",
      owner: "*( Denied )* Kamu bukan owner ku !",
      premium: "*( Denied )* Fitur ini khusus user premium",
      maintenance: "*( Denied )* Fitur Sedang Maintenance Mohon Bersabar, Segera Perbaiki!", 
      group: "*( Denied )* Fitur ini khusus group",
      botAdmin: "*( Denied )* Fitur ini hanya bisa di akses hanya ketika bot menjadi admin.*"
   },
   database: "neko-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
