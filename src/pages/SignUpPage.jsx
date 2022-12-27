import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import SignForm from "../assets/SignForm.jsx";
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function SignUpPage(){

    const [dados, setDados] = useState({email: "", name: "", cpf: "", password: ""});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        console.log(dados)
    }, [dados])

    function alterardados(e){
        let newobj = {...dados};
        newobj[e.target.name] = e.target.value;
        setDados({...newobj});
    }

    console.log(dados);

    function fazercadastro(e){
        setLoading(true);
        e.preventDefault();
        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", dados)
        .then(
            (res) => {
                navigate("/");
            }
        )
    }

    return(
        <>
        <Empty />
        <SignForm onSubmit={fazercadastro}>
            <input type="text" name="name" placeholder="Nome" onChange={alterardados} />
            <input type="text" name="cpf" placeholder="CPF" onChange={alterardados}/>
            <input type="text" name="email" placeholer="E-mail" onChange={alterardados}/>
            <input type="password" name="password" placeholder="Senha" onChange={alterardados} />
            <button type="submit" disabled={loading}>
            {
            loading
              ? <ThreeDots color="#FFFFFF" height={50} width={50} />
              : "CADASTRAR"
               }
            </button>
        </SignForm>
        <Link to="/">
            Já possui uma conta? Entre
        </Link>
        </>
    )
}

const Empty = styled.div`
width: 100%;
height: 0;
margin-bottom: 147px;
`