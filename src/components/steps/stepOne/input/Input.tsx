import React from "react";
type Props = {
    label: string,
    type: string,
    id: string,
    placeholder: string
}
export default function Input({label, type, id, placeholder}: Props) {
    return(
        <div className='input-container'>
            <label htmlFor="name">{label}</label>
            <input placeholder={placeholder} id={id} type={type}/>
        </div>
    )
}