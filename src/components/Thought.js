import React, { useState, useEffect } from 'react';
import '../css/Thought.css'

function Thought() {
  const [thoughts, setThoughts] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const storedThoughts = JSON.parse(localStorage.getItem('thoughts') || '[]');
    setThoughts(storedThoughts);
  }, []);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!text || !date) {
        alert('Please enter a date and your thoughts.');
        return;
      }
    const newThought = { text, date };
    const updatedThoughts = [...thoughts, newThought];
    setThoughts(updatedThoughts);
    localStorage.setItem('thoughts', JSON.stringify(updatedThoughts));
    setText('');
    setDate('');

  }

  function handleEdit(index, newText, newDate) {
    const updatedThoughts = [...thoughts];
    updatedThoughts[index].text = newText;
    updatedThoughts[index].date = newDate;
    setThoughts(updatedThoughts);
    localStorage.setItem('thoughts', JSON.stringify(updatedThoughts));
  }

  function handleDelete(index) {
    if (window.confirm('Are you sure you want to delete this thought?')) {
      const updatedThoughts = [...thoughts];
      updatedThoughts.splice(index, 1);
      setThoughts(updatedThoughts);
      localStorage.setItem('thoughts', JSON.stringify(updatedThoughts));
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <p id='date'>Date</p>
        <p>Thoughts of the Day</p>
        <input type="date" value={date} onChange={handleDateChange} />
        <textarea value={text} onChange={handleTextChange} />
        <button type="submit">Add Thought</button>
      </form>
      <h2>Thought</h2>
      {thoughts.map((thought, index) => (
        <div key={index} id='text'>
          <p>{thought.date}</p>
          <p>{thought.text}</p>
          <button onClick={() => handleEdit(index, prompt('Edit Thought', thought.text), prompt('Edit Date', thought.date))}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Thought;
