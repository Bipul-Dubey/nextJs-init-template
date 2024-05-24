import { fetchTodo, fetchTodoById } from "../api/app";
import { toggleSidebar } from "../slices/app";
import { store } from "../store";

export const handleToggleSidebar = () => {
  return store.dispatch(toggleSidebar());
};

export const handleGetTodoData = () => {
  return store.dispatch(fetchTodo());
};

export const handleGetTodoDataById = (id) => {
  return store.dispatch(fetchTodoById(id));
};
