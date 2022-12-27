import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../contexts/AuthContext.js";
import SignForm from "../assets/SignForm.jsx";
import Modal from '../components/Modal.jsx';
import BackHeader from '../components/BackHeader.jsx';
import SubLogo from '../components/SubLogo.jsx';
import SubPlano from '../components/SubPlano.jsx';


export default function SubscriptionPage(){
    
    //aqui
    const { iddoPlano } = useParams();
    const { auth, login, definirplano } = useContext(AuthContext);
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
    , [])


    if(!plano){
        return(
            <h1>Carregando...</h1>
        )
    }

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
    };


    function confirmorcancel(e){
        if(e.target.textContent === "SIM"){
            axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", dados, {
                headers: {
                    "Authorization": `Bearer ${auth.token}`
                }
            })
            .then(
                (res) => {definirplano(res.data); navigate("/home") }
            )
        }
        else{
            setModal(false);
        }
    }


    return(
        <>
        {
            modal ? <><Modal name={plano.name} price={plano.price} dados ={dados} setModal={setModal} /><BlurredScreen /></>
            :
            <>
            <BackHeader />
            <SubLogo image={plano.image} name={plano.name} />
            <SubPlano perks={plano.perks} price={plano.price} />
            <SignForm onSubmit={fazercadastro}>
                <input type="text" name="cardName" placeholder="Nome impresso no cartão" onChange={alterardados} />
                <input type="text" name="cardNumber" placeholder="Digitos do cartão"  onChange={alterardados} />
                <div>
                <input type="text" name="securityNumber" placeholder="Código de segurança" onChange={alterardados} />
                <input type="text" name="expirationDate" placeholder="Validade"  onChange={alterardados}/>
                </div>
                <button type="submit">ASSINAR</button>
            </SignForm>
            </>

        }
        </>
    )

}

const BlurredScreen = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 3;
background: rgba(0, 0, 0, 0.7);
top: 0;
left: 0;
`