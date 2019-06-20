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
              < p style={{marginTop:'6.5px'}}className="text-center">Powered By</p>
              <div>
                  <img className="canon-logo" src="/assets/canon.png" alt="canon"/>  
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
