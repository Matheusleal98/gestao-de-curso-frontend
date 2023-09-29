import './style.css'
import logo from './img/logo.png';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from "sweetalert2";

function App() {
  const  [isRedirect, setIsRedirect] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    const body = {
      login,
      password
    };

    /** PARAMÊTROS */
    let methodEndpoint;
    let urlEndpoint;

    methodEndpoint = "POST";
    urlEndpoint = `http://localhost:8080/login`;

    fetch(urlEndpoint, {
      method: methodEndpoint,
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if(result) {
        Swal.fire({
            icon: 'success',
            title: 'Parabéns!',
            text: result,
            showConfirmButton: false,
        });

        setIsRedirect(true);
      } else {
        Swal.fire({
            icon: 'error',
            title: 'Desculpe...',
            text: result,
            showConfirmButton: false,
        });
      }
    })
  }

  if(isRedirect) {
    return <Navigate to="/"/>;
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form action="" className="login-form" method="post" onSubmit={onSubmitForm}>
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
              <img src={logo} alt=""></img>
            </span>
            <div className="wrap-input">
              <input required
                className='input' 
                type="text" 
                placeholder='Login'
                value={login}
                onChange={event => setLogin(event.target.value)}
              />
            </div>
            <div className="wrap-input">
              <input required
                className='input' 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
            <div className="text-center">
              <span className="texto">Não possui conta?</span>
              <a href="#" className="texto2">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
