import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const EditarFormularioMarca = ({
    marca,
    onChange,
    onSubmit
}) => {

    return (
        <div>
            <h3>Editar Marca</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombres:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                name="nombres"
                                placeholder="Ingrese Nombres"
                                value={marca.nombres}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Vigencia:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                name="Vigencia"
                                placeholder="Ingrese Vigencia"
                                value={marca.vigencia}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight:"10px" }}>
                            Modificar
                        </Button>
                        <Link to="/marca" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>                
            </Form>
        </div>
    );
}
export default EditarFormularioMarca;