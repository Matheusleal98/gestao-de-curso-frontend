import "./style.css";
import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";
import { useState } from "react";

export const StudentManager = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");


    return(
        <div className="container">
            <Navbar/>
            <div className="container-aluno">
                <div className="wrap-aluno">
                    <form className="login-form" method="post">
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
                                placeholder='Data de Nascimento'
                                value={dataNascimento}
                                onChange={event => setDataNascimento(event.target.value)}
                            />
                        </div>
                        <div className="wrap-input">
                            <input required
                                className='input' 
                                type="text" 
                                placeholder='CPF'
                                value={cpf}
                                onChange={event => setCpf(event.target.value)}
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