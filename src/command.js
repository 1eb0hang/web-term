import {print, def, input} from "./command_list.js"

const doc = document;
let commands = {
    "set":add_command,
    "print":print,
    "help":()=>print(doc, new Array("help", "message that provides ehlp")),
    "input":input
};
let vars = {};


export default function execute(doc, str_cmd){
    return new Promise((resolve)=>{
	const command = str_cmd.split(" ")
	
	if(command[0] in get_commands()){
	    get_commands()[command[0]](doc,command)
	}else{
	    print(doc, new Array(command[0], `Command not found: "${command[0]}"`))
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


