import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from './pages/SignUpPage.jsx';
import SubscriptionsPage from './pages/SubscriptionsPage.jsx';
import SubscriptionPage from './pages/SubscriptionPage.jsx';
import HomePage from './pages/HomePage.jsx';
import { AuthProvider } from "./contexts/AuthContext";

export default function App(){
    return(
        <>
        <AuthProvider>
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
        </AuthProvider>
        </>
    )
}