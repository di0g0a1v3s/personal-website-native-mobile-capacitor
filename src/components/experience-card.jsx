import * as React from 'react';
import { Component } from 'react';

 
class ExperienceCard extends Component {
  
    render() { 
        return(

    <div className={(this.props.experience.id % 2 === 0 ? 'animation-move-from-left' : 'animation-move-from-right') + " position-relative me-4 my-5 pb-5"}>
        
        <div className="shadow" id="circle-corner"></div>
        <img src={this.props.experience.logo} className="corner-image" alt="Company Logo"/>
         
        <div className="shadow card bg-light border-dark">
          <div className="card-body pe-5">
            <h2 className="card-title">{this.props.experience.company}</h2>
            <h3 className="card-subtitle mb-2 text-muted">{this.props.experience.location}</h3>
            <h2 className="card-title">{this.props.experience.job}</h2>
            <span className="card-text">{this.props.experience.description}</span>
            <span className="card-text badge text-bg-dark">{this.props.experience.date}</span>
            
          </div>
        </div>
      </div>  
    );}
}

export default ExperienceCard;