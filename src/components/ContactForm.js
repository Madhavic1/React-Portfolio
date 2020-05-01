import React from 'react'

function ContactForm() {
    return (
        <form id="contactform" action="//formspree.io/madhavi.0108@gmail.com" method="POST" className="ml-0" >
        <div className="col-sm-7 slideanim">
          <div className="row">
            <div className="col-sm-6 form-group">
              <input className="form-control" id="name" name="name" placeholder="Your name" type="text" required />
            </div>
            <div className="col-sm-6 form-group">
              <input className="form-control" id="email" name="_replyto" placeholder="Your email" type="email" required />
            </div>
          </div>
          <textarea className="form-control" id="comments" name="message" placeholder="Message" rows="5"></textarea><br/>
          <div className="row">
            <div className="col-sm-12 form-group">
              <button className="btn btn-warning pull-right" type="submit">Send Email</button>
            </div>
          </div>
        </div>
        <input type="hidden" name="_next" value="//peek.solutions/confirmation.html" />
        <input type="text" name="_gotcha" style={{display:"none"}} />   
        </form>
    )
}

export default ContactForm
