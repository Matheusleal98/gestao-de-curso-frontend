import { useState } from "react";
import { Modal } from "../../components/Modal";
import "../../assets/globalPage.css";
import { LayoutPage } from "../../components/LayoutPage";

export const Student = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return(
        <LayoutPage>
            <div className="page-main-header">
                <button className="btn-page" onClick={()=> { setModalOpen(true); }}>Novo Aluno</button>
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
                                <th class="acao">Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={modalOpen}>
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
                        <button onClick={() => { setModalOpen(false); }} className="btn btn-cancel">Cancelar</button>
                    </div>
                </form>
            </Modal>
        </LayoutPage>
    );
}