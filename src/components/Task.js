import React, { useState, useEffect } from 'react';
import '../css/Task.css';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!text) {
      alert('Please enter a task.');
      return;
    }
    const newTask = { text, date, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setText('');
    setDate('');
  }

  function handleToggle(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function handleDelete(index) {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <p>Date</p>
        <input type="date" value={date} onChange={handleDateChange} />
        <p>Add Task</p>
        <input type="text" value={text} onChange={handleTextChange} />
        <button type="submit">Add</button>
      </form>
      <h2>Tasks</h2>
      {tasks.map((task, index) => (
        <div key={index} className={`task ${task.completed ? 'completed' : ''}`}>
          <p>{task.date}</p>
          <p>{task.text}</p>
          <button onClick={() => handleToggle(index)}>{task.completed ? 'Uncomplete' : 'Complete'}</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Task;
