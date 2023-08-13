import TaskItem from './task-item';

export default function TasksList(props) {
  const sortedTasks = props.tasks.sort((a, b) => {
    return a.isDone === b.isDone ? 0 : b.isDone ? -1 : 1;
  });

  return (
    <ul className='tasks-list'>
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={props.onUpdateTask}
          onDeleteTask={props.onDeleteTask}
        />
      ))}
    </ul>
  );
}
