import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

interface Post {
    id: number;
    title: string
}

// const usePost = () => useData<Post>('posts')
interface PostQuery {
    page: number;
    pageSize: number;
    userId?: number
} 

const usePost = (query: PostQuery) => useQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: () => axios
            .get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    _start: (query.page - 1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
            .then(res => res.data),
    staleTime: 1 * 60 * 1000
})
 
export default usePost;