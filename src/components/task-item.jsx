export default function TaskItem(props) {
  return (
    <article className={`task-item ${props.task.isDone ? 'completed' : ''}`}>
      <div className='title'>
        <p>{props.task.name}</p>
      </div>
      <button
        className='complete-btn'
        onClick={() => props.onUpdateTask(props.task.id)}
      >
        {props.task.isDone ? 'Incomplete' : 'Complete'}
      </button>
      <button
        className='delete-btn'
        onClick={() => props.onDeleteTask(props.task.id)}
      >
        Delete
      </button>
    </article>
  );
}
