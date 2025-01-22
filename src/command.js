import print from "./command_list.js"

let commands = {
    "set":add_command,
    "print":print
};
let vars = {};


export default function execute(str_cmd){
    return new Promise((resolve)=>{
	const command = str_cmd.split(" ")
	// if(command.length>1){
	//     window[command[0]]();
	// }else{
	//     window.[command[0]](command.slice(1, command.length-1));
	// }
	get_commands()[command[0]](window.document,command)
	console.log(`Executed: ${command}`);
	resolve();
    });
}

export function get_commands(){return commands;}

export function add_command(name, reference){
    let override = false;
    if(name in commands){
	// TODO: get user input
	// check if they want to overide exsisting reference
    }else{
	override=true;
    }

    if(override){
	commands[name]=reference;
    }
}

export function remove_command(name){
    delete commands[name];
}


