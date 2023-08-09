import { useState } from 'react';

export default function TaskInput() {
  const [taskInput, setTaskInput] = useState('');

  return (
    <form>
      <input
        type='text'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type='submit'>Add New Task</button>
    </form>
  );
}
