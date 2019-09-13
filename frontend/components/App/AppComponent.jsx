import React from 'react';
// import { GreetingContainer } from '../Greeting/GreetingContainer';
import { Route } from 'react-router-dom';
// import { LoginFormContainer } from '../Session/LoginFormContainer';
// import { SignupFormContainer } from '../Session/SignupFormContainer';
import { createNewUser, login, logout } from '../../actions/session_actions';
import { AuthRoute } from '../util/route_util';

import LoginModalContainer from '../LoginModal/LoginModalContainer';
import NavBarContainer from '../NavBar/NavBarContainer';
import SideBarContainer from '../SideBar/SideBarContainer';
import MainBarContainer from '../MainBar/MainBarContainer';
import UserDropDownContainer from '../UserDropDown/UserDropDownContainer';

export class AppComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.timeout = null;
    this.toggleUserDrop = this.toggleUserDrop.bind(this);
  }

  toggleUserDrop(e) {
    if (this.props.userDropDownStatus === false || this.props.modalStatus === true) return;
    console.log(e.currentTarget);
    
    this.props.toggleUserDrop(!this.props.userDropDownStatus);
  }

  render() {

    const emptyBar = {
      width: '100%',
      height: '50px',
    }
    const base = {
      color: 'rgb(218, 216, 222)',
      position: 'absolute',
      height: '100%',
      width: '100%'
    }
    const MainDiv = {
      width: '100%',
      height: '100%',
      backgroundColor: "#0f0e11",
      display: 'relative'
    }

    return (
      <div style={base} onClick={this.toggleUserDrop}> 
        {this.props.modalStatus         && <LoginModalContainer /> }
        {this.props.userDropDownStatus  && <UserDropDownContainer />}
        <NavBarContainer />
        <div style={emptyBar}></div>
        <div style={MainDiv}>
          <SideBarContainer />
          <MainBarContainer />
        </div>
      </div>  
    );
  }
};