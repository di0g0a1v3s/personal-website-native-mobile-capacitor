import * as React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";

class NavBarButton extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return ( 
          <Link to={this.props.menu.href} className="nav-link text-white">

              <div className={(this.props.menu.selected ? 'active ' : '') + "px-5 nav-bar-button btn btn-outline-light btn-sm btn-block rounded-pill"}>
              <strong>{this.props.menu.icon} {this.props.menu.name}</strong>
              </div>
            </Link>
            
            );
    }
}
 
export default NavBarButton ;