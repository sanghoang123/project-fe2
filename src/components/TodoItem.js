import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getTodos,
  markComplete,
  deleteTodo,
  startEditTodo,
  endEditTodo,
} from '../store/actions/todoAction';

function TodoItem(props) {
  const {
    todos,
    editIndex,
    filter,
    filters,
    markComplete,
    deleteTodo,
    startEditTodo,
    endEditTodo,
    getTodos,
  } = props;

  const handleUpdateTodo = (e) => {
    endEditTodo(editIndex, e.target.value);
  };

  useEffect(() => {
    getTodos(todos);
  }, []);

  return (
    <Fragment>
      {todos.filter(filters[filter]).map((todo, index) => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''} ${
            editIndex === index ? 'editing' : ''
          }`}
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={markComplete.bind(this, todo.id)}
            />
            <label onDoubleClick={startEditTodo.bind(this, index)}>
              {todo.title}
            </label>
            <button
              className="destroy"
              onClick={deleteTodo.bind(this, todo.id)}
            ></button>
          </div>
          <input
            className="edit"
            defaultValue={todo.title}
            onBlur={handleUpdateTodo}
          />
        </li>
      ))}
    </Fragment>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  editIndex: PropTypes.number,
  filter: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  startEditTodo: PropTypes.func.isRequired,
  endEditTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
  editIndex: state.myTodos.editIndex,
  filter: state.myTodos.filter,
  filters: state.myTodos.filters,
});

export default connect(mapStateToProps, {
  markComplete,
  deleteTodo,
  startEditTodo,
  endEditTodo,
  getTodos,
})(TodoItem);
