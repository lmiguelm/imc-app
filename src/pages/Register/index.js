import React, { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Keyboard, BackHandler} from 'react-native';

import Modalize from '../../components/Modalize';
import Step1 from '../../components/register/Step1';
import Step2 from '../../components/register/Step2';
import Loading from '../../components/Loading';

import {useAuth} from '../../contexts/auth';

export default function Register() {

    const { navigate } = useNavigation();

    const { newUser } = useAuth();

    const [progress, setProgress] = useState(1);
    const [modal, setModal] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    
    function goToLoginPage() {
        navigate('Login');
    }

    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         navigate('Login');
    //         return;
    //     });
    // }, []);

    async function submitForm() {  
        setLoading(true); 
        Keyboard.dismiss();     
        try {
            await newUser(name, lastName, email, password);
        } catch (e) {
            setLoading(false);
            console.log(e);
            setModal({
                color: '#ff0000',
                text: 'Ops! ocorreu um erro inesperado',
                icon: 'error'
            });
            setShowModal(true);
        }
    }


    if(loading) {
        return <Loading title="Quase lá..."/>
    } else {
        return(
            <>
                {progress === 1 ? (
                    <Step1
                        nextStep={() => setProgress(2)}
                        goToLoginPage={goToLoginPage}
                        callback={ (valueName, valueLastname) => {
                            setName(valueName);
                            setLastName(valueLastname);
                        }}
                    />
                ) : (
                    <Step2
                        goToLoginPage={goToLoginPage}
                        back={() => setProgress(1)}
                        name={name}
                        callback={(valueEmail, valuePassword, valueConfirmPass) => {
                            setEmail(valueEmail);
                            setPassword(valuePassword);
                            setConfirmPass(valueConfirmPass);
                        }}
                        submitForm={submitForm}
                    />
                )}

                <Modalize
                    open={ showModal }
                    callback={ res => setShowModal(res) } 
                    modal={ modal }
                />
            </>
        );
    }
}