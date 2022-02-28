import Header from "../../Header/Header"
import Post from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import "./Home.css"

export const Homepage = () => {
    return (
        <>

            <Header />
        <div className="home">
           <Post />
            <Sidebar />
            
            </div>

        </>
    )
}
