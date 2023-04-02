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
}
export default function StepFour({isYearly, setStep, plan, service}:Props) {
    React.useEffect(() => {
        console.log('plan : ', plan)
        console.log('service : ', service)
    },[service, plan])
    return(
        <div className='step-four'>
            <Title title={'Personal info'} subtitle={'Please provide your name, email address and phone number'}/>
            <div>{plan?.title} {plan?.price}</div>
            <div>
                {service && service.map( s => {
                    return(
                        <div>{s.title} {s.price}</div>
                    )
                })}
            </div>
        </div>
    )
}