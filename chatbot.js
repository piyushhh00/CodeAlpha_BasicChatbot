document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const suggestionButtons = document.querySelectorAll('.suggestion');
    
    // Add initial bot message
    addBotMessage("Hello! I'm a simple chatbot. What would you like to talk about?");
    
    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Add click event to suggestion buttons
    suggestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            userInput.value = this.textContent;
            sendMessage();
        });
    });
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addUserMessage(message);
        
        // Clear input field
        userInput.value = '';
        
        // Get bot response after a small delay to simulate thinking
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addBotMessage(botResponse);
        }, 600);
    }
    
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getBotResponse(userInput) {
        // Convert input to lowercase for easier matching
        userInput = userInput.toLowerCase();
        
        // Define response rules
        if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
            return "Hi there! How can I help you today?";
        }
        
        else if (userInput.includes('how are you')) {
            return "I'm fine, thanks for asking! How about you?";
        }
        
        else if (userInput.includes('good') || userInput.includes('fine') || userInput.includes('great')) {
            return "Glad to hear that!";
        }
        
        else if (userInput.includes('bad') || userInput.includes('not good') || userInput.includes('terrible')) {
            return "I'm sorry to hear that. I hope things get better soon.";
        }
        
        else if (userInput.includes('name')) {
            return "I'm SimpleBot, a rule-based chatbot.";
        }
        
        else if (userInput.includes('do you do') || userInput.includes('your purpose') || userInput.includes('what are you')) {
            return "I'm a simple chatbot designed to demonstrate basic rule-based responses.";
        }
        
        else if (userInput.includes('thank')) {
            return "You're welcome!";
        }
        
        else if (userInput.includes('bye') || userInput.includes('goodbye') || userInput.includes('exit') || userInput.includes('quit')) {
            return "Goodbye! Have a great day!";
        }
        
        else {
            return "I'm not sure how to respond to that. Try asking me something else!";
        }
    }
});