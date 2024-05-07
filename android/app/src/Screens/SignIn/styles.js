import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
      background-color: #000000;
      flex: 1;
      justify-content: center;
      align-items: center;  
`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;  
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SingMsgButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top:5px;
    margin-bottom: 20px;
`;
export const SingMsgButtonTextBold = styled.Text`
    font-size: 16px;
    color: #268596;
`;
export const SingMsgButtonText = styled.Text`
    font-seize: 16px;
    color:#268596;
    font-weight: bold
`;