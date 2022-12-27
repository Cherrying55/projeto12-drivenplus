import styled from "styled-components";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function Modal(props){

    const navigate = useNavigate();
    const { auth, definirplano } = useContext(AuthContext);

    function confirmorcancel(e){
        if(e.target.textContent === "SIM"){
            axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", props.dados, {
                headers: {
                    "Authorization": `Bearer ${auth.token}`
                }
            })
            .then(
                (res) => {definirplano(res.data); navigate("/home") }
            )
        }
        else{
            props.setModal(false);
        }
    }

    return(
        <ModalContainer>
            <h1>
            Tem certeza que deseja assinar o plano {props.name} {props.price}?
            </h1>
            <div>
                <button onClick={confirmorcancel}>Não</button>
                <button onClick={confirmorcancel}>SIM</button>
            </div>
        </ModalContainer>
    )

}

const ModalContainer = styled.div`
height: 210px;
width: 58%;
background: #FFFFFF;
border-radius: 12px;
z-index: 5;
position: fixed;
top: 229px;
padding-top: 33px;
display: flex;
flex-direction: column;
align-items: center;
gap: 47px;


div{
    display: flex;
    gap: 5%;
    font-size: 14px;
    line-height: 16px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
}

div > button{
width: 47.5%;
height: 52px;
background: #CECECE;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 400;
}

div:second-child{
    width: 47.5%;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    }
 
h1{
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #000000;
}    
`