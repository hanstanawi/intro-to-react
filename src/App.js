import { useState } from 'react';
import Title from './components/title';
import TaskInput from './components/task-input';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // task = { id, name, isDone }

  function handleAddNewTask(newTask) {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  console.log(tasks);

  return (
    <div className='App'>
      <Title />
      <TaskInput onAddNewTask={handleAddNewTask} />
    </div>
  );
}

export default App;
