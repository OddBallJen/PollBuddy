import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {Link} from "react-router-dom";


export default class AccountInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {changePassword: false};
    this.changePassword = this.handleToggleClick.bind(this);
  }

  componentDidMount(){
    this.props.updateTitle("Account Info");
  }

  
  handleToggleClick() {
    this.setState(state => ({
      changePassword: !state.changePassword
    }));
  }

  render() {
    return (
      <MDBContainer className="page">
        <MDBContainer className="box">
          <h1>Account Settings</h1>
          <MDBContainer>
            <MDBRow className="accountInputs">
              <MDBCol md="6">
                <label htmlFor="firstnameText">First Name:</label>
                <input placeholder="SIS" className="form-control textBox" id="firstnameText"/>
              </MDBCol>
              <MDBCol md="6">
                <label htmlFor="lastnameText">Last Name:</label>
                <input placeholder="Man" className="form-control textBox" id="lastnameText"/>
              </MDBCol>
            </MDBRow>

            <MDBRow className="accountInputs">
              <MDBCol md="6">
                <label htmlFor="usernametext">Username:</label>
                <input value="mans" className="form-control textBox" id="usernametext" readOnly disabled/>
              </MDBCol>
              <MDBCol md="6">
                <label htmlFor="emailText">Email:</label>
                <input placeholder="sisman@rpi.edu" className="form-control textBox" id="emailText"/>
              </MDBCol>
            </MDBRow>

            <MDBRow className="accountInputs">
              <MDBCol md="6">
                <label htmlFor="institution">Institution:</label>
                <input placeholder="Rensselaer Polytechnic Institute" className="form-control textBox" id="institution"/>
              </MDBCol>
              <MDBCol md="6" style={!this.state.changePassword ? {display: "block"} : {display: "none"}}>
                <label htmlFor="passwordChange">Password:</label>
                <p id="passwordChange" onClick={this.changePassword}>Click here to change</p>
              </MDBCol>              
            </MDBRow>

            { /* TODO: Hide these until the user clicks the change password button below */ }
               
            <MDBRow id="changePasswordInputs" style={this.state.changePassword ? {display: "block"} : {display: "none"}}>
              <MDBCol md="6">
                <label htmlFor="newPasswordText">New password:</label>
                <input type="password" placeholder="••••••••••••" className="form-control textBox" id="newPasswordText"/>
              </MDBCol>
              <div className="w-100"></div>
              <MDBCol md="6">
                <label htmlFor="confirmNewPassword">Confirm new password:</label>
                <input type="password" placeholder="••••••••••••" className="form-control textBox" id="confirmNewPassword"/>
              </MDBCol>
            </MDBRow>
            
          </MDBContainer>

          <Link id="saveChanges" to={"/login/forgot"}>
            <button className="button">Save Changes</button>
          </Link>
        </MDBContainer>
      </MDBContainer>
    );
  }
}
