
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
//
// function update(){
//   if(input.value.charAt(input.value.length-1) == "\n"){
//     console.log("end of line");
//     command();
//   }
//   cmd = input.value
//   // output.innerHTML = cmd;
// }

function execute(){
  carrot.innerHTML="Fucked"
}
