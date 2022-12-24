import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle.jsx";

export default function App(){
    return(
        <>
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/subscriptions/:iddoPlano" element={<SubscriptionPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}