import React from 'react'

function Project(props) {
    return (
        <div className="card bg-secondary text-center p-2" style={{ width: "15rem" }}>
            <img className="card-img-top m-0" src={props.image} alt="Card  cap" style={{ width: "222px", height: "200px" }} />
            <div className="card-body p-1">
                <h5 className="card-title m-0">{props.title}</h5>
                <div className="d-flex justify-content-around bg-warning p-0">
                    <div>
                        <a href={props.gitHub} title="Github">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                    <div>
                        <a href={props.liveUrl} title="Live Demo">
                            <i className="fa fa-eye" style={{ color: "black" }}></i>
                        </a>
                    </div>
                    <div>
                        <a href={props.screenshot} title="Screen Shot">
                            <i className="fa fa-camera" aria-hidden="true"></i>
                        </a>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default Project
