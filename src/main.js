
const commands = [
  "HELP",
  "ABOUT",
  "PROJECTS",
  "SOCIALS",
  "LS"
];

let input=document.getElementById("input");
let output=document.getElementById("output");
let cmd = "";

function command(cmd){
  if(commands.includes(cmd.trim().toUpperCase())){
    console.log("Command found in array");
  }else{
    console.log("Invalid command");
  }
}

function update(){
  if(input.value.charAt(input.value.length-1) == "\n"){
    console.log("end of line");
    command(cmd);
  }
  cmd = input.value
  output.innerHTML = cmd;
}
