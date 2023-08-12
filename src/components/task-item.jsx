export default function TaskItem(props) {
  return (
    <article className='task-item'>
      <div className='title'>
        <p>{props.task.name}</p>
      </div>
    </article>
  );
}
