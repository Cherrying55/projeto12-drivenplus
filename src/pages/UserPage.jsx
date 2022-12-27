import { useContext } from "react";
import styled from "styled-components";
import BackHeader from "../components/BackHeader";
import SignForm from "../assets/SignForm";
import AuthContext from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";


export default function UserPage(){

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { iddoUsuario } = useParams();

    function gochange(){
        navigate(`/users/${iddoUsuario}/update`)
    }

    return(
        <>
        <BackHeader link={"/home"} />
        <Empty />
        <SignForm>
            <input type="text" placeholder={auth.name} disabled />
            <input type="text" placeholder={auth.cpf} disabled />
            <input type="text" placeholder={auth.email} disabled />
            <button type="submit" disabled onClick={gochange}>ATUALIZAR</button>
        </SignForm>
        </>
    )
}

const Empty = styled.div`
width: 100%;
height: 0;
margin-bottom: 147px;
`