import React from 'react'

function Image(props) {
    return (
        <div>
             <img  src={props.profilepic}  className="img-fluid float-left m-2 profileImage"
                alt="Madhavi's pic" width={props.width}/>
        </div>
    )
}

export default Image
