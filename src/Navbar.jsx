import React,{useState} from "react";
import './Navbar.css';
import hamburgerIcon from './assets/hamburger-icon.png';


const Navbar = () => {
    const[isopen,setIsopen] = useState(false);

    const toggleDropdown = () =>{
        setIsopen(!isopen)
    };


    return ( 
        <div className="navbar">
            <button className="hamburger-button" onClick={toggleDropdown}>
                <img src={hamburgerIcon} alt="Menu" />

            </button>
            {isopen &&(
                <div className="dropdown-menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/ShopPatterns">Shop Patterns</a></li>
                        <li><a href="/ShopItems">Shop Items</a></li>
                    </ul>
                </div>
            )}
        </div>
     );
};
 
export default Navbar;