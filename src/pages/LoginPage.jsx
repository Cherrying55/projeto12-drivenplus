import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";
import { useState, useContext } from "react";
import SignForm from "../assets/SignForm.jsx";

export default function LoginPage(){

    const { auth, login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dados, setDados] = useState({email: "", password: ""})

    if(auth && auth.token){
        navigate("/home");
    }

    function alterardados(e){
        let newobj = {...dados};
        newobj[e.target.name] = e.target.value;
        setDados({...newobj});
    }

    function fazerlogin(e){
        e.preventDefault();
        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", dados)
        .then(
            (res) => {
                login(res.data);
                navigate("/home");
            }
        )
        .catch(
            (err) => {alert("Ocorreu um erro, tente novamente")}
        )
    }

    return(
        <>
        <Logo />
        <SignForm onSubmit={fazerlogin}>
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Senha" />
            <button type="submit">ENTRAR</button>
        </SignForm>
        <Link to="/sign-up">
            Não possui uma conta? Cadastre-se
        </Link>
        </>

    )

}