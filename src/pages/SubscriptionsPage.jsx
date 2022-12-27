import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";
import SubscriptionCard from "../components/SubscriptionCard.jsx";
import styled from "styled-components";

export default function SubscriptionsPage(){

    const [planos, setPlanos] = useState([]);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",{
            headers:{
                'Authorization': `Bearer ${auth.token}`
            }
        })
        .then(
            (res) => {
                setPlanos(res.data);
            }
        )
    })

    return(
        <>
        <SubsH1>Escolha seu Plano</SubsH1>
        <SubscriptionsContainer>
        {
            planos.map((p) => {
                return(
                    <SubscriptionCard
                    id={p.id}
                    image={p.image}
                    price={p.price}
                    />
                )
            })
        }
        </SubscriptionsContainer>
        </>
    )
}

const SubscriptionsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 80%;
`

const SubsH1 = styled.h1`

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
margin-top: 29px;
margin-bottom: 24px;
`