import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function HomePage(){

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(auth);

    function goback(){
        navigate("/subscriptions")
    }

    function cancelarplano(){
        axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", {headers:
    {
        "Authorization": `Bearer ${auth.token}`
    }})
    .then(
        (res) => {
            navigate("/subscriptions");
        }
    )
    }

    
    return(
        <>
        <HomeHeader>
            <img src={auth.membership.image} />
            <ion-icon name="person-circle-outline"></ion-icon>
        </HomeHeader>
        <HomeH1>Olá, {auth.name}</HomeH1>
        <HomeContainer>
            {auth.membership.perks.map(
                (p) => {
                    return(
                        <a href={p.link}>{p.title}</a>
                    )
                }
            )}
            <button onClick={goback}>Mudar Plano</button>
            <button onClick={cancelarplano}>Cancelar Plano</button>
        </HomeContainer>
        
        </>
    )
}

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;
align-items: center;

a, button{
    background: #FF4791;
    border-radius: 8px;
    height: 52px;
    left: 38px;
    top: 176px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
}

`

const HomeH1 = styled.h1`
margin-bottom: 52px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
`

const HomeHeader = styled.header`
display: flex;
height: 50px;
justify-content: space-between;
padding-left: 38px;
padding-right: 22px;
padding-top: 22px;
width: 100%;
box-sizing: border-box;

img{
    align-self: flex-end;
    height: 50px;

}

ion-icon{
    font-size: 48px;
    color: white;
    align-self: flex-start;
}
`
