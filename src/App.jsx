import RegisterForm from "./LoginRegister/RegisterForm.jsx";
import LoginForm from "./LoginRegister/LoginForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles.css';
import HomePage from "./MainPages/HomePage.jsx";
import UserPage from "./MainPages/UserPage.jsx";
import UserProfile from "./MainPages/UserProfile.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterForm />}/>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/users/:id" element={<UserPage />}/>
                <Route path="/profile" element={<UserProfile />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
