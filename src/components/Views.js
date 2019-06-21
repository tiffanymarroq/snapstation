import React, { Component } from "react";
import { Modal, Form } from "reactstrap";
import ImageRender from '../ImageRender';

class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "startView",
      isOpen: false,
      loading: false,
      success: false,
      isUser: false,
      code: "12345"
    };
    this.modalToggle = this.modalToggle.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }
  changeView = view => {
    this.setState({
      view: view
    });
  };

  onRestart = () => {
    this.setState({
      view: "startView"
    });
  };

  modalToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        success: true
      });
    }, 3200);
    setTimeout(() => {
      this.setState({
        view: "startView",
        isOpen: false,
        success: false,
        isUser: false
      });
    }, 6000);
  };

  checkUser = e => {
    if (this.state.code === e.target.value) {
      this.setState({
        isUser: true
      });
    } else {
      this.setState({
        isUser: false
      });
    }
    console.log(this.state.isUser);
  };

  render() {
    let { view, isOpen, loading, success, isUser } = this.state;
    let startView = (
      <div className="text">
        <h3 className="title">Welcome! </h3>
        <p>Ready to take your pic? Click the start button below.</p>
        <button onClick={() => this.changeView("imageView")}>Start</button>
      </div>
    );
    let imageView = (
      <div className={"text " + (isOpen ? "mx-r-15" : "")}>
        <h3 className="title" />
        <div className="image-container" >
            <ImageRender />
        </div>
        <button onClick={this.modalToggle}>Send to Friends</button>
        <br />
        <br />
        <button className="invert-btn" onClick={this.onRestart}>
          Restart
        </button>
      </div>
    );
    let displayView;
    if (view === "startView") {
      displayView = startView;
    } else if (view === "imageView") {
      displayView = imageView;
    } else {
      displayView = startView;
    }
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Modal
          centered={true}
          isOpen={isOpen}
          toggle={this.modalToggle}
          autoFocus={false}
        >
          {success ? (
            <div>
              <p className="modal-title">Thank you!</p>
              <p
                className="text-center"
                style={{ fontSize: "16px", margin: "0" }}
              >
                Your images have been sent.
              </p>
              <button className="submit-btn success-btn">Success!</button>
            </div>
          ) : (
            <div style={{ flexDirection: "column" }} className="flex">
              <p className="modal-title">Enter Yubico Key</p>
              <Form onSubmit={this.onSubmit}>
                <input
                  className={isUser ? "user-valid" : "user-invalid"}
                  type="password"
                  placeholder="key"
                  autoFocus
                  name="userCode"
                  onChange={this.checkUser}
                />
                <br />
                <button
                  disabled={isUser ? false : true}
                  className={
                    "submit-btn " +
                    (isUser ? "" : "disabled-btn") +
                    (loading ? "load-btn " : "") +
                    (success ? "success-btn" : "")
                  }
                >
                  {success ? "Success!" : <span> {loading ? "" : "Send"}</span>}
                </button>
              </Form>
            
                <div className="flex " style={{marginTop:"30px"}}>
                  <p style={{marginBottom:"10px", marginLRight:"10px", fontSize:'16px'}} className="text-center">Secured By</p>
                  <div style={{marginLeft: '5px'}}>
                    <img className="yubico-logo" src="/assets/yubico.png" alt="yubico"/>
                  </div>
                </div>
            </div>
          )}
        </Modal>
        <div className={"text-center view flex flex-center " + view}>
          {displayView}
        </div>
      </div>
    );
  }
}

export default Views;
