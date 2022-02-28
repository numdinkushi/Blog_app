import "./sidbeBar.css"
import SidebarImage from "../../Assets/images/HeaderImage.jpeg"
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';

const sidebar = () => {
    return (
        <div className="sideBar">
       <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src={SidebarImage} alt="" ></img>
        <p> lorem loremlorem loremlorem loremlorem loremlorem lorem</p>
       </div>
            <div className="sidebarItem" >
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Sport</li>
            <li className="sideBarListItem">Cenema</li>
            <li className="sideBarListItem">Tech</li>

            </ul>
            </div>

            <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sideBarSocial">
        <FaTwitterSquare className="sidebarIcon"  />
        <FaFacebookSquare className="sidebarIcon"  />
        <FaInstagramSquare className="sidebarIcon" />
        <FaPinterestSquare className="sidebarIcon" />
        
        </div>
        <p> lorem loremlorem loremlorem loremlorem loremlorem lorem</p>
       </div>
        </div>
    )
}

export default sidebar
