import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";
import { useState, useContext } from "react";
import SignForm from "../assets/SignForm.jsx";
import DrivenLogo from "../assets/DrivenLogo.jsx";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

export default function LoginPage(){

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dados, setDados] = useState({email: "", password: ""})

    
    function alterardados(e){
        let newobj = {...dados};
        newobj[e.target.name] = e.target.value;
        setDados({...newobj});
    }

    function fazerlogin(e){
        setLoading(true);
        e.preventDefault();
        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", dados)
        .then(
            (res) => {
                login(res.data);
                if(res.data.membership){
                    navigate("/home")
                }
                else{
                    navigate("/subscriptions")
                }
            }
        )
        .catch(
            (err) => {alert("Ocorreu um erro, tente novamente")}
        )
    }

    return(
        <>
        <Logo>
            <DrivenLogo />
        </Logo>
        <SignForm onSubmit={fazerlogin}>
            <input type="email" name="email" placeholder="E-mail" onChange={alterardados} />
            <input type="password" name="password" placeholder="Senha" onChange={alterardados}/>
            <button type="submit" disabled={loading}>
            {
            loading
              ? <ThreeDots color="#FFFFFF" height={50} width={50} />
              : "ENTRAR"
               }
            </button>
        </SignForm>
        <Link to="/sign-up">
            Não possui uma conta? Cadastre-se
        </Link>
        </>

    )

}

const Logo = styled.div`
width: 80%;
margin-top: 134px;
margin-bottom: 100px;
`