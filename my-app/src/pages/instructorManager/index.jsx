import "./style.css";
import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";
import { useState } from "react";

export const InstructorManager = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [especializacao, setEspecializacao] = useState("");


    return(
        <div className="container">
            <Navbar/>
            <div className="container-instructor">
                <div className="wrap-instructor">
                    <form className="login-form" method="post">
                        <span className="login-form-title">Cadastro de Instrutor</span>
                        <span className="login-form-title">Dados Pessoais :</span>
                        <span className="login-form-title">
                        </span>
                        <div className="wrap-input">
                            <input required
                                className='input' 
                                type="text" 
                                placeholder='Nome Completo'
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />  
                        </div>
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
                                placeholder='Área de Especialização'
                                value={especializacao}
                                onChange={event => setEspecializacao(event.target.value)}
                            />
                        </div>
                        <div className="container-login-form-btn">
                            <button type="submit" className="login-form-btn">Salvar</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    );
}