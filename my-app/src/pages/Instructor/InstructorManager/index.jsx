import { LayoutPage } from "../../../components/LayoutPage";
import { Link } from "react-router-dom";
import "../../../assets/globalPage.css";

export const InstructorManager = () => {

    return(
        <LayoutPage>
            <div className="title">Adcionar instrutor</div>
            <div className="card">
                <form id="studentForm" className="form" action="" method="post">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input required type="text" name="name" id="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input required type="email" name="email" id="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="especializacao">Especialização</label>
                        <select required name="especializacao" id="especializacao">
                            <option value="">Selecione uma especialização</option>
                            <option value="web-development">Desenvolvimento Web</option>
                            <option value="mobile-development">Desenvolvimento Mobile</option>
                            <option value="data-science">Ciência de Dados</option>
                        </select>
                    </div>
                    <div className="actions">
                        <Link to="/admin/home" className="btn btn-cancel">Cancelar</Link>
                        <button className="btn btn-save">Finalizar Cadastro</button>
                    </div>
                </form>
            </div>
        </LayoutPage>
    );
}