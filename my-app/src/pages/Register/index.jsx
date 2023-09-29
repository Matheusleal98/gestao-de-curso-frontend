import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import { api } from '../../services/api'

export const Register = ()  => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSaveUser = async (e) => {
        e.preventDefault(); /** fica responsável por previnir o comportamento padrão e não deixa a página ser carregada*/
        const data = {
            email, name,password
        }

        const response = await api.post("/create", data);
        console.log(response.data);
    }
    return (
        <LayoutComponents>
            <form onSubmit={handleSaveUser} className="login-form" method="post">
                <span className="login-form-title">Criar conta</span>
                <span className="login-form-title">
                <img src={logo} alt=""></img>
                </span>
                <div className="wrap-input">
                    <input required
                        className='input' 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />  
                </div>
                <div className="wrap-input">
                    <input required
                        className='input' 
                        type="text" 
                        placeholder='Name'
                        value={name}
                        onChange={event => setName(event.target.value)}
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
                    <button type="submit" className="login-form-btn">Cadatrar</button>
                    </div>
                    <div className="text-center">
                    <span className="texto">Já possui conta?</span>
                    <Link to="/login" className="texto2">
                        Acessar conta.
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    );
};