import {print, help, input} from "./command_list.js"

const doc = document;
let commands = {
    "set":add_command,
    "print":print,
    "help":help,
    "input":input
};
let vars = {};


export default function execute(doc, call, str_cmd){
    return new Promise((resolve)=>{
	const command = str_cmd.split(" ")
	
	if(command[0] in get_commands()){
	    get_commands()[command[0]](doc,call,command)
	}else{
	    print(doc,call, new Array(command[0], `Command not found: "${command[0]}"`))
	}
	
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

export function add_variable(name, value){
    let override = false;
    if(name in vars){
	// TODO: get user input
	// check if they want to overide exsisting reference
    }else{
	override=true;
    }

    if(override){
	commands[name]=value;
    }
}

export function remove_variable(name){
    delete vars[name];
}


