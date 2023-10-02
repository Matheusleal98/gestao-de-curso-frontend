import "./style.css";
import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";
import { useState } from "react";

export const Registration = () => {
    const [aluno, setAluno] = useState("");
    const [curso, setCurso] = useState("");
    const [dataMatricula, setDataMatricula] = useState("");


    return(
        <div className="container">
            <Navbar/>
            <div className="container-registration">
                <div className="wrap-registration">
                    <form className="login-form" method="post">
                        <span className="login-form-title">Cadastro de Instrutor</span>
                        <span className="login-form-title">Dados Pessoais :</span>
                        <span className="login-form-title">
                        </span>
                        <div className="wrap-input">
                            <input required
                                className='input' 
                                type="text" 
                                placeholder='Aluno'
                                value={aluno}
                                onChange={event => setAluno(event.target.value)}
                            />  
                        </div>
                        <div className="wrap-input">
                            <input required
                                className='input' 
                                type="text" 
                                placeholder='Curso'
                                value={curso}
                                onChange={event => setCurso(event.target.value)}
                            />
                        </div>
                        <div className="wrap-input">
                            <input required
                                className='input' 
                                type="text" 
                                placeholder='Data Matrícula'
                                value={dataMatricula}
                                onChange={event => setDataMatricula(event.target.value)}
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