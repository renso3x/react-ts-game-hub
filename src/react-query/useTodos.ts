import { Todo } from './PostList'
import useData from './useData';

const useTodos = () => useData<Todo>('todos')
 
export default useTodos;