import * as Discord from "discord.js";
import {IBotComando} from "../api";

export default class testcommand implements IBotComando{
    
    private readonly _command = "test_command"

    help(): string {
        return "you found the test command, this should not be here ";
    }

    ajudua(): string {
        return "você achou o comando teste, isso não deveria estar aqui!";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgobject: Discord.Message, client: Discord.Client): void {
        msgobject.channel.send("funciona");
        
    }

}