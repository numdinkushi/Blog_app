import "./Header.css"
import headerImage from "../../Assets/images/header2.jpg"


const Header = () => {
    return (
        <div className="header">
          <div className="headerTitle">
            <span className="headerTitleSmall">Kushi Numdin E. </span>
            <span className="headerTitlelarge">Blog </span>
           </div>
           <img  className = "headerImage" src="https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg" />
           {/* <div className = "headerImage"></div> */}

        </div>
    )
}

export default Header
