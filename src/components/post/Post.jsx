import "./post.css"
import postImage1 from "../../Assets/images/IMG_20210119_171102_3.jpg"

const post = () => {
    return (
        <div className="post">
           <img className="postImg" alt="" src = {postImage1} />
            <div className="postInfo">
                <div className="postCats" >
                    <span className="postCat" > Music</span>
                    <span className="postCat" > Life</span>
                </div>
                <span className="postTitle">Lorem LoreLorem LoreLorem Lore</span>
                <br />
                <span className="postDate" >1 hour ago</span>
            </div>
            <p className="postDescription"> you know i dont have lorem 
            to use for noyou know i dont have 
            lorem to use for noyou know i dont 
            have lorem to use for nowyou know i dont have lorem to use for noyou know i dont have lorem to use for noyou know i dont have lorem to use for nowyou know i dont have lorem to use for noyou know i dont have lorem to use for noyou know i dont have lorem to use for now</p>
        </div>
    )
}

export default post
