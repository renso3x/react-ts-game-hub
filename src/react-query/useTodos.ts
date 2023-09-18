import { Todo } from './TodoList'
import useData from './useData';

const useTodos = () => useData<Todo>('todos')
 
export default useTodos;