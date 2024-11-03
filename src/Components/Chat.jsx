import React, { useState, useEffect } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'ChatBot', text: "Hello there! 👋 It's nice to meet you!" },
    { sender: 'ChatBot', text: "What brings you here today? Please use the navigation below or ask me anything about ChatBot product." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'Me', text: input }];
      setMessages(newMessages);
      setInput('');

      setIsTyping(true);

      setTimeout(() => {
        let botResponse = '';
        switch (input.trim().toLowerCase()) {
          case 'hi':
            botResponse = 'Hello! How can I help you?';
            break;
          case 'what is chatbot?':
            botResponse = 'ChatBot is an intelligent agent designed to help you with various queries.';
            break;
          case 'how does it work?':
            botResponse = 'It works based on predefined responses to specific questions you ask.';
            break;
          case 'tell me a joke':
            botResponse = 'Why don’t scientists trust atoms? Because they make up everything!';
            break;
          default:
            botResponse = "I'm not sure how to respond to that. Can you please ask something else?";
        }
        setIsTyping(false);
        setMessages([...newMessages, { sender: 'ChatBot', text: botResponse }]);
      }, 3000);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <div className="bg-gray-200 rounded-t-lg p-4 flex items-center">
        <div className="w-8 h-8 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6H16C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2ZM12 10C14.208 10 16 11.792 16 14H8C8 11.792 9.792 10 12 10ZM6 14H18V20H6V14ZM18 8V12H6V8H18Z" />
          </svg>
        </div>
        <div className="ml-3 text-black font-sans text-lg">
          <div>ChatBot</div>
          <div className="flex items-center mt-1">
            <div className="w-3 h-3 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <circle cx="12" cy="12" r="12" fill="#34D399" />
              </svg>
            </div>
            <span className="text-green-500 text-sm">Online</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 h-96 overflow-y-scroll flex flex-col">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'Me' ? 'text-right' : 'text-left'} animate-fade-in`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'Me' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition-transform duration-500`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="mb-2 text-left animate-bounce">
            <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-black">
              ChatBot is typing...
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded-b-lg p-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded-r-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M2.394 2.462A1 1 0 013.242 2h17.516a1 1 0 01.848 1.462l-8.74 16.5a1 1 0 01-1.784 0l-8.74-16.5zm3.654 3.87l7.682 7.682-6.024-.66L6.048 6.332zm8.056 8.056l.66-6.024 7.682 7.682-8.342-1.658z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
