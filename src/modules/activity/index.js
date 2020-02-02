import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

import iconcategory from '../../assets/images/icon-category.png';

class Activity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      show: false,
      totaldays: '287',
      deltadays: 26,
      totalxp: 3244,
      deltaxp: -420,
      title: "Bachelor of Communications (Media)",
      subtitle: "Bachelor Degree",
      category: "Education",
      categoryicon: iconcategory,
    }
  }  

  static defaultProps = {
    currentStep: 1,
    show: false,
    totaldays: 287,
    deltadays: 26,
    totalxp: 3244,
    deltaxp: -420,
    title: "Bachelor of Communications (Media)",
    subtitle: "Bachelor Degree",
    category: "Education",
    categoryicon: "iconcategory",
  };

  handleModal = event => {
    this.setState({
      currentStep: 1
    })
    this.props.handleModal && this.props.handleModal(event);
    this.setState({
      currentStep: 1
    })
  };

  addClass = (e) => {
    if (!e) {
      return ' out '
    }
  }

  addPlus = (e) => {
    if (e > 0) {
      return '+'
    }
  }

  progressBar = (e) => {
    let currentStep = this.state.currentStep
    if (e === currentStep) {
      return ' bg-light-purple '
    } else {
      return ' bg-light-blue '
    }
  }
  
  /*
  * the functions for our button
  */

  _continue = () => {
    let currentStep = this.state.currentStep
    if (currentStep === 3) {
      this.setState({
        currentStep: 1
      })
    }
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  continueButton(){
    return (
      <button className="primary-button f4 no-underline grow v-mid white bg-transparent bw1 ba1 b--light-blue br3 ph4 pv3 mb3 mt3"
        type="button"
        onClick={
          this._continue
          }
        >
        Continue
      </button>        
    )
  }

  closeButton(){
    return (
      <button className="primary-button f4 no-underline grow v-mid white bg-transparent bw1 ba1 b--light-blue br3 ph4 pv3 mb3 mt3"
        type="button"
        onClick={e => {
          this.handleModal();
        }}
        >
        Close
      </button>        
    )
  }
  
  render() {
    if(!this.props.show){
      return null;
    }

    return (
      <div className={this.addClass(this.props.show) + " modal absolute top-0 left-0 right-0 bottom-0 bg-gradient-blue light-blue san-serif center tc"}>
        <div className="w-100 center">

        {/* 
          render the steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep}
            handleModal={this.handleModal}
            totaldays={this.state.totaldays}
            deltadays={this.state.deltadays}
            totalxp={this.state.totalxp}
            deltaxp={this.state.deltaxp}
            title={this.state.title}
            subtitle={this.state.subtitle}
            category={this.state.category}
            categoryicon={this.state.categoryicon}
          />
          <Step2 
            currentStep={this.state.currentStep}
            handleModal={this.handleModal}
            totaldays={this.state.totaldays}
            deltadays={this.state.deltadays}
            totalxp={this.state.totalxp}
            deltaxp={this.state.deltaxp}
            title={this.state.title}
            subtitle={this.state.subtitle}
            category={this.state.category}
            categoryicon={this.state.categoryicon}
          />
          <Step3 
            currentStep={this.state.currentStep}
            handleModal={this.handleModal}
            totaldays={this.state.totaldays}
            deltadays={this.state.deltadays}
            totalxp={this.state.totalxp}
            deltaxp={this.state.deltaxp}
            title={this.state.title}
            subtitle={this.state.subtitle}
            category={this.state.category}
            categoryicon={this.state.categoryicon}
          />

          {this.state.currentStep === 3 ? this.closeButton() : this.continueButton()}

          <div className="mt3 az-progress-bar">
            <span className={" b1 br-100 ma2 pa1 dib " + this.progressBar(1)}></span>
            <span className={" b1 br-100 ma2 pa1 dib " + this.progressBar(2)}></span>
            <span className={" b1 br-100 ma2 pa1 dib " + this.progressBar(3)}></span>
          </div>

        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  totaldays: PropTypes.number.isRequired,
  totalxp: PropTypes.number,
  deltadays: PropTypes.number.isRequired,
  deltaxp: PropTypes.number,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  category: PropTypes.string.isRequired,
  categoryicon: PropTypes.string,
}

export default Activity;
