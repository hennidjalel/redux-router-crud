import usePostDetails from "../hooks/use-post-details"
import Loading from '../components/Loading'


const Details = () => {
    const { isLoading, error, record } = usePostDetails()
    console.log(record?.title)
    return (
        <Loading isLoading={isLoading} error={error}>
            <p>title: {record?.title}</p>
            <p>description: {record?.desc}</p>
        </Loading>
    )
}

export default Details