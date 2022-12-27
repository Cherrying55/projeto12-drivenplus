import styled from "styled-components";

const SignForm = styled.form`
width: 90%;
display: flex;
flex-direction: column;
gap: 16px;

input{
    background: #FFFFFF;
    border-radius: 8px;
    height: 52px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 14px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7E7E7E;
}

button{
    background: #FF4791;
    border-radius: 8px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
}


div input{
    width: 48.5%;
}

div{
    display: flex;
    gap: 3%;
}

`

export default SignForm;