import { LayoutPage } from "../../../components/LayoutPage";
import "../../../assets/globalPage.css"
import { Link } from "react-router-dom";

export const StudentManager = () => {

    return(
        <LayoutPage>
            <div className="title">Adcionar aluno</div>
            <div className="card">
                <form id="studentForm" className="form" action="" method="post">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input required type="text" name="name" id="name"
                               placeholder="Digite seu nome"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input required type="email" name="email" id="email"
                               placeholder="Digite seu E-mail"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ra">RA</label>
                        <input required type="number" name="ra" id="ra"
                               placeholder="Digite o seu RA"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpf">CPF</label>
                        <input required type="number" name="cpf" id="cpf"
                               placeholder="Digite o seu CPF"
                        />
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