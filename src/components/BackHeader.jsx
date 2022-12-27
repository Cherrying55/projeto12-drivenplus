import styled from "styled-components";
import back from "../assets/back.svg";

export default function BackHeader(props){
    return(
        <Container>
            <img src={back} />
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