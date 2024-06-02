import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {AuthContext} from './context/AuthContext'
import {useAuth} from "./hooks/auth.hook"
// import Header from "./Pages/Header/Header";
import PrivatRouter from "./router/PRouter";
import MainPage from "./Pages/Main/MainPage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Projects from "./Pages/Ptojects/Projects";
import Layout from "./Pages/Layout/Layout";
import Renders from "./Pages/Renders/Renders";

function App() {
    const {login, logout, token, userId, isReady, logoName} = useAuth()
    const isLogin = !!token

    return (
        <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin, logoName}}>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout isLogin={isLogin}/>}>
                            <Route element={<PrivatRouter/>}>
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="/renders" element={<Renders/>}/>
                            </Route>
                            <Route path="/" element={<MainPage isLogin={isLogin}/>}/>
                            <Route path="/login" element={<SignIn/>}/>
                            <Route path="/registration" element={<SignUp/>}/>
                            <Route path="*" element={<MainPage isLogin={isLogin}/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
