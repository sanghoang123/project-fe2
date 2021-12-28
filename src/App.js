import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { getTodos } from './store/actions/todoAction';

function App(props) {
  const { todos, getTodos } = props;

  const todosLength = todos.length;

  useEffect(() => {
    getTodos(todos);
  }, []);

  return (
    <section className="todoapp">
      <Header />
      {todosLength > 0 && <TodoList />}
      {todosLength > 0 && <Footer />}
    </section>
  );
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { getTodos })(App);
