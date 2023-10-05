import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { LayoutPage } from "../../components/LayoutPage";

export const HomeAdmin = () => {

    return(
        <LayoutPage>
            <header className="main-header"> Sistema de Gestão</header>
            <div className="title-page">Gestão Geral</div>
            <div className="card">
                <div className="card-item">
                    <span className="card-title">Aluno</span>
                    <span className="card-texto">Define o processo de cadastro de alunos</span>
                    <Link to="/admin/cadastro-aluno" className="btn btn-home">Acessar</Link>
                </div>
                <div className="card-item">
                    <span className="card-title">Instrutor</span>
                    <span className="card-texto">Define o processo de cadastro de instutores</span>
                    <Link to="/admin/cadastro-aluno" className="btn btn-home">Acessar</Link>
                </div>
                <div className="card-item">
                    <span className="card-title">Curso</span>
                    <span className="card-texto">Define os cursos de programação que serão oferecidos para os alunos</span>
                    <Link to="/admin/cadastro-aluno" className="btn btn-home">Acessar</Link>
                </div>
                <div className="card-item">
                    <span className="card-title">Matricula</span>
                    <span className="card-texto">Define o processo de inscrição do aluno em um curso</span>
                    <Link to="/admin/cadastro-aluno" className="btn btn-home">Acessar</Link>
                </div>
            </div>
        </LayoutPage>
    );
}