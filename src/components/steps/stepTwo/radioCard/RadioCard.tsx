import React from "react";
import {Plan} from "../../../../models/Plan";
type Props = {
    isYearly: boolean,
    plan: Plan
    setSelectedPlan:  React.Dispatch<React.SetStateAction<Plan | null>>
    selectedPlan: Plan | null
}

export default function RadioCard({isYearly, plan, setSelectedPlan, selectedPlan}: Props) {
    const handlerCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handler nym')
        if (event.target.checked) {
            setSelectedPlan(plan)
        }
    }

    return(
        <label>
            <input type="radio" name="plan" className="card-input-element" checked={!!(selectedPlan && plan.title === selectedPlan.title)} onChange={handlerCheckBox}/>
            <div className="panel panel-default card-input">
                <div className='panel-icon'>{plan.icon}</div>
                <div className="container-text">
                    <div className="panel-heading">{plan.title}</div>
                    <div className="panel-body">
                        ${isYearly ? `${plan.priceYearly}/yr` : `${plan.price}/mo`}
                    </div>
                    { isYearly &&
                      <div className="yearly-offer">2 months free</div>
                    }
                </div>
            </div>
        </label>
    )
}