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
            <div>
            <Button cor={"rosa"} onClick={goback}>Mudar Plano</Button>
            <Button cor={"vermelho"} onClick={cancelarplano}>Cancelar Plano</Button>
            </div>
        </HomeContainer>
        
        </>
    )
}

const HomeContainer = styled.div`
width: 100%;
align-items: center;
display: flex;
flex-direction: column;
gap: 8px;

a {
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
div{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    position: fixed;
    bottom: 0;
    margin-bottom: 10px;
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
margin-top: 84px;
`

const HomeHeader = styled.header`
display: flex;
height: 72px;
justify-content: space-between;
padding-left: 38px;
width: 100%;
box-sizing: border-box;
position: fixed;
top: 0;

img{
    align-self: flex-end;
    height: 50px;

}

ion-icon{
    font-size: 48px;
    color: white;
    align-self: flex-start;
    margin-top: 12px;
    margin-right: 12px;
}
`

const Button = styled.button`
background: ${props => props.cor === "rosa" ? "#FF4791" : "#FF4747"};
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
color: #FFFFFF;};
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
`
