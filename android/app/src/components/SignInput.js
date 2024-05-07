import React from "react";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #a9a9a9;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

export default ({IconSvg, placeholder, value}) =>{
    return(
        <InputArea>
            <IconSvg width="24" heifht="24" fill="#000000"/>

           <TextInput
                placeholder = {placeholder}
                placeholderTextColor = "#000000"
                value={value}
           />
        </InputArea>
    );
}