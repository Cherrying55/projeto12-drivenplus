import styled from "styled-components";
import back from "../assets/back.svg";
import { Link } from "react-router-dom";

export default function BackHeader(props){

    return(
        <Container>
            <Link to={props.link}>
            <img src={back} />
            </Link>
        </Container>
    )
}

const Container = styled.header`
width: 100%;
height: 75px;
display: flex;
align-items: center;
padding-left: 22px;
`