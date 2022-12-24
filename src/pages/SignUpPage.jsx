import { useState, useContext } from 'react';
import AuthContext from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SignForm from "../assets/SignForm.jsx";


export default function SignUpPage(){

    const [dados, setDados] = useState({email: "", name: "", cpf: "", password: ""});
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    if(auth && auth.token){
        navigate("/home");
    }

    function alterardados(e){
        let newobj = {...dados};
        newobj[e.target.name] = e.target.value;
        setDados({...newobj});
    }

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
            <input type="text" name="name" placeholder="Nome" />
            <input type="text" name="cpf" placeholder="CPF" />
            <input type="email" name="email" placeholer="E-mail" />
            <input type="password" name="password" placeholder="Senha" />
            <button type="submit">CADASTRAR</button>
        </SignForm>
        <Link to="/">
            Já possui uma conta? Entre
        </Link>
        </>
    )
}