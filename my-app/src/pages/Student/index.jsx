import React, { useState } from "react";
import { Modal } from "../../components/Modal";
import "../../assets/globalPage.css";
import { LayoutPage } from "../../components/LayoutPage";

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsList: [],
            modalOpen: false,
        }
    }


    componentDidMount() {
        this.fetchStudentList();
    }

    fetchStudentList = () => {
        fetch(`http://localhost:8080/aluno`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                studentsList: data
            });
        })
        .catch((errror) => {
            alert("Desculpe, mas não conseguimos estabelecer conexão com nosso servidor.")
        });
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }
    closeModal = () => {
        this.setState({ modalOpen: false });
    }
    
    render() {
        return(
            <LayoutPage>
                <div className="page-main-header">
                    <button className="btn-page" onClick={this.openModal}>Novo Aluno</button>
                </div>
                <div className="page-body">
                    <div className="page-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>RA</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Nascimento</th>
                                    <th className="acao">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                             {this.state.studentsList.map((alunos) => {
                                    return (
                                        <tr key={alunos.id}>
                                            <td>{alunos.ra}</td>
                                            <td>{alunos.nome}</td>
                                            <td>{alunos.email}</td>
                                            <td>{alunos.dtNascimento}</td>
                                        </tr>
                                    );
                                })
                             }   
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal isOpen={this.state.modalOpen}/>
            </LayoutPage>
        );
    }
}

export default Student;