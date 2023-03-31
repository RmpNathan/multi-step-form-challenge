import React from 'react';
import './App.scss';
import StepOne from "./components/steps/stepOne/StepOne";
import StepTwo from "./components/steps/stepTwo/StepTwo";

function App() {
  const [step, setStep] = React.useState(1)
  const setStepFunction = (currentStep: number) => {
      setStep(currentStep)
  }
  return (
    <main className="app">
        <div className="form-container">
            <div className='left-col'>
                <div className='nav-step'>
                    <div className={step === 1 ? 'active btn-step' : 'btn-step'} onClick={() => {setStepFunction(1)}}>1</div>
                    <div className={step === 2 ? 'active btn-step' : 'btn-step'} onClick={() => {setStepFunction(2)}}>2</div>
                    <div className={step === 3 ? 'active btn-step' : 'btn-step'} onClick={() => {setStepFunction(3)}}>3</div>
                    <div className={step === 4 ? 'active btn-step' : 'btn-step'} onClick={() => {setStepFunction(4)}}>4</div>
                </div>
            </div>
            <div className='right-col'>
                { step === 1 &&
                  <StepOne/>
                }
                {step === 2 &&
                  <StepTwo/>
                }
            </div>
            <div className="container-btn-next">
                <button>Next</button>
            </div>
        </div>
    </main>
  );
}

export default App;
