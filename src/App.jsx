
import './App.css'

import RegisterPage from "./pages/RegisterForm/RegisterPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Main from "./components/Main/Main.jsx";
import {useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {

  const [login, setLogin] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('stToken')

    if (key !== null){
      setLogin(true);
    }
    else {
      setLogin(false);
    }
  }, []);


  return (

<>
  {
    login ?
        <Main/>
        :
        <div>
          <Routes>
            <Route path={'*'} element={<Navigate to={'/login'}/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
            <Route path={'/login'} element={<Login/>}/>
          </Routes>
        </div>

  }

</>

  )
}

export default App
