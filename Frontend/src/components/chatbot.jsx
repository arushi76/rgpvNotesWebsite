import React, { useState, useRef, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import pdfData from "../data/pdfData";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState(null); // <-- store user's name
  const messagesEndRef = useRef(null);

  const greetings = [
    "Hello dear student! Welcome to Ace RGPV 😊 Type the name of the subject you want link for",
    "Hey there! Ready to find your subject links? 📚",
    "Hi dear learner! Type the subject you want the link for 📝",
  ];

  const handleSend = () => {
    if (!input) return;

    const trimmedInput = input.trim();
    const lowerInput = trimmedInput.toLowerCase();
    const userMsg = { from: "user", text: trimmedInput };
    setMessages([...messages, userMsg]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      // Check if user introduces their name
      const nameMatch = trimmedInput.match(
        /my name is (\w+)|i am (\w+)/i
      );
      if (nameMatch) {
        const name = nameMatch[1] || nameMatch[2];
        setUserName(name);
        const nameMsg = {
          from: "bot",
          text: `Nice to meet you, ${name}! 🎉 Type the subject you want the link for.`,
        };
        setMessages((prev) => [...prev, nameMsg]);
        return;
      }

      // Special greetings
      if (
        lowerInput === "hi" ||
        lowerInput === "hii" ||
        lowerInput === "hello" ||
        lowerInput === "hey" ||
        lowerInput === "hyy" ||
        lowerInput === "hy"
      ) {
        const greetingMsg = {
          from: "bot",
          text: userName
            ? `Hello ${userName}! Welcome to Ace RGPV 😊 Type the subject you want the link for.`
            : greetings[Math.floor(Math.random() * greetings.length)],
        };
        setMessages((prev) => [...prev, greetingMsg]);
        return;
      }

      // Check if subject exists
      const subject = pdfData.find(
        (item) => item.name.toLowerCase() === lowerInput
      );

      if (subject) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: `Yes! ${userName} Link is available ✅` },
        ]);

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { from: "bot", text: subject.link, isLink: true },
          ]);
        }, 800);
      } else {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: `Sorry ${userName}, it's not available ❌` },
        ]);
      }
    }, 800);
  };

  // Auto-scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform"
        >
          <DotLottieReact
            src="https://lottie.host/31620af7-f599-4a07-8c53-e8db4f637574/zsePX57UEm.lottie"
            loop
            autoplay
            style={{ width: "480px", height: "480px" }}
          />
        </button>
      )}

      {isOpen && (
        <div className="bg-[#0F172A] border border-gray-700 rounded-lg shadow-lg w-80 h-[28rem] flex flex-col">
          <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 text-white p-3 flex justify-between items-center rounded-t-lg">
            <span className="font-bold">PDF Chatbot</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-sm hover:text-gray-200"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto">
            {messages.length === 0 && !isTyping && (
              <p className="text-gray-500 text-sm">No messages yet...</p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 break-words ${
                  msg.from === "bot"
                    ? "bg-[#1E293B] text-cyan-300 px-2 py-1 rounded"
                    : "bg-[#0E1A2B] text-white px-2 py-1 rounded self-end"
                }`}
              >
                {msg.isLink ? (
                  <a
                    href={msg.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700 hover:text-blue-900 break-words"
                  >
                    {msg.text}
                  </a>
                ) : (
                  msg.text
                )}
              </div>
            ))}

            {isTyping && (
              <div className="bg-[#1E293B] text-cyan-300 px-2 py-1 rounded">
                Bot is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="flex p-3 border-t border-gray-700">
            <input
              type="text"
              placeholder="Type a subject..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-600 rounded p-2 mr-2 text-sm bg-[#0F172A] text-white placeholder-gray-400"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-cyan-500 text-white px-4 py-2 rounded text-sm hover:bg-cyan-400"
              disabled={!input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
