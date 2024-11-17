import {TodoActionType} from '../action/action.ts';

const initialState = {
  todoList: [],
  isLast: false,
};

const todoReducer = (
  state = initialState,
  action: {type: TodoActionType; payload: any},
) => {
  switch (action.type) {
    case TodoActionType.GET_TODOLIST_SUCCESS:
      return {
        ...state,
        todoList: action.payload.todoList,
        isLast: action.payload.isLast,
      };
    default:
      return {...state};
  }
};

export default todoReducer;
