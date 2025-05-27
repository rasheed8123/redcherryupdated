import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { client, MODEL_NAME, systemMessage } from '../config/chatbot';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your RedCherry Interiors assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatResponse = (text: string) => {
    // Split the text into lines
    const lines = text.split('\n');
    
    // Format each line that starts with a bullet point
    return lines.map((line, index) => {
      if (line.trim().startsWith('-')) {
        return (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-red-600 mt-1">•</span>
            <span>{line.trim().substring(1).trim()}</span>
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare conversation history
      const conversationHistory = messages.map(msg => ({
        role: msg.isUser ? "user" : "assistant",
        content: msg.text
      }));

      // Add the new user message
      conversationHistory.push({
        role: "user",
        content: inputMessage
      });

      // Get response from Hugging Face
      const chatCompletion = await client.chatCompletion({
        provider: "novita",
        model: MODEL_NAME,
        messages: [systemMessage, ...conversationHistory],
      });

      const aiResponse = chatCompletion.choices[0].message.content || "I apologize, but I'm having trouble processing your request right now. Please try again later.";

      // Add AI response
      const aiMessage: Message = {
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Error getting AI response:', error);
      
      // Handle specific error cases
      let errorMessage = "I apologize, but I'm having trouble connecting right now. Please try again later or contact our team directly.";
      
      if (error?.status === 429) {
        errorMessage = "I apologize, but our AI service is currently experiencing high demand. Please try again in a few moments or contact our team directly for immediate assistance.";
      } else if (error?.status === 401) {
        errorMessage = "I apologize, but there seems to be an authentication issue with our AI service. Our team has been notified and will resolve this shortly.";
      }

      // Add error message
      const errorResponse: Message = {
        text: errorMessage,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col">
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">RedCherry Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-red-700 rounded-full p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.isUser ? (
                    message.text
                  ) : (
                    <div className="space-y-1">{formatResponse(message.text)}</div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                className={`bg-red-600 text-white rounded-lg p-2 hover:bg-red-700 transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 