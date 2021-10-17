import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AgregarFormularioMarca = ({
    marca,
    onChange,
    onSubmit
}) => {
    return (
        <div>
            <h3>Agregar Marca</h3>
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
                                value={marca.nombre}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="required">
                            <Form.Label>vigencia:</Form.Label>
                            <Form.Control
                                size="sm"
                                as="select"
                                name="vigencia"
                                placeholder="Ingrese país"
                                value={marca.vigencia}
                                onChange={onChange}
                                required
                            >
                                <option value="">-- Seleccionar --</option>
                                <option value="1">activa</option>
                                <option value="0">inactiva</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Registrar
                        </Button>
                        <Link to="/marca" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AgregarFormularioMarca
