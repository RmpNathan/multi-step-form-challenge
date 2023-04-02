import React from "react";
import './StepFour.scss'
import {Service} from "../../../models/Service";
import {Plan} from "../../../models/Plan";
import Title from "../title/Title";

type Props = {
    isYearly: boolean,
    setStep:  React.Dispatch<React.SetStateAction<number>>,
    plan: Plan | null,
    service: Array<Service> | [],
    totalPrice: number
}
export default function StepFour({isYearly, setStep, plan, service, totalPrice}:Props) {
    return(
        <div className='step-four'>
            <Title title={'Personal info'} subtitle={'Please provide your name, email address and phone number'}/>
            <div>{plan?.title} {isYearly ? plan?.priceYearly : plan?.price}</div>
            <div>
                {service && service.map( s => {
                    return(
                        <div key={s.title}>{s.title} {isYearly ? s.priceYearly : s.price}</div>
                    )
                })}
            </div>
            <div>{totalPrice}</div>
        </div>
    )
}