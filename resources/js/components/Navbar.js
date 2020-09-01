import React from 'react';
import Modal from './Modal';

class Navbar extends React.Component {

  render(){
      return (
        <div className="Navbar">
            <div className="Nav" >
              <div style={{height:"100px",width:"100px",position:"absolute", right:"1300px",top:"20px",color:"#FF1BAF",fontSize:"30px",fontWeight:"bold"}}> <a href="/">INSTAGRAM</a></div>
              <p style={{marginTop:"30px",fontWeight:"bold",paddingRight:"14px"}}>Vous êtes un influenceur instagram</p>
              {/*<Modal /> */}
            </div>
        </div>
    );
  }

}

export default Navbar;