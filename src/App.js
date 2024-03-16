// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskComplete={toggleTaskComplete} />
    </div>
  );
}

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask({ name: taskName, completed: false });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add new task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

function TaskList({ tasks, deleteTask, toggleTaskComplete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <span onClick={() => toggleTaskComplete(index)}>{task.name}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default App;
