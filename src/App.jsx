import { useState } from 'react';
import Title from './components/app/title';
import TaskInput from './components/app/task-input';
import TasksList from './components/app/tasks-list';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // task = { id, name, isDone }

  function handleAddNewTask(newTask) {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function handleUpdateTask(taskId) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        return task.id === taskId
          ? {
              ...task,
              isDone: !task.isDone,
            }
          : task;
      });
    });
  }

  function handleDeleteTask(taskId) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  }

  return (
    <div className='App'>
      <Title />
      <TaskInput onAddNewTask={handleAddNewTask} />
      <TasksList
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
