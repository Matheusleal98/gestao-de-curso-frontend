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
        fetch(`http://localhost:8080/admin/aluno/list`)
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

    // Function to close the modal
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
                             {/* {
                                this.state.studentsList.map((alunos) => {
                                    return (
                                        <tr key={alunos.id}>
                                            <td>{alunos.ra}</td>
                                            <td>{alunos.nome}</td>
                                            <td>{alunos.email}</td>
                                            <td>{alunos.dtNascimento}</td>
                                        </tr>
                                    );
                                })
                             }    */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <form id="studentForm" className="page-form" action="" method="post">
                        <div className="page-form-group">
                            <label htmlFor="ra">RA</label>
                            <input required type="number" name="ra" id="ra"
                            />
                        </div>
                        <div className="page-form-group">
                            <label htmlFor="nome">Nome</label>
                            <input required type="text" name="nome" id="nome"
                            />
                        </div>
                        <div className="page-form-group">
                            <label htmlFor="email">Email</label>
                            <input required type="email" name="email" id="email"
                            />
                        </div>
                        <div className="page-form-group">
                            <label htmlFor="date">Data de Nascimento</label>
                            <input required type="date" name="date" id="date"
                            />
                        </div>
                        <div className="actions">
                            <button className="btn btn-save">Salvar</button>
                            <button onClick={this.closeModal} className="btn btn-cancel">Cancelar</button>
                        </div>
                    </form>
                </Modal>
            </LayoutPage>
        );
    }
}

export default Student;