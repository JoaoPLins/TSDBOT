import * as Discord from "discord.js";

export interface IBotComando{
    help(): string; 
    ajudua(): string;
    isThisCommand(command: string): boolean;
    runCommand(args: string[], msgobject: Discord.Message, client: Discord.Client) : void;
     
}