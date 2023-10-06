import  "../../assets/globalPage.css";
import { useState } from "react";
import { LayoutPage } from "../../components/LayoutPage";
import { Link } from "react-router-dom";


export const EnrollStudent = () => {
    const [alunoSelecionado, setAlunoSelecionado] = useState('');
    const [cursoSelecionado, setCursoSelecionado] = useState('');
    const [alunos, setAlunos] = useState([
      'Aluno 1',
      'Aluno 2',
      'Aluno 3',
    ]);
    const [cursos, setCursos] = useState([
      'Curso 1',
      'Curso 2',
      'Curso 3',
    ]);
  
    const handleAlunoChange = (e) => {
      setAlunoSelecionado(e.target.value);
    };
  
    const handleCursoChange = (e) => {
      setCursoSelecionado(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Você pode adicionar lógica para processar a matrícula aqui
      console.log('Aluno selecionado:', alunoSelecionado);
      console.log('Curso selecionado:', cursoSelecionado);
    };
  
    return (
        <LayoutPage>
        <div className="title">Matricular aluno</div>
        <div className="matricula-container">
            <div className="card">
                <form onSubmit={handleSubmit} className="form" action="" method="post">
                    <div className="form-group">
                        <label htmlFor="aluno">Aluno:</label>
                        <select
                        id="aluno"
                        value={alunoSelecionado}
                        onChange={handleAlunoChange}
                        required
                        >
                        <option value="">Selecione um aluno</option>
                        {alunos.map((aluno, index) => (
                            <option key={index} value={aluno}>
                            {aluno}
                            </option>
                        ))}
                        </select>
                    </div>
                        
                    <div className="form-group">
                        <label htmlFor="curso">Curso:</label>
                        <select
                        id="curso"
                        value={cursoSelecionado}
                        onChange={handleCursoChange}
                        required
                        >
                        <option value="">Selecione um curso</option>
                        {cursos.map((curso, index) => (
                            <option key={index} value={curso}>
                            {curso}
                            </option>
                        ))}
                        </select>
                    </div>
                        
                    <div className="actions">
                        <Link to="/admin/home" className="btn btn-cancel">Cancelar</Link>
                        <button className="btn btn-save">Finalizar Matricula</button>
                    </div>
                </form>
            </div>
        </div>
      </LayoutPage>
    );
}