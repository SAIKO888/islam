

const contentDiv = document.getElementById("content");
const messageBox = document.getElementById("message-box");
const messageText = document.getElementById("message-text");


const codeLines = [
    "function initializeSystem() {",
    "    console.log('System initializing...');",
    "    let status = checkStatus();",
    "    if (status) {",
    "        startProtocol();",
    "    } else {",
    "        alert('Initialization failed!');",
    "    }",
    "}",
    "",
    "const matrix = [1, 2, 3, 4, 5];",
    "for (let i = 0; i < matrix.length; i++) {",
    "    console.log(matrix[i]);",
    "}",
    "",
    "while (running) {",
    "    processData();",
    "    if (isError()) break;",
    "}",
    "",
    "fetch('/api/data')",
    "    .then(response => response.json())",
    "    .then(data => console.log(data));"
];


function typeCode() {

    const randomCode = codeLines[Math.floor(Math.random() * codeLines.length)];

    contentDiv.textContent += randomCode + "\n";
    

    contentDiv.scrollTop = contentDiv.scrollHeight;


    setTimeout(typeCode, 50);
}

typeCode();


setTimeout(() => {
    contentDiv.style.display = "none";

    messageBox.style.display = "block";


    let message = "Islam fucks Ahmed Alaa in PES";
    let i = 0;
    function typeMessage() {

        if (i < message.length) {

            messageText.textContent += message.charAt(i);
            i++;
            setTimeout(typeMessage, 100); 

        }

    }

    typeMessage();

}, 8000);


setTimeout(() => {
    
    window.close();
}, 30000);