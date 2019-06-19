import React from 'react';
import './App.css';
<<<<<<< HEAD
import Views from './components/Views';
import {Nav, Navbar, Container, NavbarBrand} from 'reactstrap';
=======
import ImageRender from './ImageRender';
>>>>>>> canonAPI

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
<<<<<<< HEAD
      <div className="main-view ">
        <Views />
      </div>
=======
      <ImageRender/>
>>>>>>> canonAPI
    </div>
  );
}

export default App;
