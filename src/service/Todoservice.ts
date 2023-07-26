import todoStore from '../store/TodoStore';
import TodoServiceImpl from './TodoServiceImpl';

const todoService = new TodoServiceImpl(todoStore);

export default todoService;
