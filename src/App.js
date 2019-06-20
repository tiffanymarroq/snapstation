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
            <img  style={{marginBottom:'5px'}}className="logo" src="/assets/camera-logo.png"/>
            <div>
              <h1 style={{paddingLeft: '15px', marginTop:'12px'}} className="team-name">SnapStation</h1>
              <p style={{paddingLeft: '16px'}}>For A Safe And Fun Selfie Experience</p>
            </div>
            
          </NavbarBrand>
            <div className=" flex flex-center">
              <div style={{marginTop:'20px'}}>
                <p className="text-center">Powered By</p>
                <div className="">
                  <img className="canon-logo" src="/assets/canon.png" alt="canon"/>  
                  <img className="yubico-logo" src="/assets/yubico.png" alt="yubico"/>
                </div>
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
