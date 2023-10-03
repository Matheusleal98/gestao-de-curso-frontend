import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Navbar } from "../../components/Navbar";

export const HomeAdmin = () => {

    return(
    <div className="main-container">
            <Navbar/>
        <section className="container">
            <div className="content-page">
                <header className="main-header"> Sistema de Gestão</header>
                <div className="card">
                    <Link to="#" className="btn btn-home">
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
            </div>
        </section>
    </div>
    );
}