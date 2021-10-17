import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import AgregarFormularioProducto from '../../componentes/producto/AgregarFormularioProducto';

const AgregarProducto = () => {
    const [ producto, setProducto ] = useState({
        nombres: '',
        vigencia: 0,
        marca: ''
    });

    const history = useHistory();

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
                const nuevoProducto = await crear('/producto', producto);
                console.log(nuevoProducto);
                history.push('/productos');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <AgregarFormularioProducto
                producto={producto}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AgregarProducto;