import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { LayoutPage } from "../../components/LayoutPage";

export const HomeAdmin = () => {

    return(
        <LayoutPage>
            <header className="main-header"> Sistema de Gestão</header>
            <div className="card">
                <Link to="/admin/cadastro-aluno" className="btn btn-home">
                    Cadastrar Aluno
                </Link>
                <Link to="#" className="btn btn-home">
                    Cadastrar Aluno
                </Link>
                <Link to="#" className="btn btn-home">
                    Cadastrar Aluno
                </Link>
                <Link to="#" className="btn btn-home">
                    Cadastrar Aluno
                </Link>
            </div>
        </LayoutPage>
    );
}