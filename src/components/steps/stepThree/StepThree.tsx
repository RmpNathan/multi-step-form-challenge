import React from "react";
import Title from "../title/Title";
import CheckboxCard from "./checkboxCard/CheckboxCard";
import './StepThree.scss'
import {Service} from "../../../models/Service";

type Props = {
    isYearly: boolean,
    setService:  React.Dispatch<React.SetStateAction<Array<Service>>>
    selectedService: Array<Service> | [],
    allServices: Array<Service>
}
export default function StepThree({allServices, isYearly, setService, selectedService}:Props) {
    return(
        <div className='step-three'>
            <Title title={'Personal info'} subtitle={'Please provide your name, email address and phone number'}/>
            {
                allServices.map(service => (
                    <CheckboxCard selectedService={selectedService} key={service.title} service={service} isYearly={isYearly} setService={setService} />
                ))
            }
        </div>
    )
}