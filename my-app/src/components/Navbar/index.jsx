import "./style.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className="main-nav">
            <header>
                Student Code
            </header>
            <ul className="nav-links">
                <Link to="/admin/cadastro-aluno" className="nav-item">
                    <li>Alunos</li>
                </Link>
            </ul>
            <ul className="nav-links">
                <Link to="/admin/cadastro-instrutor" className="nav-item">
                    <li>Instrutores</li>
                </Link>
            </ul>
        </nav>
    );
}