const client = require("../../index");

const Discord = require("discord.js");
const colors = require("colors");

const { version } = require("discord.js");

const config = require("../config/config.json");
const color = require("../config/colors.json");

const online = ` $$$$$$\            $$\       $$\       $$\           $$\      $$\  $$$$$$\  
$$  __$$\           $$ |      $$ |      $$ |          $$$\    $$$ |$$  __$$\ 
$$ /  \__| $$$$$$\  $$$$$$$\  $$$$$$$\  $$ | $$$$$$\  $$$$\  $$$$ |$$ /  \__|
\$$$$$$\  $$  __$$\ $$  __$$\ $$  __$$\ $$ |$$  __$$\ $$\$$\$$ $$ |$$ |      
 \____$$\ $$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |$$$$$$$$ |$$ \$$$  $$ |$$ |      
$$\   $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |$$   ____|$$ |\$  /$$ |$$ |  $$\ 
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$  |$$ |\$$$$$$$\ $$ | \_/ $$ |\$$$$$$  |
 \______/  \______/ \_______/ \_______/ \__| \_______|\__|     \__| \______/ `

 client.once('ready', c => {
    console.log((online.cyan))
    console.log((`━━━━━━━━━━ × SobbleMC × ━━━━━━━━━━`.brightCyan))
    console.log(`[LOGS] SobbleMC iniciado com ${client.users.cache.size} usuarios`.brightCyan)
    console.log(`[LOGS] SobbleMC iniciado com ${client.channels.cache.size} canais`.brightCyan)
    console.log(`[LOGS] SobbleMC iniciado com ${client.guilds.cache.size} servidores`.brightCyan)
    console.log((`━━━━━━━━━━ × SobbleMC × ━━━━━━━━━━`.bold.red))
    console.log((`[STATUS] Ping de inicialização:  ${client.ws.ping} ms`.bold.red))  
    console.log((`━━━━━━━━━━ × SobbleMC × ━━━━━━━━━━`.brightGreen))
    console.log((`[ARQUIVOS] SlashCommands carregados.`.brightGreen))
    console.log((`[ARQUIVOS] Comandos carregados.`.brightGreen))
    console.log((`[ARQUIVOS] Events carregados.`.brightGreen))
    console.log((`[ARQUIVOS] Conectado a Database.`.brightGreen))
    console.log((`»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«`.cyan))
    console.log((`✵ Desenvolvido por </zJoo> ✵`.cyan))
    console.log((`»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«`.cyan))
    console.log((` https://sobblemc.com <- Ainda em manutenção!`.brightCyan))         
    console.log((`»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«»«`.brightCyan))
 });

client.on('ready', () => {
    setInterval(async() => {

        let channel = await client.channel.cache.get('972968970078552094')

        const user = client.users.cache.size

        channel.setName(`✨・Usuários: ${user}`)
    }, 300000)
});

client.on('ready', () => {
    var canal = client.channels.cache.get('972972522154909706')
    var ping = client.ws.ping
    var ON = new Discord.MessageEmbed()
    .setTitle(`\`${client.user.tag}\` **ESTÁ ON-LINE NOVAMENTE**`)
    .setColor(color.blue)
    .setThumbnail(client.user.avatarURL())
    .addFields({name: '\u200B', value: '\u200B'}, {name: '<a:fms_4azul_fogoblue:972970850406006794> **STATUS**', value: `\`\`\`fix\nONLINE\`\`\``, inline: false},
    {name: '<a:fms_4azul_fogoblue:972970850406006794> **DESENVOLVEDORES**', value: `\`\`\`fix\n⌜ˢᵇ Master⌟ Jojozinho21\`\`\``, inline: false}, 
    {name: '<a:fms_4azul_fogoblue:972970850406006794> **PING**', value: `\`\`\`fix\n${ping}ms\`\`\``, inline: false})
    .setFooter({text: client.user.tag, iconURL: client.user.avatarURL()})
    .setTimestamp()

    canal.send({embeds: [ON]}) 
});

client.on("ready", () => {
    let don = ["PLAYING", "WATCHING", "LISTENING", "COMPETING"]
    let activities = [
        `Meu prefixo é s!`,
        `SobbleMC`,
        `Meu prefixo é /`,
        `SobbleMC`
      ],
      i = 0;
    setInterval( () => {let random = don[Math.floor(Math.random()*don.length)]
  client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: `${random}`
    })}, 1000 * 10); 
});