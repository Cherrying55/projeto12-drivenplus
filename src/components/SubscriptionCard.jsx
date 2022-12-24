import styled from "styled-components";
import { Link } from "react-router-dom";


export default function SubscriptionCard(props){

    return(
        <SubLink to={`/subscriptions/${props.id}`}>
            <img src={props.image} />
            <h1>{props.price}</h1>
        </SubLink>
    )
}

const SubLink = styled(Link)`
height: 180px;
border: 3px solid #7E7E7E;
border-radius: 12px;
background: #0E0E13;
display: flex;
align-items: center;
justify-content: center;
gap: 5%;
width: 80%;

img{
    width: 47.5%;
}

h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    width: 47.5%;
}
`
