import "./style.css";
import {Link} from "react-router-dom";
import { LayoutPage } from "../../components/LayoutPage";
import { useState } from "react";

export const StudentManager = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");


    return(
        <LayoutPage>
            <header className="main-header"> Consulta de Aluno</header>
            <form id="studentForm" className="form" action="" method="post">
                <span className="form-title">Dados Pessoais:</span>
                <div className="form-group">
                    <label htmlFor="name">Nome do aluno</label>
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
                    <label htmlFor="cpf">CPF</label>
                    <input required type="number" name="cpf" id="cpf"
                        placeholder="Digite o seu CPF"
                        value={cpf}
                        onChange={event => setCpf(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data de nascimento</label>
                    <input required type="date" name="date" id="date"
                        value={dataNascimento}
                        onChange={event => setDataNascimento(event.target.value)}
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