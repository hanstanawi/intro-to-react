import TaskItem from './task-item';

export default function TasksList(props) {
  return (
    <ul className='tasks-list'>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
