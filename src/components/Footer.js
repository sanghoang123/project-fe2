import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchFilter, clearCompleted } from '../store/actions/todoAction';

function Footer(props) {
  const { todos, filter, filters, switchFilter, clearCompleted } = props;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter(filters.active).length}</strong> item left
      </span>
      <ul className="filters">
        {Object.keys(filters).map((type) => (
          <li key={type}>
            <a
              className={`${filter === type ? 'selected' : ''}`}
              href="#/"
              onClick={switchFilter.bind(this, `${type}`)}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      {todos.filter(filters.completed).length > 0 ? (
        <button className="clear-completed" onClick={clearCompleted.bind(this)}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
}

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  switchFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
  filter: state.myTodos.filter,
  filters: state.myTodos.filters,
});

export default connect(mapStateToProps, { switchFilter, clearCompleted })(
  Footer
);
