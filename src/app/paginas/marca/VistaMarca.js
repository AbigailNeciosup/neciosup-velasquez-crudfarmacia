import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaMarca from '../../componentes/marca/TablaMarca';

const VistaMarca = () => {
    const { datos: listaMarca } = useFetch('/marca');
    
    return (
        <TablaMarca
            listaMarca={listaMarca}
        />
    );
}

export default VistaMarca;