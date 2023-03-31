import React from "react";
type Props = {
    title: string,
    icon: React.ReactNode
}
export default function RadioCard({title, icon}: Props) {
    return(
        <label>
            <input type="radio" name="plan" className="card-input-element"/>
            <div className="panel panel-default card-input">
                <div className='panel-icon'>{icon}</div>
                <div className="container-text">
                    <div className="panel-heading">{title}</div>
                    <div className="panel-body">
                        $9/mo
                    </div>
                </div>
            </div>
        </label>
    )
}