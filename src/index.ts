import * as Discord from "discord.js";
import { IBotComando } from "./api";
import * as ConfigFile from "./config";

const client: Discord.Client = new Discord.Client();

let commands: IBotComando[] = [];

loadcommands(`${__dirname}/commands`)

client.on("ready", () => {
    // bot is online querry
    console.log("bot on");   
})
client.login(ConfigFile.config.token);

client.on("message", msg => {
    //iginorar caso a msg seja do bot 
    if(msg.author.bot) {return; }

   // ignorar msg sem prefix 
   if (!msg.content.startsWith(ConfigFile.config.prefix)) {return; }
   
   handleCommand(msg); 
})

async function handleCommand(msg: Discord.Message){

    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for (const commandClass of commands){

        try{
            if(!commandClass.isThisCommand(command)){
                continue;
            }
            
            await commandClass.runCommand( args, msg, client)

        }
        catch(exception){
            console.log(exception);
        }

    }

    
}

function loadcommands(commandspath: string) {

    if (!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0){return; }

    for(const commandName of ConfigFile.config.commands as string[]){

        const commandClass = require (`${commandspath}/${commandName}`).default;

        const command = new commandClass() as IBotComando; 
        
        commands.push(command);
        
    }
}



