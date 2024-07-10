import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/MessagesPage.css';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await axios.get('/api/messages');
      setMessages(data);
    };

    fetchMessages();
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/messages', { content: newMessage });
    setMessages([...messages, data]);
    setNewMessage('');
  };

  return (
    <div className="messages">
      <h1 className="messages__title">Messages</h1>
      <form className="messages__form" onSubmit={handleSend}>
        <input
          className="messages__input"
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          required
        />
        <button className="messages__button" type="submit">
          Send
        </button>
      </form>
      <ul className="messages__list">
        {messages.map((msg) => (
          <li key={msg._id} className="messages__item">
            {msg.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesPage;

