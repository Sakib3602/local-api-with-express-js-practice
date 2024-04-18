
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>Phone Name : {data.name}</h1>
        </div>
    );
};

export default Details;