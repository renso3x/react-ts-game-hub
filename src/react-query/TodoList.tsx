import useTodos from "./useTodos";

export interface Todo {
    id: number;
    title: string
}
const TodoList = () => {
    const {todos, error} = useTodos()
    if (error) return (<p>{error.message}</p>)

    return (
        <ul className="list-group">
            {todos?.map(todo => (
                <li className="list-group-item" key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}
 
export default TodoList;