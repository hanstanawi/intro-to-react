import { useState } from 'react';

function generateRandomId(limit = 5000) {
  return Math.floor(Math.random() * limit);
}

export default function TaskInput(props) {
  const [taskInput, setTaskInput] = useState('');

  function handleInputChange(event) {
    setTaskInput(event.target.value);
  }

  function handleSubmitTask(event) {
    event.preventDefault();

    if (taskInput !== '') {
      const newTask = {
        id: generateRandomId(),
        name: taskInput,
        isDone: false,
      };

      props.onAddNewTask(newTask);
    }
  }

  return (
    <form onSubmit={handleSubmitTask}>
      <input type='text' value={taskInput} onChange={handleInputChange} />
      <button type='submit'>Add New Task</button>
    </form>
  );
}
