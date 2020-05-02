import React from 'react'

function ContactDetails(props) {
    return (
    <p className=" h4 pl-3 text-white">{props.label}<span className="h5 pl-3 font-weight-light">{props.value}</span></p>
    )
}

export default ContactDetails
