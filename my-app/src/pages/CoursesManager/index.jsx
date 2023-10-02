import "./style.css";
import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";
import { useState } from "react";

export const CourseManager = () => {
    const [name, setName] = useState("");
    const [descricao, setDescricao] = useState("");
    const [Instrutor, setInstrutor] = useState("");


    return(
        <div className="container">
            <Navbar/>
            <div className="container-course">
                <div className="wrap-course">
                    <form className="login-form" method="post">
                        <span className="login-form-title">Cadastro de Instrutor</span>
                        <span className="login-form-title">Dados Pessoais :</span>
                        <span className="login-form-title">
                        </span>
                        <div className="wrap-input">
                            <input required
                                className='input' 
                                type="text" 
                                placeholder='Nome do Curso'
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />  
                        </div>
                        <div className="wrap-input">
                            <input required
                                className='input' 
                                type="text" 
                                placeholder='Descrição'
                                value={descricao}
                                onChange={event => setDescricao(event.target.value)}
                            />
                        </div>
                        <div className="wrap-input">
                            <input required
                                className='input' 
                                type="text" 
                                placeholder='Instrutor'
                                value={Instrutor}
                                onChange={event => setInstrutor(event.target.value)}
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