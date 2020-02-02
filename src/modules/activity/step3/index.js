import React from 'react';

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <div className={'innerbox-step'+props.currentStep}>
      {/* ACTIVITY HEADING SECTION */}
      <section className="bg-gradient-blue-title">
        <div className="flex justify-center items-center pt5">
          <div className="pa0 tl nb4 mt2">
            <img
              src={props.categoryicon}
              className="dib w4 icon-category"
              alt={props.title}
            />
          </div>
          <div className="pa3 tl nb3 mt0">
            <h1 className="ma0 pb2 f3-l f4-m f4-s fw6 light-blue">{props.title}</h1>
            <span>
              <label className="light-purple">{props.category} | </label> {props.subtitle}
            </span>
          </div>
        </div>
      </section>

      {/* ACTIVITY BODY SECTION */}
      <section className="bg-gradient-blue-content pt5">
        <div className="mw8 w-100 center">
          <h2 className="f3-l f4-m f4-s fw6 pb4">Activity updates</h2>
          <div className="dt center w5 h-100">
            <div className="dtc v-mid">- STEP3 COMING SOON -</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Step3;
