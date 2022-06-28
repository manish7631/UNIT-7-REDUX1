import * as types from "./actionTypes";
const getTodoListsRequest = () => {
  return { type: types.GET_TODO_LISTS_REQUEST };
};
const getTodoListsSuccess = (payload) => {
  return { type: types.GET_TODO_LISTS_SUCCESS, payload };
};
const getTodoListsFailure = () => {
  return { type: types.GET_TODO_LISTS_FAILURE };
};
const addTodoRequest = () => {
  return { type: types.ADD_TODO_REQUEST };
};
const addTodoSuccess = (payload) => {
  return { type: types.ADD_TODO_SUCCESS, payload };
};
const addTodoFailure = (error) => {
  return { type: types.ADD_TODO_FAILURE, payload: error };
};
const toggleTodoRequest = () => {
  return { type: types.TOGGLE_TODO_REQUEST };
};
const toggleTodoSuccess = (payload) => {
  return { type: types.TOGGLE_TODO_SUCCESS, payload };
};
const toggleTodoFailure = (error) => {
  return { type: types.TOGGLE_TODO_FAILURE, payload: error };
};

const removeTodoRequest = () => {
    return { type: types.REMOVE_TODO_REQUEST };
  };
  const removeTodoSuccess = (payload) => {
    return { type: types.REMOVE_TODO_SUCCESS, payload };
  };
  const removeTodoFailure = (error) => {
    return { type: types.REMOVE_TODO_FAILURE, payload: error };
  };
export {
  getTodoListsFailure,
  getTodoListsRequest,
  getTodoListsSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess
};