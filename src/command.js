import print from "./command_list.js"

let commands = {
    "set":add_command,
    "print":print
};
let vars = {};


export default function execute(doc, str_cmd){
    return new Promise((resolve)=>{
	const command = str_cmd.split(" ")
	get_commands()[command[0]](doc,command)
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


