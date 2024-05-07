import React, { useState } from "react";
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SingMsgButton,
    SingMsgButtonText,
    SingMsgButtonTextBold

 } from './styles';

 import SignInput from '../../components/SignInput'

 import BarberLogo from '../../assets/barber-icon.svg';

export default () => {


    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');


    return (
        <Container>
         <BarberLogo width="100%" height="160"/>
         

            <InputArea align-items="center">
                 <SignInput name='email' IconSvg={BarberLogo}
                            placeholder={"Digite seu Email"}                      
                 />
               
               <SignInput name='pass' IconSvg={BarberLogo}
                            placeholder={"Digite sua senha"}                      
                 />


                <CustomButton >
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
                <SingMsgButton>
                    <SingMsgButtonText>Ainda nao tem cadastro?</SingMsgButtonText>
                    <SingMsgButtonTextBold>Cadastre-se</SingMsgButtonTextBold>
                </SingMsgButton>
            </InputArea>
        </Container>
    )
}