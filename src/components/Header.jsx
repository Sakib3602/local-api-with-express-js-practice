import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-[30px] space-x-8">
            <Link to={"/phone"}>Phone</Link>
            
            
        </div>
    );
};

export default Header;