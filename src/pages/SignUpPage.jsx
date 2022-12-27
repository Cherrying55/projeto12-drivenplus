import { useState, useContext, useEffect } from 'react';
import AuthContext from "../contexts/AuthContext.js";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import SignForm from "../assets/SignForm.jsx";


export default function SignUpPage(){

    const [dados, setDados] = useState({email: "", name: "", cpf: "", password: ""});
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);


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
        <SignForm onSubmit={fazercadastro}>
            <input type="text" name="name" placeholder="Nome" onChange={alterardados} />
            <input type="text" name="cpf" placeholder="CPF" onChange={alterardados}/>
            <input type="text" name="email" placeholer="E-mail" onChange={alterardados}/>
            <input type="password" name="password" placeholder="Senha" onChange={alterardados} />
            <button type="submit">CADASTRAR</button>
        </SignForm>
        <Link to="/">
            Já possui uma conta? Entre
        </Link>
        </>
    )
}