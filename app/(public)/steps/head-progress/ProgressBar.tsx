import '../head-progress/css/step.css'

import { VscAccount } from "react-icons/vsc";

import { VscCheck } from "react-icons/vsc";

import { GiPadlock } from "react-icons/gi";

type stepOfUser = {
    currentStep:number;
    
}

export const ProgressBar = ({currentStep}:stepOfUser) =>{
    
    
 

    return (
 
        <div className={"BarProgressContainer"}>
        <div className={"stepDefault active"}>
            <VscAccount/>
        </div>
        <div className={`stepDefault ${currentStep>=1 ? "active": '' }`}>
            <GiPadlock/>
        </div>
        <div className={`stepDefault ${currentStep>=2 ? "active": '' }`}>
            <VscCheck/>
        </div>
    </div>
 
        )
}