import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../contexts/AuthContext.jsx";


export default function SubscriptionPage(){
    
    //aqui
    const { iddoPlano } = useParams();
    const { auth, login } = useContext(AuthContext);
    const [plano, setPlano] = useState(undefined);
    const [dados, setDados] = useState({cardName: "", cardNumber: "", securityNumber: "", expirationDate: ""})
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    useEffect(
        () => {
            axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${iddoPlano}`, {
                headers: {
                    "Authorization": `Bearer ${auth.token}`
                }
            })
            .then(
                (res) => {
                    setPlano(res.data);
                }
            )
        }
    )

    function alterardados(e){
        let newobj = {...dados};
        newobj[e.target.name] = e.target.value;
        setDados({...newobj});
    }

    function fazercadastro(e){
        e.preventDefault();
        const newobj = {...dados};
        newobj.membershipId = plano.id;
        setDados({...newobj});
        setModal(true);
    }

    function confirmorcancel(e){
        if(e.target.textContent === "SIM"){
            axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", dados, {
                headers: {
                    "Authorization": `Bearer ${auth.token}`
                }
            })
            .then(
                (res) => {login(res.data); navigate("/home") }
            )
        }
        else{
            setModal(false);
        }
    }

    function goback(){
        navigate("/subscriptions");
    }

    return(
        <>
        {
            modal ? <><Modal name={plano.name} price={plano.price} /><BlurredScreen /></>
            :
            <>
            <BackHeader onClick={goback} />
            <SubLogo image={plano.image} />
            <Subplano perks={plano.perks} price={plano.price} />
            <SubForm onSubmit={fazercadastro}>
                <input type="text" name="cardName" placeholder="Nome impresso no cartão" onChange={alterardados} />
                <input type="text" name="cardNumber" placeholder="Digitos do cartão"  onChange={alterardados} />
                <div>
                <input type="text" name="securityNumber" placeholder="Código de segurança" onChange={alterardados} />
                <input type="text" name="expirationDate" placeholder="Validade"  onChange={alterardados}/>
                </div>
                <button type="submit">ASSINAR</button>
            </SubForm>
            </>

        }
        </>
    )

}