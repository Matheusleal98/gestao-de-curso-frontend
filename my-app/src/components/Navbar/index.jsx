import "./style.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className="main-nav">
            <header>
                Student Code
            </header>
            <ul className="nav-links">
                <Link to="#" className="nav-item">
                    <li>Alunos</li>
                </Link>
            </ul>
            <ul className="nav-links">
                <Link to="#" className="nav-item">
                    <li>Instrutores</li>
                </Link>
            </ul>
            <ul className="nav-links">
                <Link to="#" className="nav-item">
                    <li>Cursos</li>
                </Link>
            </ul>
            <ul className="nav-links">
                <Link to="#" className="nav-item">
                    <li>Matricula</li>
                </Link>
            </ul>
        </nav>
    );
}