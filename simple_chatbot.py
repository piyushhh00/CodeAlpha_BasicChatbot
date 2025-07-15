def get_response(user_input):
    """
    Generate a response based on user input using simple rule-based matching.
    """
    # Convert input to lowercase for easier matching
    user_input = user_input.lower()
    
    # Define response rules
    if "hello" in user_input or "hi" in user_input or "hey" in user_input:
        return "Hi there! How can I help you today?"
    
    elif "how are you" in user_input:
        return "I'm fine, thanks for asking! How about you?"
    
    elif "good" in user_input or "fine" in user_input or "great" in user_input:
        return "Glad to hear that!"
    
    elif "bad" in user_input or "not good" in user_input or "terrible" in user_input:
        return "I'm sorry to hear that. I hope things get better soon."
    
    elif "name" in user_input:
        return "I'm SimpleBot, a rule-based chatbot."
    
    elif "do you do" in user_input or "your purpose" in user_input or "what are you" in user_input:
        return "I'm a simple chatbot designed to demonstrate basic rule-based responses."
    
    elif "thank" in user_input:
        return "You're welcome!"
    
    elif "bye" in user_input or "goodbye" in user_input or "exit" in user_input or "quit" in user_input:
        return "Goodbye! Have a great day!"
    
    else:
        return "I'm not sure how to respond to that. Try asking me something else!"

def main():
    print("===== Simple Rule-Based Chatbot =====")
    print("Type 'bye', 'exit', or 'quit' to end the conversation.")
    print("Bot: Hello! I'm a simple chatbot. What would you like to talk about?")
    
    while True:
        # Get user input
        user_input = input("You: ")
        
        # Get bot response
        response = get_response(user_input)
        print(f"Bot: {response}")
        
        # Check if we should exit
        if user_input.lower() in ["bye", "goodbye", "exit", "quit"]:
            break

if __name__ == "__main__":
    main()