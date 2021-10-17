import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const EditarFormularioProducto = ({
    producto,
    onChange,
    onSubmit
}) => {

    return (
        <div>
            <h3>Editar Producto</h3>
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
                                value={producto.nombres}
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
                                value={producto.vigencia}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                        <Form.Label>Marca</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                name="marca"
                                placeholder="Ingrese la marca"
                                value={producto.marca}
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
                        <Link to="/producto" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>                
            </Form>
        </div>
    );
}

export default EditarFormularioProducto;