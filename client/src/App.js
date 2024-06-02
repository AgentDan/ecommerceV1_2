import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {AuthContext} from './context/AuthContext'
import {useAuth} from "./hooks/auth.hook"
import MainPage from "./Pages/Main/MainPage"
import Table from "./Pages/Table/Table"
import Chair from "./Pages/Chair/Chair"
import {Menu} from "./Pages/Menu/Menu";
import {useState} from "react";
import Rack from "./Pages/Rack/Rack";
import Lamp from "./Pages/Lamp/Lamp";

function App() {
    const {login, logout, token, userId, isReady, logoName} = useAuth()
    const isLogin = !!token
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin, logoName}}>
            <div>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/table" element={<Table setMenuOpened={setMenuOpened}/>}/>
                            <Route path="/chair" element={<Chair/>}/>
                            <Route path="/rack" element={<Rack/>}/>
                            <Route path="/lamp" element={<Lamp/>}/>
                            <Route path="*" element={<MainPage/>}/>
                    </Routes>
                    <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} isLogin={isLogin}/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    )
}

export default App
