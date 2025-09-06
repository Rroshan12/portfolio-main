'use client';

import { useState, useEffect } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [beep, setBeep] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
              <span className="font-semibold">Meet Nomi - My AI CV 🤖</span>
            </div>
            <div className="h-[30rem] w-full border-t border-foreground/5">
              {showIframe ? (
                <div className="w-full h-full">
                  <iframe
                    src="https://nomi-y1yg.onrender.com"
                    className="w-full h-full border-0 block"
                    title="AI Assistant Chat"
                    allowFullScreen
                  />
                </div>
              ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <div className="relative mb-4">
                  <div className="absolute -inset-1 bg-blue-500 rounded-full opacity-75 animate-pulse"></div>
                  <div className="relative text-4xl">🤖</div>
                </div>
                <p className="text-lg font-medium text-gray-800">Nomi, Ask Me About Roshan!</p>
                <p className="text-sm text-gray-600 mt-2">Ask Nomi About me, my experience and all </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLoading(true);
                    // Simulate loading for 1.5 seconds before showing iframe
                    setTimeout(() => {
                      setShowIframe(true);
                      setIsLoading(false);
                    }, 1500);
                  }}
                  disabled={isLoading}
                  className={`mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-sm font-medium cursor-pointer border border-foreground/10 flex items-center justify-center min-w-[120px] h-10 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </div>
                  ) : (
                    'Try It Now'
                  )}
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
