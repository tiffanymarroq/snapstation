import React from 'react';
import './App.css';
import Views from './components/Views';
import {Nav, Navbar, Container, NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar>
          <Nav>
            <NavbarBrand>
              <img className="logo" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/slr-camera-icon-18-256.png"/>
              <h1 className="team-name">SnapStation</h1>
            </NavbarBrand>
          </Nav>
        </Navbar>
      </header>
      <div className="main-view ">
        <Views />
      </div>
    </div>
  );
}

export default App;
