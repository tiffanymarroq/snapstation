import React from 'react';
import './App.css';
import Views from './components/Views';
import {Nav, Navbar, Container, NavbarBrand} from 'reactstrap';
import ImageRender from './ImageRender';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar>
          <NavbarBrand>
            <img  style={{marginBottom:'5px'}}className="logo" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/slr-camera-icon-18-256.png"/>
            <div>
              <h1 style={{paddingLeft: '15px', marginTop:'12px'}} className="team-name">SnapStation</h1>
              <p style={{paddingLeft: '16px'}}>For A Safe And Fun Selfie Experience</p>
            </div>
            
          </NavbarBrand>
            <div className="flex flex-center">
              <p>Powered By</p>
              <div>
              <img className="canon-logo" src="http://pluspng.com/img-png/canon-logo-png--1200.png" alt=""/>  
              <img className="yubico-logo" src="https://www.yubico.com/wp-content/uploads/2012/09/Yubico-Logo-Big.png" alt=""/>
            
              </div>
            
            </div>  
        </Navbar>
      </header>
      <div className="main-view ">
        <Views />
      </div>
    </div>
  );
}

export default App;
