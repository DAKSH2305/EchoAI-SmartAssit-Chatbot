const sendBtn = document.getElementById("sendBtn")
const messageInput = document.getElementById("message")
const chatbox = documen.getElementById("chat-box")

function addMessage(sender, message) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message");

    messageDiv.innerHTML = `
        <strong>${sender}:</strong> ${message}
    `;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}
async function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") return;

    addMessage("You", message);

    messageInput.value = "";

    try {

        const response = await fetch("http://127.0.0.1:8000/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        addMessage("Gemini", data.response);

    } catch (error) {

        addMessage("Error", "Unable to connect to backend.");

        console.error(error);
    }

}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        sendMessage();

    }

});