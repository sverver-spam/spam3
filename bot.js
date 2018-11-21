const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514729634030551051")
setInterval(function() {
channel.send(`spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam `);
}, 25)
})
 
client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "3say") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
}); 
client.login('NTE0NzMwNTUyNzg4Nzc5MDIy.Dta0uQ.5Bg5f-b1ViEoBhx4ZFD6oP_xFj4');
