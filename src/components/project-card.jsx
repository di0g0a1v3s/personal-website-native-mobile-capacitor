import * as React from 'react';
import { Component } from 'react';

 
class ProjectCard extends Component {
  
    render() { 
        return(
        <div className="animation-fade-in  col-lg-4 d-flex align-items-stretch">
          <div className="shadow card bg-light border-dark my-3">
          <img src={this.props.project.image} loading="lazy" className=" bd-placeholder-img card-img-top p-1" alt="Project" width="100%"></img>

          <div className="card-body">
            <h2 className="card-title">{this.props.project.title}</h2>
            <p className="card-text">{this.props.project.description}</p>
          </div>

          <div className="d-grid gap-2 col-2 offset-5 justify-content-center p-2">
              <a href={this.props.project.link} className="btn btn-outline-dark btn-lg btn-block rounded-circle" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
            </div>
        </div>
        </div>
    );}
}

export default ProjectCard;