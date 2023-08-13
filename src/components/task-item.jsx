import React from 'react';

export default class TaskItem extends React.Component {
  render() {
    return (
      <article>
        <h1>Learn React</h1>
        <button>Update</button>
        <button>Delete</button>
      </article>
    );
  }
}
