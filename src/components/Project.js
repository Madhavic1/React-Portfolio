import React from 'react'

function Project(props) {
    return (
        <div className="card bg-secondary text-center p-0 border-warning" style={{ width: "14rem" }}>
            <img className="card-img-top m-0" src={props.image} alt="Card  cap" style={{ width: "222px", height: "200px" }} />
            <div className="card-body p-0 mb-0">
                <h5 className="card-title text-warning border-bottom border-dark p-0 mb-0">{props.title}</h5>
                <div className="icons justify-content-center d-flex  mt-0 p-0">
                    <div>
                        <a href={props.gitHub} target="_blank" rel="noopener noreferrer" title="Github Repository">
                            <i className="fab fa-github " style={{ color: "black" }}></i>
                        </a>
                    </div>
                    <div>
                        <a href={props.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                            <i className="fa fa-eye" style={{ color: "black" }}></i>
                        </a>
                    </div>
                    <div>
                        <a href={props.screenshot} target="_blank" rel="noopener noreferrer" title="Screen Shot">
                            <i className="fa fa-camera" aria-hidden="true" style={{ color: "black" }}></i>
                        </a>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default Project
