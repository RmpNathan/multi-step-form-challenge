import React from 'react';
import './App.scss';
import StepOne from "./components/steps/stepOne/StepOne";
import StepTwo from "./components/steps/stepTwo/StepTwo";
import StepThree from "./components/steps/stepThree/StepThree";
import {Plan} from "./models/Plan";
import {Service} from "./models/Service";
import StepFour from "./components/steps/stepFour/StepFour";

function App() {
  const [step, setStep] = React.useState(1)
  const [isYearly, setIsYearly] = React.useState(false)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null);
  const [selectedService, setSelectedService] = React.useState<Array<Service>>([]);
    const setStepFunction = (currentStep: number) => {
      setStep(currentStep)
  }
    const allServices = React.useMemo(() => [
        {title: 'Online service', subtitle: 'Access to multiplayer games', price: isYearly ? 10 : 1},
        {title: 'Larger storage', subtitle: 'Extra 1TB of cloud save', price: isYearly ? 20 : 2},
        {title: 'Customizable profile', subtitle: 'Custom theme in your profile', price: isYearly ? 20 : 2}
    ], [isYearly])

    const refreshServicePrice = () => {
        if (selectedService) {
            const updatedServices = selectedService.map((ss) => {
                const matchingService = allServices.find((as) => as.title === ss.title);
                if (matchingService && matchingService.price !== ss.price) {
                    return { ...ss, price: matchingService.price };
                } else {
                    return ss;
                }
            });
            console.log('updated service : ', updatedServices)
            setSelectedService(updatedServices);
        }
    }

    React.useEffect(() => {
        // code from StepThree's useEffect
        refreshServicePrice()
    }, [isYearly]);

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
                  <StepTwo isYearly={isYearly} setIsYearly={setIsYearly} setSelectedPlan={setSelectedPlan} selectedPlan={selectedPlan}/>
                }
                {step === 3 &&
                  <StepThree allServices={allServices} setService={setSelectedService} isYearly={isYearly} selectedService={selectedService}/>
                }
                {step === 4 &&
                  <StepFour isYearly={isYearly} setStep={setStep} plan={selectedPlan} service={selectedService}/>
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
