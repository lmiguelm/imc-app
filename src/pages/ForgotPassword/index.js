import React, { useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

import Step1 from '../../components/forgotpassword/Step1';
import Step2 from '../../components/forgotpassword/Step2';
import Step3 from '../../components/forgotpassword/Step3';

export default function ForgotPassword() {

    const { navigate } = useNavigation();

    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');
    
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            navigate('Login');
            return;
        });
    }, []);


    if(step === 1) {
        return(
            <Step1
                callback={(step, email) => {
                    setStep(step);
                    setEmail(email);
                }}
            />
        );
    } else if(step == 2) {
        return(
            <Step2
                email={email}
                callback={(step, id) => {
                    setStep(step);
                    setUserId(id);
                }}
            />
        );
    } else {
        return(
            <Step3
                callback={step => setStep(step)}
                userId={userId}
            />
        );
    }
}