
export default function print(doc, value){
    console.log(value);
    const term = doc.getElementById("terminal")
    const output = document.createElement('p');
    
    output.textContent = (value.slice(1, value.length)).join(" ");
    output.style.margin = 0;
    term.appendChild(output);
    // console.log(term);
}
