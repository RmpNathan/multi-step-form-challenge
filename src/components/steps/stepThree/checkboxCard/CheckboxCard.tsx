import React from "react";
import {Service} from "../../../../models/Service";
type Props = {
    isYearly: boolean,
    service: Service
    selectedService: Array<Service> | []
    setService:  React.Dispatch<React.SetStateAction<Array<Service>>>
}
export default function CheckboxCard({service, isYearly, setService, selectedService}: Props) {
    const [isChecked, setIsChecked] = React.useState(false)
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
        if (event.target.checked) {
            if (!selectedService.find(s => s.title === service.title)) {
                setService([
                    ...selectedService,
                    service
                ]);
            }
        } else {
            // remove from list
            setService(
                selectedService.filter((s) => s.title !== service.title),
            );
        }
    }

    // React.useEffect(() => {
    //     console.log('service change', service)
    //     selectedService.map(s => {
    //         if (s.title === service.title) {
    //             service.price = s.price
    //         }
    //     })
    // }, [service, selectedService])

    return(
        <label>
            <div className={isChecked ? 'panel panel-default card-input checked' : 'panel panel-default card-input'}>
                <input type="checkbox" name="plan" className="card-input-element" checked={!!selectedService.find(s => s.title === service.title)} onChange={inputChange}/>
                <div className="container-text">
                    <div className="panel-heading">{service.title}</div>
                    <div className="panel-body">
                        {service.subtitle}
                    </div>
                </div>
                <div className='price-contenair'>+${service.price}/{isYearly ? 'yr' : 'mo'}</div>
            </div>
        </label>
    )
}