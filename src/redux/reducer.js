import * as types from "./actionTypes" 

let initialState = {
     todos: [], isLoading: false, isError: false
  };
  const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.GET_TODO_LISTS_REQUEST:
        return {
            ...state,
            isLoading: true,
            isError: false,
          };
      case types.GET_TODO_LISTS_SUCCESS:
        // payload itself is an object so we  have to spread it also along with the todos
        return {
            ...state,
            todos:payload,
            isLoading: false,
            isError: false,
          };
      case types.GET_TODO_LISTS_FAILURE:
        return {
            ...state,
            isLoading: false,
            isError: true,
          };
      case types.ADD_TODO_REQUEST:
        return {
            ...state,
            isLoading: true,
            isError: false,
          };
      case types.ADD_TODO_SUCCESS:
        let newTodos = [...state.todos, payload];
      return {
        ...state,
        todos: newTodos,
        isLoading: false,
        isError: false,
      };
      case types.ADD_TODO_FAILURE:
        return {
            ...state,
            isLoading: false,
            isError: true,
          };
        case types.TOGGLE_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
              };
          case types.TOGGLE_TODO_SUCCESS:{
            let newToggledTodos=state.todos.map((item)=>item.id===payload.id?payload:item)
            return {
                ...state,
                todos: newToggledTodos,
                isLoading: false,
                isError: false,
              };
        }
          case types.TOGGLE_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
              };
              case types.REMOVE_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
              };
          case types.REMOVE_TODO_SUCCESS:{
           const leftTodos=state.todos.filter((item)=>item.id!==payload)
            return {
                ...state,
                todos:leftTodos,
                isLoading: false,
                isError: false,
              };
        }
          case types.REMOVE_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
              };
      default:
        return state;
    }
  };
  
  export default reducer;