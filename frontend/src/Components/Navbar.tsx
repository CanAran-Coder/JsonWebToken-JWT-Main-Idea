import {Link} from "react-router-dom";


function Navbar() {
    return ( 

        <>
            <div className="navbarContainer">
                <div className="navbarSpace">
                    
                </div>
                <div className="navbarTitle">
                    <h1 className="porsche-like">Porsche</h1>
                </div>
                <div className="navbarAuth">
                    <Link className="authLink" to={"/login"}>Auth</Link>
                </div>

            </div>
        </>
     );
}

export default Navbar;