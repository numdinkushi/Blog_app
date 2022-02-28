import "./Topbar.css"
import {FaFacebookSquare} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"
import {FaPinterestSquare} from "react-icons/fa"
import topImage from "../../Assets/images/spicy.jpeg"
import { Link } from "react-router-dom"

const Topbar = () => {
    const user = false;
    return (
        <div className="top">
    
        <div className="topLeft"> 
        <FaTwitterSquare className="topIcon"  />
        <FaFacebookSquare className="topIcon"  />
        <FaInstagramSquare className="topIcon" />
        <FaPinterestSquare className="topIcon" />
        
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                <Link to="/" className="link"> HOME </Link>
                 </li>
                <li className="topListItem"> <Link to="/" className="link"> ABOUT </Link></li>
                <li className="topListItem"> <Link to="/" className="link"> CONTACT </Link></li>
                <li className="topListItem"> <Link to="/write" className="link"> WRITE </Link> </li>
                <li className="topListItem"> <Link to="/" className="link"> 
                {user && "LOGOUT"}
                </Link> </li>
                
            </ul>
        </div>
        <div className="topRight">
        {
            user ? (

           <img  className = "topImg" src={topImage} />
            ) : (
                    <ul className="topList">
                    <li className="topListItem">
                <Link to="/login" className="link"> LOGIN </Link>  
                <Link to="/register" className="link"> REGISTER </Link>    
                    </li>

                    </ul>
            )

            
        }
           <FaSearch className="topSearchIcon" /> 
        </div> 
       
        </div>
    )
}

export default Topbar
