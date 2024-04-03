document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Function to send a message
    function sendMessage() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            // Display message in chat window
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatWindow.appendChild(messageElement);
            
            // Clear input field
            messageInput.value = '';
            
            // Simulate bot reply
            setTimeout(() => {
                const replyMessage = 'This is a reply from the bot: ' + message;
                const replyElement = document.createElement('div');
                replyElement.textContent = replyMessage;
                chatWindow.appendChild(replyElement);
                // Scroll to bottom
                chatWindow.scrollTop = chatWindow.scrollHeight;
            }, 1000);
        }
    }

    // Event listener for send button click
    sendButton.addEventListener('click', sendMessage);

    // Event listener for input field enter key press
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});