import React from "react";
import {ReactComponent as Arcade} from '../../../assets/images/icon-arcade.svg'
import {ReactComponent as Advanced} from '../../../assets/images/icon-advanced.svg'
import {ReactComponent as Pro} from '../../../assets/images/icon-pro.svg'
import Title from "../title/Title";
import RadioCard from "./radioCard/RadioCard";
import './StepTwo.scss'
import {Plan} from "../../../models/Plan";

type Props = {
    isYearly: boolean,
    setIsYearly: (checked: boolean) => void,
    setSelectedPlan:  React.Dispatch<React.SetStateAction<Plan | null>>
    selectedPlan: Plan | null,
}
export default function StepTwo ({isYearly, setIsYearly, setSelectedPlan, selectedPlan}:Props) {
    const allPlans = React.useMemo(() => [
        {title: 'Arcade', icon: <Arcade/>, price: isYearly ? 90 : 9},
        {title: 'Advanced', icon: <Advanced/>, price: isYearly ? 120 : 12},
        {title: 'Pro', icon: <Pro/>, price: isYearly ? 150 : 15}
    ], [isYearly])
    const handlerToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsYearly(event.target.checked)
    }

    // React.useEffect(() => {
    //     console.log('toto')
    //     if (selectedPlan) {
    //         const updatedPlan = allPlans.find((plan) => plan.title === selectedPlan.title);
    //         if (updatedPlan)
    //         setSelectedPlan(updatedPlan || null);
    //     }
    // }, [isYearly]);

    React.useEffect(() => {
        console.log('allPla change ')
        if (selectedPlan) {
            const updatedPlan = allPlans.find(
                (plan) => plan.title === selectedPlan.title
            );
            if (updatedPlan && updatedPlan.price !== selectedPlan.price) {
                setSelectedPlan(updatedPlan);
            }
        }
    }, [isYearly]);
    return(
        <div className='step-two'>
            <Title title={'Personal info'} subtitle={'Please provide your name, email address and phone number'}/>
            {
                allPlans.map(plan => (
                    <RadioCard key={plan.title} isYearly={isYearly} plan={plan} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
                ))
            }
            <input className="input" id="toggle" type="checkbox" checked={isYearly} onChange={handlerToggle}/>
                <label className="label switch-monthly-yearly" htmlFor="toggle">
                    <div className={!isYearly ? 'left' : 'grey left'}>
                       Monthly
                    </div>

                    <div className="switch">
                        <span className="slider round"></span>
                    </div>

                    <div className={isYearly ? 'right' : 'grey right'}>
                        Yearly
                    </div>
                </label>
        </div>
    )
}