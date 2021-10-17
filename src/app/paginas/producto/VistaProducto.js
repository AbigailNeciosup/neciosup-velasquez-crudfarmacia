import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaProducto from '../../componentes/producto/TablaProducto';

const VistaAutor = () => {
    const { datos: listaProducto } = useFetch('/producto');
    
    return (
        <TablaProducto
            listaProducto={listaProducto}
        />
    );
}

export default VistaAutor;