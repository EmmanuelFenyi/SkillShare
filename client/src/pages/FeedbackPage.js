
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/FeedbackPage.css';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data } = await axios.get('/api/feedback');
      setFeedback(data);
    };

    fetchFeedback();
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/feedback', { content: newFeedback });
    setFeedback([...feedback, data]);
    setNewFeedback('');
  };

  return (
    <div className="feedback">
      <h1 className="feedback__title">Feedback</h1>
      <form className="feedback__form" onSubmit={handleSend}>
        <input
          className="feedback__input"
          type="text"
          placeholder="Type your feedback..."
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          required
        />
        <button className="feedback__button" type="submit">
          Send
        </button>
      </form>
      <ul className="feedback__list">
        {feedback.map((fb) => (
          <li key={fb._id} className="feedback__item">
            {fb.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackPage;

