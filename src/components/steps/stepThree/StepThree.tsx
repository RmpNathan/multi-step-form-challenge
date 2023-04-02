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
    // const allServices = React.useMemo(() => [
    //     {title: 'Online service', subtitle: 'Access to multiplayer games', price: isYearly ? 10 : 1},
    //     {title: 'Larger storage', subtitle: 'Extra 1TB of cloud save', price: isYearly ? 20 : 2},
    //     {title: 'Customizable profile', subtitle: 'Custom theme in your profile', price: isYearly ? 20 : 2}
    // ], [isYearly])


    // React.useEffect(() => {
    //     console.log('kfkfkfkv,e,b,bortbor')
    // }, [isYearly])
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