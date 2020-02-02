import React, { Component } from 'react';
import Activity from './modules/activity';
import './assets/sass/index.scss';
import logo from './assets/images/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currentStep: 1
    };
  }

  handleModal = event => {
    this.setState({
      currentStep: 1
    })
    this.setState({
      show: !this.state.show,
      currentStep: this.state.currentStep,
    })    
  }
  
  render() {
    return (
      <div className="page vh-100 bg-gradient-blue dt w-100 bg-right no-repeat cover relative open-sans">
        <header>
          <div className="cover bg-left bg-center bg-image">
            <div className="bg-black-80 pb5 pb6-m pb7-l">
              <nav className="dt w-100 mw8 center">
                <div className="dtc w2 v-mid pa3">
                  <a href="/" className="dib w3 h3 pa1 grow-large">
                    <img
                      src={logo}
                      className="logo"
                      alt="AAZ"
                    />
                  </a>
                </div>
              </nav>
              <div className="tc mt4 mt5-m mt6-l ph3">
                <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Student's Portal</h1>
                <h2 className="fw1 f3 white-80 mt3 mb4">Connect to real employment experiences</h2>
                <button className="primary-button f4 no-underline grow v-mid bg-transparent white ba b--light-blue br3 ph4 pv3 mb3" 
                  onClick={
                    e => {
                      this.handleModal();
                    }
                  }
                >
                  Activity updates
                </button>

                <div className={this.state.show? 'modal-active':''}>
                  <Activity 
                    show={this.state.show}
                    currentStep={this.state.currentStep}
                    handleModal={this.handleModal}
                  />
                </div>

              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;