import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaMarca = ({ listaMarca }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Id</th>
                <th>Nombres</th>
                <th>Vigencia</th>
            </tr>
        );
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaMarca.map((marca) => (
                <tr key={marca.id}>
                    <th>{numero+=1}</th>
                    <td>{marca.nombre}</td>
                    <td>{marca.vigencia}</td>
                    <td>
                        <Link to={"/editarMarca/" + marca.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Marcas</h3>
            <Link to="/agregarMarca" className="btn btn-primary mb-2">
                Agregar
            </Link>
            <Table responsive>
                <thead className="bg-dark text-light">
                    { encabezado() }
                </thead>
                <tbody>
                    { celdas() }
                </tbody>
            </Table>
        </>
    );
}

export default TablaMarca;