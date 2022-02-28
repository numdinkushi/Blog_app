import "./single.css"
import Sidebar from '../../sidebar/Sidebar'
import SinglePost from './../../singlePost/SinglePost';

const single = () => {
    return (
        <div className="single">
            <SinglePost /> 
            
            <Sidebar />
        </div>
    )
}

export default single
