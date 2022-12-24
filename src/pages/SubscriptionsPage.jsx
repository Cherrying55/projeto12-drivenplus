import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";
import SubscriptionCard from "../components/SubscriptionCard.jsx";

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
        <h1>Escolha seu Plano</h1>
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
