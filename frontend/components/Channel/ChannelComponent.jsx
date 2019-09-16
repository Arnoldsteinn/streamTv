import React from 'react';
import './effects.css';

export class ChannelComponent extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(destination) {
    return () => {
      // if (this.props.location.pathname === `/${destination}`) return;
      if (this.props.location.pathname === `/users/${this.props.match.params.username}/${destination}`) 
        return;
      this.props.history.push(`/users/${this.props.match.params.username}/${destination}`);
    }
  }

  followClick(e) {
    // clickAction if current_user else login modal
  }

  render() {

    const topBarStyle = {
      height: '37px',
      width: '100%',
      backgroundColor: '#19171c',
      borderBottom: 'solid 1px #252328',
      // borderLeft: 'solid 1px #252328',
      paddingTop: '6px',
      paddingBottom: '6px',
      paddingLeft: '20px',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: '13px',
      color: '#b19dd8',
      display: 'flex',
      justifyContent: 'space-between'
    }
    const listContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      lineHeight: '38px'
    }
    
    const userContainer = {
      cursor: 'pointer'
    }
    
    const imageContainer = {
      borderBottom: 'solid 4px #6441a4',
      height: '37px',
      width: '40px',
    }
    
    const imageElement = {
      borderRadius: '20px',
      height: '33px',
      width: '33px',
      marginLeft: '2px',
      border: 'solid 1px grey'
    }
    const usernameElement = {
      color: "#dad8de",
      height: '37px',
      marginLeft: '7px',
      paddingRight: '20px',
      borderRight: 'solid 1px #252328',
      cursor: 'pointer'
    }
    const followerElement = {
      height: '37px',
      display: 'flex',
      flexDirection: 'row',
      padding: '0px 15px',
      borderRight: 'solid 1px #252328'
    }
    const followingElement = {
      height: '37px',
      display: 'flex',
      flexDirection: 'row',
      padding: '0px 15px',
    }
    const followText = {
      margin: '0px 5px',
      fontSize: '14px'
    }
    const numberText = {
      paddingRight: '4px',
      color: '#868092',
      fontSize: '14px'
    }
    const followButton = {
      width: '82px',
      height: '30px',
      padding: '5px 10px',
      borderRadius: '5px',
      marginRight: '30px',
      boxSizing: 'border-box',
      marginTop: '3px'
    }
    const heartIcon = {
      borderRadius: '20px',
      height: '14px',
      width: '14px',
      float: 'left',
      border: 'solid 1px white',
      marginTop: '2px',
      marginRight: '6px',
      marginLeft: '2px'
    }
    const FollowText = {
      fontSize: '11px',
      fontWeight: '500',
      color: 'white',
      lineHeight: '20px'
    }
    
    return (
      <div style={topBarStyle}>
        <div>
          <div style={listContainer}>
            <div onClick={this.handleClick('')} style={userContainer}>
              <div style={imageContainer}>
                <div style={imageElement}></div>
              </div>
            </div>
            <div onClick={this.handleClick('')} style={usernameElement}>{this.props.match.params.username}</div>
  
            <div onClick={this.handleClick('followers')} className="followHover" style={followerElement}>
              <div style={followText}>Followers</div>
              <div style={numberText}>4</div>
            </div>
            <div onClick={this.handleClick('following')} className="followHover" style={followingElement}>
              <div style={followText}>Following</div>
              <div style={numberText}>66</div>
            </div>
          </div>
        </div>
        <div id="followButton" style={followButton} className='buttonClass'>
          <div style={heartIcon}></div>
          <div style={FollowText}>Follow</div>
        </div>
      </div>
    )
  }
}