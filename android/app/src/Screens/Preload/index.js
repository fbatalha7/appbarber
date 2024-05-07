import React, { useEffect } from "react";
import { Container, LoadingIcon } from "./styles";
import BarberLogo from '../../assets/barber-icon.svg'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


export default () => {

    const navigation = useNavigation();

    // useEffect(() =>{
    //     const CheckToken = async () => {
    //         const token = await AsyncStorage.getItem('token');
    //         if(token){
    //             navigation.navigate('SignIn');
    //             //validacao 
    //         }else{
    //             navigation.navigate('SignIn');
    //         }
    //     }

    // })
  
    useEffect(() =>{
        const token = false;
        if(token){
            // navigation.navigate('SignIn');
            //validacao 

            console.log(token)
        }else{
            navigation.navigate('SignIn');
        }

    })


    return (
        <Container>
            <BarberLogo width="100%" height="160"/>
            <LoadingIcon size="large" color="#FFFFFFF"/>
        </Container>
    );
}