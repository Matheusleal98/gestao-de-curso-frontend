import { useEffect, useState } from 'react';
import './style.css'
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";

export const Modal = ({ isOpen }) => {

    const {id} = useParams();

    const [ra, setRa] = useState();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [dtNascimento, setDtNascimento] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (isOpen && id) {
                try {
                    const response = await fetch(`http://localhost:8080/aluno/${id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setRa(data.ra);
                        setNome(data.nome);
                        setEmail(data.email);
                        setDtNascimento(data.dtNascimento);
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados do aluno:", error);
                }
            }
        };

        fetchData();
    }, [isOpen, id]);

    if (!isOpen) return null;
    
    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            ra,
            nome,
            email,
            dtNascimento
        };

        let methodEndpoint;
        let urlEndpoint;

        if (id) {
            methodEndpoint = "PUT";
            urlEndpoint = `htpp://localhost:8080/aluno/${id}`
        } else {
            methodEndpoint = "POST";
            urlEndpoint = "http://localhost:8080/aluno"
        }

        fetch(urlEndpoint, {
            method: methodEndpoint,
            body: JSON.stringify(body),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Parabéns!',
                    text: data.assunto,
                    showConfirmButton: false,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Desculpe...',
                    text: data.assunto,
                    showConfirmButton: false,
                });
            }
        })

    }

    return (
        <div className="container-modal">
            <div className='modal-body'>
            <form id="studentForm" className="page-form" action="" method="post" onSubmit={onSubmitForm}>
                <div className="page-form-group">
                    <label htmlFor="ra">RA</label>
                    <input required type="number" name="ra" id="ra"
                        value={ra}
                        onChange={(event) => {setRa(event.target.value)}}
                    />
                </div>
                <div className="page-form-group">
                    <label htmlFor="nome">Nome</label>
                    <input required type="text" name="nome" id="nome"
                        value={nome}
                        onChange={(event) => {setNome(event.target.value)}}
                    />
                </div>
                <div className="page-form-group">
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="email"
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                    />
                </div>
                <div className="page-form-group">
                    <label htmlFor="date">Data de Nascimento</label>
                    <input required type="date" name="date" id="date"
                        value={dtNascimento}
                        onChange={(event) => {setDtNascimento(event.target.value)}}
                    />
                </div>
                <div className="actions">
                    <button className="btn btn-save">Salvar</button>
                </div>
            </form>
            </div>
        </div>
    );
}