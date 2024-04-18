import { Link, useLoaderData } from "react-router-dom";


const Phone = () => {
    const data = useLoaderData()

    console.log(data)
    
    return (
        <div>

           
            
            {
                data.map(p => <Link key={p.id} to={`/phone/${p.id}`}><li >{p.name}</li></Link>)
            }
            
        </div>
    );
};

export default Phone;