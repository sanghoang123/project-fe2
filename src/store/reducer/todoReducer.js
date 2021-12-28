import {
  ADD_TODO,
  CLEARCOMPLETED,
  DELETE_TODO,
  END_EDIT_TODO,
  GET_TODOS,
  MARK_COMPLETE,
  START_EDIT_TODO,
  SWITCH_FILTER,
} from '../types.js';

const initialState = {
  todos: [],
  filter: 'all',
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex: null,
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) todo.completed = !todo.completed;
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case START_EDIT_TODO:
      return {
        ...state,
        editIndex: payload,
      };
    case END_EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (state.editIndex !== null) {
            if (payload) {
              state.todos[state.editIndex].title = payload;
            }
          }
          return todo;
        }),
        editIndex: null,
      };
    case SWITCH_FILTER:
      return {
        ...state,
        filter: payload,
      };
    case CLEARCOMPLETED:
      return {
        ...state,
        todos: state.todos.filter(state.filters.active),
      };
    default:
      return state;
  }
};

export default todoReducer;
