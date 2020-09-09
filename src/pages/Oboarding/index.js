import React, { useState } from 'react'

import Step1 from '../../components/onboarding/Step1';
import Step2 from '../../components/onboarding/Step2';

export default function Onboard() {

    const [step, setStep] = useState(1);

    if(step === 1) {
        return(
            <Step1 next={ callback => setStep(callback) } />
        );
    } else {
        return (
            <Step2 back={ callback => setStep(callback) } />
        );
    }
}
