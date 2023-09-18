import axios from 'axios'
import useData from './useData';

interface Post {
    id: number;
    title: string
}

const usePost = () => useData<Post>('posts')
 
export default usePost;