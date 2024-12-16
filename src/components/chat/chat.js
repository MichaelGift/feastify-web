import React, { useState, useEffect } from "react";
import "./chat.css";

const discussions = [
  { id: 1, name: "John Doe", lastMessage: "Hey, how are you?" },
  { id: 2, name: "Jane Smith", lastMessage: "See you tomorrow!" },
  { id: 3, name: "Chef Alex", lastMessage: "Order received." },
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 500) {
        setKeyboardOpen(true);
      } else {
        setKeyboardOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChatSelection = (chatId) => {
    const chat = discussions.find((d) => d.id === chatId);
    setSelectedChat(chat);
    setMessages([
      { sender: "You", text: "Hi!", time: "10:30 AM", read: true },
      { sender: chat.name, text: chat.lastMessage, time: "10:31 AM", read: false },
    ]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", text: newMessage.trim(), time: timestamp, read: false },
      ]);
      setNewMessage("");
    }
  };

  const handleBack = () => {
    setSelectedChat(null);
    setMessages([]);
  };

  useEffect(() => {
    if (selectedChat) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.sender !== "You" ? { ...msg, read: true } : msg
        )
      );
    }
  }, [selectedChat]);

  return (
    <div className={`chat-container ${keyboardOpen ? "keyboard-open" : ""}`}>
      <div className="discussions">
        <h2>Chats</h2>
        <div className="discussion-list">
          {discussions.map((chat) => (
            <div
              key={chat.id}
              className={`discussion-item ${
                selectedChat?.id === chat.id ? "active" : ""
              }`}
              onClick={() => handleChatSelection(chat.id)}
            >
              <div>
                <h4 className="discussion-name">{chat.name}</h4>
                <p className="last-message">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-window">
        {selectedChat ? (
          <>
            <div className="chat-header">
              <button onClick={handleBack} className="back-button">
                ←
              </button>
              <h3>{selectedChat.name}</h3>
            </div>

            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === "You" ? "outgoing" : "incoming"
                  }`}
                >
                  <p>
                    <strong>{msg.sender}: </strong>
                    {msg.text}
                  </p>
                  <small className="timestamp">{msg.time}</small>
                  {msg.sender === "You" && (
                    <span className="read-status">
                      {msg.read ? "\u2713\u2713 Read" : "\u2713 Sent"}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">
            <p>Select a chat to start messaging.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
