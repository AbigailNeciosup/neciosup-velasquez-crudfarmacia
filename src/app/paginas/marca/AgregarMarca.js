import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import AgregarFormularioMarca from '../../componentes/marca/AgregarFormularioMarca';

const AgregarMarca = () => {
    const [ marca, setmarca ] = useState({
        nombre: '',
        vigencia:0
    });
    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setmarca({
            ...marca,
            [nombre]: valor
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const nuevamarca = await crear('/marca', marca);
                console.log(nuevamarca);
                history.push('/marcas');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }
    return (
        <AgregarFormularioMarca
        marca={marca}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
    )
}

export default AgregarMarca