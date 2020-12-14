"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testcommand {
    constructor() {
        this._command = "test_command";
    }
    help() {
        return "you found the test command, this should not be here ";
    }
    ajudua() {
        return "você achou o comando teste, isso não deveria estar aqui!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgobject, client) {
        msgobject.channel.send("funciona");
    }
}
exports.default = testcommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tbWFuZHMvVGVzdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxjQUFjLENBQUE7SUFtQjlDLENBQUM7SUFqQkcsSUFBSTtRQUNBLE9BQU8sc0RBQXNELENBQUM7SUFDbEUsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLDBEQUEwRCxDQUFDO0lBQ3RFLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDekUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdkMsQ0FBQztDQUVKO0FBckJELDhCQXFCQyJ9