import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return(
        <div className="navbarInfo">
            <div className="links">
            <Link to='/'>Start Over</Link>
            <Link to='/About'> About</Link>
        </div>
        </div>
    )
      
}
export default Navbar;