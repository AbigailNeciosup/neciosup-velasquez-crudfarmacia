import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';
import EditarFormularioProducto from '../../componentes/producto/EditarFormularioProducto';

const EditarProducto = () => {
    const [producto, setProducto] = useState({
        nombres: '',
        vigencia: '',
        marca: ''
    });

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const datos = await buscar('/producto', id);
                setProducto({
                    nombres: datos.nombre,
                    vigencia: datos.vigencia,
                    marca: datos.idMarca,
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchProducto();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setProducto({
            ...producto,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const productoModificado = await modificar('/producto', id, producto);
                console.log(productoModificado);
                history.push('/producto');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <EditarFormularioProducto
                producto={producto}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarProducto;