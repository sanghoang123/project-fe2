import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <TodoItem />
      </ul>
    </section>
  );
}

export default TodoList;
