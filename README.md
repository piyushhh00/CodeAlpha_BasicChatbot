# Simple Rule-Based Chatbot

This project contains a simple rule-based chatbot implemented in one version: a command-line version using Python.

## Project Overview

The chatbot uses basic pattern matching to respond to user inputs. It can handle greetings, questions about itself, and other simple conversational patterns.

## Files in this Project
- `simple_chatbot.py` - Python implementation of the chatbot for command-line use

## How to Use

### Python Version

1. Make sure you have Python installed on your system
2. Run the script using the command: `python simple_chatbot.py`
3. Type your messages when prompted and press Enter
4. Type 'bye', 'exit', or 'quit' to end the conversation

## Features

- Simple rule-based responses
- Clean, responsive UI for the web version
- Suggestion buttons for common queries
- Similar functionality in both web and Python versions

## Customization

### Adding New Responses

#### In Python (simple_chatbot.py)

To add new response patterns, edit the `get_response()` function in `simple_chatbot.py`. Add new conditions following the existing pattern:

```python
elif "your_keyword" in user_input:
    return "Your response here"
```

## License

This project is open-source and available for personal and educational use.

## Future Improvements

Potential enhancements for this chatbot:

- Add more complex pattern matching
- Implement natural language processing capabilities
- Add a memory feature to remember conversation context
- Expand the range of topics the chatbot can discuss
- Add support for multimedia responses (images, links, etc.)

---

Feel free to modify and expand this chatbot for your own projects!
