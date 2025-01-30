import {execute, print} from "./command.js"

function createNewLine() {
    const terminal = document.getElementById('terminal');

    // Create a new line container
    const line = document.createElement('div');
    line.className = 'line';

    // Create the prompt element
    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = '$';

    // Create the text area
    const textArea = document.createElement('textarea');
    textArea.className = 'text-area';
    textArea.rows = 1;
    textArea.style.margin=1;

    textArea.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = textArea.value;

            // Replace text area with a paragraph
            const output = document.createElement('p');
            output.textContent = command;
            output.style.margin = 1;
            line.replaceChild(output, textArea);

            // Call execute and create a new line after completion
            await execute(document, createNewLine, command);
            //createNewLine();
        }
    });

    // Append prompt and text area to the line
    line.appendChild(prompt);
    line.appendChild(textArea);
    terminal.appendChild(line);

    // Focus the new text area
    textArea.focus();
}

// Initialize the terminal with the first line
print("Welcome to the web terminal")
print("Visit https://1eb0hang.github.io/web-term/ for more projects :)")

createNewLine();

// function myLoop(){
  
//   // do something that takes a while
//   setTimeout(function(){
//      console.log("did something");
//      prompt("Message to the user", "Default Value")
//      // then recurse...
//      myLoop();
     
//   }, 0);
  
// }

// myLoop()
