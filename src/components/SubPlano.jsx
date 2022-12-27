import beneficios from "../assets/beneficios.svg";
import preço from "../assets/preço.svg";
import styled from "styled-components";

//perks e price
export default function SubPlano(props){
   return(
    <>
       <SubtitleContainer>
        <div>
            <img src={beneficios} />
            <h1>Benefícios:</h1>
        </div>
        <ol>
            {
                props.perks.map(
                    (p) => {
                        return(
                            <li>{p.title}</li>
                        )
                    }
                )
            }
        </ol>
       </SubtitleContainer>
       <SubtitleContainer>
            <div>
                <img src={preço} />
                <h1>Preço:</h1>
            </div>
            <h1>R$ {props.price} cobrados mensalmente</h1>
       </SubtitleContainer>
     </>  
   )
}

const SubtitleContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 12px;
width: 80%;

div{
    display: flex;
    gap: 4px;
    margin-bottom: 10px;
}

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;

ol li{
    font-size: 14px;
}
`