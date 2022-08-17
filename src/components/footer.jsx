import * as React from 'react';
import { Component } from 'react';
 
class Footer extends Component {
  
    render() { 

        return (
<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-12 d-flex align-items-center">
    <ul className="nav col-10 col-md-4 offset-md-4 justify-content-start justify-content-md-center list-unstyled d-flex">
        {this.props.socialMedia.map(socialmedia => <li key={socialmedia.id} className="mx-4"><a key={socialmedia.id} target="_blank" rel="noreferrer" className="text-muted" title={socialmedia.name} href={socialmedia.href}>{socialmedia.icon}</a></li>)}

    </ul>
    <div className="col-2 col-md-4 d-flex justify-content-end">
    <a type="button" className="shadow btn btn-outline-dark me-2" href="assets/Resume.pdf" download="Resume.pdf"><i className="bi bi-paperclip me-2"></i>Download CV</a>
    </div>
    </div>

    
  </footer>
        );
    }
}
 
export default Footer;