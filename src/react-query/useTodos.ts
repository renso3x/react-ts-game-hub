import axios from 'axios'
import { useQuery} from '@tanstack/react-query'
import { Todo } from './TodoList'

const useTodos = () => {
    const  fetchData = () => 
        axios
            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.data)

    const {data: todos, error }  = useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchData,
        staleTime: 10 * 1000
    })
    return { todos, error }
}
 
export default useTodos;