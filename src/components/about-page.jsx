import * as React from 'react';
import { Component } from 'react';

 
class AboutPage extends Component {



    componentDidMount()
    {
        this.props.onPageChange(this.props.menu);
    }
  
    render() { 
        return(
<div className="row mx-1 my-5">
    <div className='row col-10 offset-1 col-sm-8 offset-sm-2 flex-wrap align-items-center'>
        <div className='col-12 col-md-6 align-self-start'>
            <img className="img-fluid" src={this.props.aboutAnimation} alt="Welcome Animation"></img>
        </div>
        <div className="shadow card bg-light bg-gradient border-dark col-12 col-md-6">
            <div className="card-body p-0">
                    {this.props.aboutPagePhrases.map(phrase => <div key={phrase.id}  className="animation-move-from-bottom shadow card bg-white border-dark my-3"><h4 key={phrase.id} className="p-2 ms-3 mb-1 rounded-3">{phrase.text}</h4></div>)}
            </div>
            </div>
    </div>
</div>

    );}
}

export default AboutPage;