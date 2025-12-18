
import React, { useState, useRef, useEffect } from 'react';
import { getAiResponse } from '../services/geminiService';
import { Message } from '../types';
import { DEV_NAME } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Yo! 👋 Mình là AI của Pháp. Cần hỏi gì về AI, code hay football FPTU không?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getAiResponse(userMessage, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group"
      >
        <i className="fa-solid fa-comment-dots text-white text-2xl group-hover:rotate-12 transition-transform"></i>
      </button>

      {isOpen && (
        <div className="fixed bottom-32 right-10 w-[90vw] md:w-[400px] h-[600px] max-h-[75vh] glass-card rounded-[2rem] shadow-2xl flex flex-col z-50 overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-6 bg-gradient-to-r from-cyan-600/20 to-violet-600/20 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <i className="fa-solid fa-microchip text-black text-lg"></i>
              </div>
              <div>
                <h4 className="text-sm font-black heading-font uppercase">Pháp.AI</h4>
                <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest animate-pulse">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-white text-black font-semibold' 
                  : 'bg-white/5 border border-white/10 text-slate-300'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-3xl flex gap-1">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-black/40 border-t border-white/5 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chat with AI..."
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-cyan-500 text-black rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
