import { FaUserCircle } from "react-icons/fa"
import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
              <div className="settingsTitle" >
                  <span className="settingsUpdateTitle"> Update Your Account</span>
                  <span className="settingsDeleteTitle"> Delete Account</span>
              </div>
              <form className="settingsForm">
                  <label>Profile Picture</label>
                  <div className="settingsPP">

                      <img alt="" className="" src="https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg" ></img>
                    <label htmlFor="fileInput" >
                        <FaUserCircle className="settingsPPIcon" />
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />

                  </div>

                  
                  <label>Uername</label>
                    <input type="text" placeholder="Kushi" />
               
                    <label>Email</label>
                    <input type="email" placeholder="numdinnkushi@gmail.com" />
               
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit" >Update</button>
              </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
