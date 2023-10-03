import "./style.css";
import {Link} from "react-router-dom";
import { LayoutPage } from "../../components/LayoutPage";
import { useState } from "react";

export const InstructorManager = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [especializacao, setEspecializacao] = useState("");


    return(
        <LayoutPage>
            <header className="main-header"> Consulta de Instrutor</header>
            <form id="instructorForm" className="form" action="" method="post">
                <span className="form-title">Dados Pessoais:</span>
                <div className="form-group">
                    <label htmlFor="name">Nome do instrutor</label>
                    <input required type="text" name="name" id="name"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="email"
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="especializacao">Área de especialização</label>
                    <input required type="text" name="especializacao" id="especializacao"
                        placeholder="Digite a área de especialização"
                        value={especializacao}
                        onChange={event => setEspecializacao(event.target.value)}
                    />
                </div>
                <div className="actions">
                    <Link to="/admin/home" className="btn btn-cancel">Cancelar</Link>
                    <button className="btn btn-sucess">Salvar</button>
                </div>
            </form>
        </LayoutPage>
    );
}