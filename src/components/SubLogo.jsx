import styled from "styled-components";


export default function SubLogo(props){
    return(
        <LogoContainer>
            <img src={props.image} />
            <h1>{props.name}</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
gap: 12px;
margin-top: 11px;
margin-bottom: 22px;

h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
}
`