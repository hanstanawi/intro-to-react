import { useState } from 'react';

export default function TaskInput(props) {
  const [taskInput, setTaskInput] = useState('');

  function handleSubmitTask(event) {
    event.preventDefault();

    if (taskInput !== '') {
      props.onAddNewTask(taskInput);
    }
  }

  return (
    <form onSubmit={handleSubmitTask}>
      <input
        type='text'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type='submit'>Add New Task</button>
    </form>
  );
}
