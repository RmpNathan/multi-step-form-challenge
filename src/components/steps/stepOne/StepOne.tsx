import React from "react";
import Title from "../title/Title";
import Input from "./input/Input";
import './StepOne.scss'
export default function StepOne(){
    return(
        <div className='step-one'>
            <Title title={'Personal info'} subtitle={'Please provide your name, email address and phone number'}/>
            <Input label={'Name'} type={'text'} id={'name'} placeholder={'e.g. Stephan King'}/>
            <Input label={'Email'} type={'text'} id={'email'} placeholder={'e.g. stephanking@gmail.com'}/>
            <Input label={'Phone'} type={'text'} id={'phone'} placeholder={'e.g. +1 234 567 890'}/>
        </div>
    )
}