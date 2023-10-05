import { LayoutPage } from "../../../components/LayoutPage";
import "./style.css"
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
                            //    value={name}
                               placeholder="Digite seu nome"
                            //    onChange={(event) => {
                            //        updateName(event.target.value);
                            //    }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input required type="email" name="email" id="email"
                            //    value={email}
                               placeholder="Digite seu E-mail"
                            //    onChange={(event) => {
                            //        updateEmail(event.target.value);
                            //    }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ra">RA</label>
                        <input required type="number" name="ra" id="ra"
                            //    value={fieldRa.value}
                            //    readOnly={fieldRa.isReadOnly}
                               placeholder="Digite o seu RA"
                            //    onChange={(event) => {
                            //        updateFieldRa({
                            //            ...fieldRa,
                            //            value: event.target.value
                            //        });
                            //    }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpf">CPF</label>
                        <input required type="number" name="cpf" id="cpf"
                            //    value={fieldCpf.value}
                            //    readOnly={fieldCpf.isReadOnly}
                               placeholder="Digite o seu CPF"
                            //    onChange={(event) => {
                            //        updateFieldCpf({
                            //            ...fieldCpf,
                            //            value: event.target.value
                            //        });
                            //    }}
                        />
                    </div>
                    <div className="actions">
                        <Link to="/admin/home" className="btn-cancel ">Cancelar</Link>
                        <button className="btn-save">Salvar</button>
                    </div>
                </form>
            </div>
        </LayoutPage>
    );
}