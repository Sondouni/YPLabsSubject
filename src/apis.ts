import axios from 'axios';

const url = 'http://3.35.194.197:8000';

export const apiGetTodoList = async () => {
  const response = await axios
    .get(`${url}/todo/`, {});
  return response.data;
};

export const apiPostTodo = async (content: string) => {
  const response = await axios
    .post(`${url}/todo/`, {content});
  return response.data;
};

export const apiPatchTodo = async ({content,id}:{content:string,id:number}) => {
  const response = await axios.patch(`${url}/todo/${id}/`, {content});
  return response.data;
};

export const apiDelTodo = async (id:number) => {
  const response = await axios.delete(`${url}/todo/${id}/`);
  return response.data;
};
