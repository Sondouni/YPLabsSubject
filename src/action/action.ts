export enum TodoActionType {
  GET_TODOLIST = 'GET_TODOLIST',
  GET_TODOLIST_SUCCESS = 'GET_TODOLIST_SUCCESS',
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  DEL_TODO = 'DEL_TODO',
}

export const getTodoList = (page: number) => ({
  type: TodoActionType.GET_TODOLIST,
  payload: {page},
});

export const addTodo = ({content,page} : {content:string,page:number}) => ({
  type: TodoActionType.ADD_TODO,
  payload: {content,page},
});

export const editTodo = ({content,id,page} : {content:string,id:number,page:number}) => ({
  type: TodoActionType.EDIT_TODO,
  payload: {content,id,page},
});

export const delTodo = (id:number,page:number) => ({
  type: TodoActionType.DEL_TODO,
  payload: {id,page},
});
