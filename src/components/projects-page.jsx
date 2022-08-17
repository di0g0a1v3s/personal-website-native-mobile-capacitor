import * as React from 'react';
import { Component } from 'react';
import ProjectCard from './project-card';

 
class ProjectsPage extends Component {
   

    componentDidMount()
    {
        this.props.onPageChange(this.props.menu);
    }
    render() { 
        return(
<div className="row">
    <div className='col-10 offset-1 col-sm-8 offset-sm-2 flex-wrap align-items-center'>
        <div className="mt-4 mb-3">
            <h1 className="title-format">Projects</h1>
        </div>
        <div>
            <h3>Here you can find a collection of projects that I've developed, some as personal projects, others as part of my academic path. </h3>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {this.props.projects.map(project =>  <ProjectCard key={project.id} project={project}/>)}
        </div>
    </div>
</div>
    );}
}

export default ProjectsPage;