import React from "react";
type Props = {
    title: string,
    subtitle: string
}
export default function Title({title, subtitle}: Props){
    return(
        <div>
            <h2>{title}</h2>
            <p className='information-text'>{subtitle}</p>
        </div>
    )
}