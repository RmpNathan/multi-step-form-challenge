import React from "react";
import {ReactComponent as Arcade} from '../../../assets/images/icon-arcade.svg'
import {ReactComponent as Advanced} from '../../../assets/images/icon-advanced.svg'
import {ReactComponent as Pro} from '../../../assets/images/icon-pro.svg'
import Title from "../title/Title";
import RadioCard from "./radioCard/RadioCard";
import './StepTwo.scss'
export default function StepTwo () {
    return(
        <div className='step-two'>
            <Title title={'Personal info'} subtitle={'Please provide your name, email address and phone number'}/>
            <RadioCard title={'Arcade'} icon={<Arcade/>}/>
            <RadioCard title={'Advanced'} icon={<Advanced/>}/>
            <RadioCard title={'Pro'} icon={<Pro/>}/>
        </div>
    )
}