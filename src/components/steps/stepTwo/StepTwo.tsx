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
    const allPlans = [
        {title: 'Arcade', icon: <Arcade/>, price: 9 ,priceYearly: 90},
        {title: 'Advanced', icon: <Advanced/>, price: 12, priceYearly: 120},
        {title: 'Pro', icon: <Pro/>, price: 15, priceYearly: 150}
    ]
    const handlerToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsYearly(event.target.checked)
    }

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