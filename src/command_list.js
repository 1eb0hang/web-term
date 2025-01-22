
export const def = (doc, value)=>{
    console.log("Hello world")
}

export const print = (doc, value)=>{
    //console.log(value);
    const term = doc.getElementById("terminal")
    const output = doc.createElement('p');
    
    output.textContent = (value.slice(1, value.length)).join(" ");
    output.style.margin = 0;
    term.appendChild(output);
    // console.log(term);
}

export function input(doc, str_prompt){
    const term = doc.getElementById("terminal")
    // const output = document.createElement('p');
    
    const line = document.createElement('div');
    line.className = 'line';

    // Create the prompt element
    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = (str_prompt.slice(1, str_prompt.length)).join(" ");

    // Create the text area
    const textArea = document.createElement('textarea');
    textArea.className = 'text-area';
    textArea.rows = 1;
    textArea.style.margin=1;

    textArea.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
	    e.preventDefault();
	    const string = textArea.value;

	    // Replace text area with a paragraph
	    const output = document.createElement('p');
	    output.textContent = string;
	    output.style.margin = 1;
	    line.replaceChild(output, textArea);
	    await get_return(string, console.log, string);
	    // Call execute and create a new line after completion
            
	}
    });

    // Append prompt and text area to the line
    line.appendChild(prompt);
    line.appendChild(textArea);
    terminal.appendChild(line);
    
}

function get_return(command, func, args){
    return new Promise((resolve) => {
	func(args)
	resolve();
    });
};
