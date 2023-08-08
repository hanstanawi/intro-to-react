export default function CourseContent() {
  const courseName = 'React';

  return (
    <section>
      <h1>Intro to {courseName}</h1>
      <ul className='content-list'>
        <li className='content-item'>What is React?</li>
        <li>Why learn React?</li>
        <li>Introduction to JSX</li>
      </ul>
    </section>
  );
}
