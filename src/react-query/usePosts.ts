import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

interface Post {
    id: number;
    title: string
}

// const usePost = () => useData<Post>('posts')

const usePost = (userId: number | undefined) => useQuery<Post[], Error>({
    queryKey: userId ? ['users', userId ,'posts'] : ['posts'],
    queryFn: () => axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.data),
    staleTime: 1 * 60 * 1000
})
 
export default usePost;