import * as React from 'react';
import { Component } from 'react';
import NavBarButton from './navbar-button'
import { Link } from "react-router-dom";
 
class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {navBarShowing: true, last_scroll_top: 0}
  }

  componentDidMount()
  {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount()
  {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) =>
  {
    let scroll_top = window.scrollY;
    if(scroll_top < this.state.last_scroll_top) {
      this.setState({navBarShowing: true})
    }
    else {
      this.setState({navBarShowing: false})
    }
    this.setState({last_scroll_top : scroll_top});
  }
  
  render() { 

        return (
<nav className={(this.state.navBarShowing ? 'scrolled-up' : 'scrolled-down') + " navbar smart-scroll navbar-expand-lg navbar-dark bg-dark bg-gradient p-0"}>
  <div className="container-fluid px-2">
    <div className="navbar-brand px-2 ">
      
      <Link to="/" className="nav-link text-white d-flex flex-wrap align-items-center">
        <svg className="mx-4" height="50px" width="50px">
          <use href="#site-logo"/>
        </svg>
        
          <h4 className="my-2">{this.props.title}</h4>
      </Link>
      
    </div>
    <button
      className="navbar-toggler me-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="flex-wrap flex-column align-content-end navbar-collapse collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-lg-0">
        {this.props.menus.map(menu => <li key={menu.id} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className="nav-item active text-center"><NavBarButton key={menu.id} menu={menu}/></li>)}
      </ul>
    </div>
  </div>
</nav>

         





        );
    }
}
 
export default NavBar;


