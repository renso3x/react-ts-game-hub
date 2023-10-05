import { useState } from "react";
import usePost from "./usePosts";

export interface Todo {
    id: number;
    title: string
}
const PostList = () => {
    const [userId, setUserId] = useState<number>()
    const {data, error, isLoading} = usePost(userId)
    
    if (isLoading) return (<p>Loading</p>)
    if (error) return (<p>{error.message}</p>)

    return (
        <>
            <select 
                className="form-select mb-3"
                onChange={(event) => setUserId(parseInt(event.target.value))}
                value={userId}
            >
                <option value=""></option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select>
            <ul className="list-group">
                {data?.map(todo => (
                    <li className="list-group-item" key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    );
}
 
export default PostList;