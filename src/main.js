
const commands = [
  "HELP",
  "ABOUT",
  "PROJECTS",
  "SOCIALS",
  "LS"
];

let input=document.getElementById("input");
let output=document.getElementById("output");
let path=document.getElementById("path");
let prompt=document.getElementById("prompt");
let line=document.getElementById("carrot");
let cmd = "";

document.getElementById("input").addEventListener("keypress", e => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        execute()
    }
});

function command(){
  if(commands.includes(cmd.trim().toUpperCase())){
    console.log("Command found in array");
  }else{
    console.log("Invalid command");
  }
}

function execute(){
  carrot.innerHTML=path.innerHTML+prompt.innerHTML+input.value+" no more"
}
