import axios from 'axios'
import { useQuery} from '@tanstack/react-query'

const useData = <T>(endpoint: string) => {
    const  fetchData = () => 
        axios
            .get<T[]>(`https://jsonplaceholder.typicode.com/${endpoint}`)
            .then(res => res.data)

    const { data , error }  = useQuery<T[], Error>({
        queryKey: [endpoint],
        queryFn: fetchData,
        staleTime: 10 * 1000
    })
    return { data, error }
}
 
export default useData;