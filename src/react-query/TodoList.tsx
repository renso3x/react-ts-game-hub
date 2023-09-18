import usePost from "./usePosts";
import useTodos from "./useTodos";

export interface Todo {
    id: number;
    title: string
}
const TodoList = () => {
    // const { data, error} = useTodos()
    const {data, error} = usePost()
    if (error) return (<p>{error.message}</p>)

    return (
        <ul className="list-group">
            {data?.map(todo => (
                <li className="list-group-item" key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}
 
export default TodoList;