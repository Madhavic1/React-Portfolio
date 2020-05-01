import React from 'react'

function ContactDetails(props) {
    return (
    <p className=" h4 pl-3">{props.label}<span className="h5 pl-3">{props.value}</span></p>
    )
}

export default ContactDetails
