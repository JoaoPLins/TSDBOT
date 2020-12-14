"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const client = new Discord.Client();
let commands = [];
loadcommands(`${__dirname}/commands`);
client.on("ready", () => {
    console.log("bot on");
});
client.login(ConfigFile.config.token);
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    handleCommand(msg);
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadcommands(commandspath) {
    if (!ConfigFile.config.commands || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandClass = require(`${commandspath}/${commandName}`).default;
        const command = new commandClass();
        commands.push(command);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFFdEMsdUNBQXVDO0FBRXZDLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVwRCxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBRWpDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUE7QUFFckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUE7QUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFdEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUU7SUFFdkIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUFDLE9BQU87S0FBRTtJQUc5QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFDLE9BQU87S0FBRTtJQUVqRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUE7QUFFRixTQUFlLGFBQWEsQ0FBQyxHQUFvQjs7UUFFN0MsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQyxLQUFLLE1BQU0sWUFBWSxJQUFJLFFBQVEsRUFBQztZQUVoQyxJQUFHO2dCQUNDLElBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFDO29CQUNwQyxTQUFTO2lCQUNaO2dCQUVELE1BQU0sWUFBWSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2FBRXBEO1lBQ0QsT0FBTSxTQUFTLEVBQUM7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQjtTQUVKO0lBR0wsQ0FBQztDQUFBO0FBRUQsU0FBUyxZQUFZLENBQUMsWUFBb0I7SUFFdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFLLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1FBQUMsT0FBTztLQUFFO0lBRW5HLEtBQUksTUFBTSxXQUFXLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFvQixFQUFDO1FBRTVELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBRSxHQUFHLFlBQVksSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUV4RSxNQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUVsRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRTFCO0FBQ0wsQ0FBQyJ9