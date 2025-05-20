import React, { useState } from 'react';

const Test: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple To-Do</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
 
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // using index since no id here
        ))}
      </ul>
    </div>
  );
};

export default Test;
