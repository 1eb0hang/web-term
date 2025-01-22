import execute from "./command.js"

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

    textArea.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = textArea.value;

            // Replace text area with a paragraph
            const output = document.createElement('p');
            output.textContent = command;
            output.style.margin = 0;
            line.replaceChild(output, textArea);

            // Call execute and create a new line after completion
            await execute(document, command);
            createNewLine();
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
createNewLine();
