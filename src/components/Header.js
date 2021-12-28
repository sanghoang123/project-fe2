import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/todoAction';
import { v4 as uuidv4 } from 'uuid';

function Header(props) {
  const { addTodo } = props;

  const [title, setTitle] = useState('');

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.keyCode === 13 && title.trim() !== '') {
      const newTodo = { id: uuidv4(), title: title.trim(), completed: false };
      addTodo(newTodo);
      setTitle('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={titleChange}
        onKeyUp={handleAddTodo}
      />
    </header>
  );
}

Header.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { addTodo })(Header);
