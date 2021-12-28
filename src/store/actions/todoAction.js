import axios from 'axios';

import {
  MARK_COMPLETE,
  ADD_TODO,
  DELETE_TODO,
  START_EDIT_TODO,
  END_EDIT_TODO,
  SWITCH_FILTER,
  CLEARCOMPLETED,
  GET_TODOS,
} from '../types';

export const getTodos = () => {
  const getTodosAction = async (dispatch) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=4'
      );
      dispatch({
        type: GET_TODOS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return getTodosAction;
};

export const markComplete = (id) => {
  const markCompleteAction = (dispatch) => {
    dispatch({
      type: MARK_COMPLETE,
      payload: id,
    });
  };

  return markCompleteAction;
};

export const addTodo = (newTodo) => {
  const addTodoAction = async (dispatch) => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
      dispatch({
        type: ADD_TODO,
        payload: newTodo,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return addTodoAction;
};

export const deleteTodo = (id) => {
  const deleteTodoAction = async (dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  return deleteTodoAction;
};

export const startEditTodo = (index) => {
  const startEditTodoAction = (dispatch) => {
    dispatch({
      type: START_EDIT_TODO,
      payload: index,
    });
  };
  return startEditTodoAction;
};

export const endEditTodo = (editIndex, newTitle) => {
  const endEditTodoAction = async (dispatch) => {
    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${editIndex}`,
      newTitle
    );
    dispatch({
      type: END_EDIT_TODO,
      payload: newTitle,
    });
  };

  return endEditTodoAction;
};

export const switchFilter = (type) => {
  const switchFilterAction = (dispatch) => {
    dispatch({
      type: SWITCH_FILTER,
      payload: type,
    });
  };
  return switchFilterAction;
};

export const clearCompleted = () => {
  const clearCompleted = (dispatch) => {
    dispatch({
      type: CLEARCOMPLETED,
      payload: null,
    });
  };

  return clearCompleted;
};
