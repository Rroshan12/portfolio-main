'use client';

import { useState, useEffect } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [beep, setBeep] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const toggleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Beep sound effect
      const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfQAAABAAgZGF0YU' + 'A'.repeat(1000));
      audio.volume = 0.1;
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setBeep(prev => !prev);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-4 w-75 bg-white rounded-lg shadow-xl border border-foreground/10 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center">
              <div className="relative mr-2">
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${beep ? 'bg-red-500 animate-ping' : 'bg-green-500'}`}></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-semibold">Try My AI Assistant 🤖</span>
            </div>
            <div className="h-120 flex flex-col border-t border-foreground/5">
              {showIframe ? (
                <iframe
                  src="https://example.com/login"
                  className="w-full h-full border-0"
                  title="AI Assistant Chat"
                  allowFullScreen
                />
              ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="relative mb-4">
                  <div className="absolute -inset-1 bg-blue-500 rounded-full opacity-75 animate-pulse"></div>
                  <div className="relative text-4xl">🤖</div>
                </div>
                <p className="text-lg font-medium text-gray-800">Coming Soon!</p>
                <p className="text-sm text-gray-600 mt-2">Our AI assistant is being trained to help you better</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowIframe(true);
                  }}
                  className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-sm font-medium cursor-pointer border border-foreground/10"
                >
                  Try It Now
                </button>
                <div className="mt-4 flex space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 rounded-full ${beep && i === 0 ? 'bg-blue-500' : 'bg-gray-300'} transition-colors duration-300`}
                      style={{
                        animation: beep ? 'bounce 1s infinite' : 'none',
                        animationDelay: `${i * 0.15}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              )}
            </div>
          </div>
        )}
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
