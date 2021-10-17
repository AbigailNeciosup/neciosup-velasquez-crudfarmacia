import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AgregarFormularioTrabajador = ({
    trabajador,
    onChange,
    onSubmit
}) => {
    return (
        <div>
            <h3>Agregar Trabajador</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombre"
                                placeholder="Ingrese nombre"
                                value={trabajador.nombre}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="required">
                            <Form.Label>Apellidos Paternos:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="apellidosPaternos"
                                placeholder="Ingrese Apellidos Paternos"
                                value={trabajador.apellidosPaternos}
                                onChange={onChange}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col>
                        <Form.Group className="required">
                            <Form.Label>Apellidos Maternos:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="apellidosMaternos"
                                placeholder="Ingrese Apellidos Maternos"
                                value={trabajador.apellidosMaternos}
                                onChange={onChange}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="required">
                            <Form.Label>Tipo deDocumento:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="tipoDocumento"
                                value={trabajador.tipoDocumento}
                                onChange={onChange}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col>
                        <Form.Group className="required">
                            <Form.Label>Numero Documento</Form.Label>
                            <Form.Control
                                size="sm"
                                type="number"
                                name="numeroDocumento"
                                value={trabajador.numeroDocumento}
                                onChange={onChange}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="required">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                size="sm"
                                type="email"
                                name="correo"
                                value={trabajador.correo}
                                onChange={onChange}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col>
                        <Form.Group className="required">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control
                                size="sm"
                                type="number"
                                name="celular"
                                value={trabajador.celular}
                                onChange={onChange}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Registrar
                        </Button>
                        <Link to="/documento" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AgregarFormularioTrabajador
