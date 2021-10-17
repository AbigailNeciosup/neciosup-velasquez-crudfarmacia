import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaTrabajador = ({ listaTrabajador }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Id</th>
                <th>Nombres</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>           
                <th>Tipo Documento</th>
                <th>Numero Documento</th>
                <th>Correo</th>
                <th>Celular</th>
            </tr>
        );
    }

    const celdas = () => {
        let numeros=0;
        return (
            listaTrabajador.map((trabajador) => (
                <tr key={trabajador.id}>
                    <th>{numeros+= 1}</th>
                    <td>{trabajador.nombre}</td>
                    <td>{trabajador.apellidoPaterno}</td>
                    <td>{trabajador.apellidoMaterno}</td>
                    <td>{trabajador.tipoDocumento}</td>
                    <td>{trabajador.numeroDocumento}</td>
                    <td>{trabajador.correo}</td>
                    <td>{trabajador.celular}</td>
                    <td>
                        <Link to={"/editarTrabajador/" + trabajador.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Trabajadores</h3>
            <Link to="/agregarTrabajador" className="btn btn-primary mb-2">
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

export default TablaTrabajador;