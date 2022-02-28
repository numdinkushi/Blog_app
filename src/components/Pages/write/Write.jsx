import "./Write.css"
import {FaFolderPlus} from "react-icons/fa"

const Write = () => {
    return (
        <div className="write">
        <img className="writeImage" src="https://cdn.pixabay.com/photo/2016/10/06/05/19/couple-1718244_960_720.jpg" alt=" fresh" />
         <form className="writeForm"> 
        <div className="writeFormGroup">
         <label htmlFor="fileInput" > <FaFolderPlus className="writeIcon" /></label>
        <input type="file" id="fileInput" style={{display:"none"}} className="" />
            <input type="text" placeholder="title" className="writeInput"  autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea
             placeholder="Tell your Story..."
              type="text" 
            className="writeInput writeText" ></textarea>
        </div>
        <button className="writeSubmit" >Publish</button>
         </form>
        </div>
    )
}

export default Write
