'use client'

import { Input } from "@nextui-org/input";
import {RadioGroup, Radio} from "@nextui-org/radio";
import {Select, SelectItem} from "@nextui-org/react";
import { SegmentsForm } from "./Segments-form";
import React from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function FormInterface() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);
    
    const [selected, setSelected] = React.useState("CPF");
    const [email, setEmail] = React.useState("");
    const [value, setValue] = React.useState("");
    const [tel, setTel] = React.useState("");
      
    const isInvalid = React.useMemo(() => {
        const validate = (value: string) => {
            if (selected === "CNPJ") {
              return value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/);
            }
            return value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/);
        };

        if (value === "") return false;
        return !validate(value);
    }, [value, selected]); // CPF e CNPJ

    const isInvalidEmail = React.useMemo(() => {
        const validateEmail = (email: string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
        if (email === "") return false;
    
        return validateEmail(email) ? false : true;
    }, [email]); // Email

    const isInvalidTel = React.useMemo(() => {
        const validateTel = (tel: string) => tel.match(/^\(?\d{2}\)?\s?\d{5}-?\d{4}$/);
        if (tel === "") return false;
    
        return validateTel(tel) ? false : true;
    }, [tel]); // Phone

    return(
        <div className="w-[23em] lg:w-[30em] md:w-[38em] min-h-[50em] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl relative" data-aos="fade-left">
            <form className="flex flex-col w-[75%] flex-wrap md:flex-nowrap gap-10 justify-center items-center" action="" id="form-contact">
                <Input type="name" id="name" label="Nome Completo" variant="underlined"/>
                <Input 
                    type="email" 
                    label="E-mail" 
                    variant="underlined"
                    value={email}   
                    isInvalid={isInvalidEmail} 
                    color={isInvalidEmail ? "danger" : "default"}  
                    errorMessage={`Please enter a valid Email ( your_email@exemple.com )`}
                    onValueChange={setEmail}
                />
                <Input 
                    type="text" 
                    label="Telefone" 
                    variant="underlined"
                    value={tel}
                    isInvalid={isInvalidTel}
                    color={isInvalidTel ? "danger" : "default"}  
                    errorMessage={`Please enter a valid Phone number ( 056012340123 )`}
                    onValueChange={setTel}
                />
                <Input type="name" id="name-enterprise" label="Nome da Empresa" variant="underlined"/>
                <RadioGroup 
                    label="Seleciona uma opção"
                    orientation="horizontal"
                    defaultValue="CPF"
                    value={selected}
                    onValueChange={setSelected}
                    size="sm"
                >
                    <Radio value="CPF">CPF</Radio>
                    <Radio value="CNPJ">CNPJ</Radio>
                    <Input 
                        type="text" 
                        variant="underlined" 
                        label={selected} 
                        value={value} 
                        isInvalid={isInvalid} 
                        color={isInvalid ? "danger" : "default"}  
                        errorMessage={`Please enter a valid ${selected} ( ${ selected === "CNPJ" ? "xx.xxx.xxx/xxxx-xx" : "xxx.xxx.xxx-xx" } )`}
                        onValueChange={setValue}
                    />
                </RadioGroup>
                <Select
                    label="Segmentos"
                    placeholder="Selecione um segmento"
                >
                    {SegmentsForm.map((seg) => <SelectItem key={seg.key}>{seg.label}</SelectItem>)}
                </Select>
                <input type="submit" value="Submit" className="bg-[#1e90ff] hover:bg-[#1e65ff] transition w-fit text-slate-100 font-bold rounded-full p-4 px-[40%] cursor-pointer" />
            </form>
        </div>
    )
}