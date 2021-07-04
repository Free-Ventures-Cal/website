import React from 'react';
import logo from './../assets/free-v-square.png';
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import logofull from './../assets/logo-full.png';


import './../styles/App.css';

class Header extends React.Component {

    constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

    render () {
          return (
              <header className="header">
                <div className="container">
                    <Link exact to="/">
                        <div className="logo">
                            <img src={logofull} alt="free v logo"/>
                        </div>
                    </Link>

                    <div className="nav">
                        <ul>
                            <li><NavLink exact to="/" activeClassName="activeLinkStyle" >home</NavLink></li>
                            <li><NavLink to="/program" activeClassName="activeLinkStyle" >program</NavLink></li>
                            <li><NavLink to="/team" activeClassName="activeLinkStyle" >team</NavLink></li>
                            <li><NavLink to="/portfolio" activeClassName="activeLinkStyle" >portfolio</NavLink></li>
                            <li><NavLink to="/partners" activeClassName="activeLinkStyle" >partners</NavLink></li>
                            <li><NavLink to="/fiatlux" activeClassName="activeLinkStyle" >fiat lux</NavLink></li>
                            <li><NavLink to="/apply" activeClassName="activeLinkStyle" >apply</NavLink></li>
                        </ul>
                    </div>
                    <span className="mobileNav" >
                        <Menu
                            right
                            noOverlay
                            isOpen={this.state.menuOpen}
                            onStateChange={(state) => this.handleStateChange(state)}
                        >
                            <NavLink exact to="/" activeClassName="activeLinkStyle" onClick={() => this.closeMenu()}>home</NavLink>
                            <NavLink to="/program" activeClassName="activeLinkStyle" onClick={() => this.closeMenu()}>program</NavLink>
                            <NavLink to="/team" activeClassName="activeLinkStyle" onClick={() => this.closeMenu()}>team</NavLink>
                            <NavLink to="/portfolio" activeClassName="activeLinkStyle" onClick={() => this.closeMenu()}>portfolio</NavLink>
                            <NavLink to="/partners" activeClassName="activeLinkStyle" onClick={() => this.closeMenu()}>partners</NavLink>
                            <NavLink to="/fiatlux" activeClassName="activeLinkStyle" onClick={() => this.closeMenu()}>fiat lux</NavLink>
                            <NavLink to="/apply" activeClassName="activeLinkStyle" onClick={() => this.closeMenu()}>apply</NavLink>
                        </Menu>
                    </span>

                </div>
              </header>
          );
        }
    }

export default Header;
