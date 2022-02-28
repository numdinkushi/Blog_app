import "./SinglePost.css"
import postImage1 from "../../Assets/images/IMG_20210119_171102_3.jpg"
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const SinglePost = () => {
    return (
        <div className="singlePost">
           <div className="singlePostWrapper">
           <img className="postImg singlePostImg" alt="" src = {postImage1} />
           <h1 className="singlePostTitle">I love this project
            <div className="singlePostEdit"> <FaEdit className="singlePostIcon" /> 
                                            <FaTrashAlt className="singlePostIcon"/></div>
           </h1>
          <div className="singlePageInfo">
              <span className="singlePostAuthor">Author: <b>Layefa</b></span>
              <span className="singlePostDate">1 hour ago </span>
          </div>
          <p className="singlePostDescription"> I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont.
          I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. 
          I wish i had my own lorem but i dontI wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont.
          I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. 
          I wish i had my own lorem but i dontI wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont.
          I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. 
          I wish i had my own lorem but i dontI wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont.
          I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. 
          I wish i had my own lorem but i dontI wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont.
          I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. 
          I wish i had my own lorem but i dontI wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont.
          I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. 
          I wish i had my own lorem but i dontI wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont.
          I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. I wish i had my own lorem but i dont. 
          I wish i had my own lorem but i dont. I wish i had my own lorem but i dont.</p>
           </div>
        </div>
    )
}

export default SinglePost
