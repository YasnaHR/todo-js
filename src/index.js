import './styles.css';
import{Todo,TodoList} from './clases';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);