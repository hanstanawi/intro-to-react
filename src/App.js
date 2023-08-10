import { useState } from 'react';
import Title from './components/title';
import TaskInput from './components/task-input';

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddNewTask(newTask) {
    setTasks((currenTasks) => [...currenTasks, newTask]);
  }

  return (
    <div className='App'>
      <Title />
      <TaskInput onAddTask={handleAddNewTask} />
    </div>
  );
}

export default App;
