import React, { useEffect, useState } from 'react';
import '../styles/componentes/pages/tienda.css';
import axios from 'axios';
import HierbaItem from '../components/hierbaItem';

const Tienda = (props) => {
    const [loading, setLoading] = useState(false);
    const [hierbas, setHierbas] = useState([]);

    useEffect(() => {
        const cargarHierbas = async() => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/hierbas');
            setHierbas(response.data);
            setLoading(false);
        };
        cargarHierbas();
    }, []);
    
    return (
        <div class='contenedor-tienda holder'>
                <div class="row-tienda">
                        { loading ? (<p>cargando....</p>) : (
                            hierbas.map((item) => 
                                <HierbaItem key={item.id}
                                nombre={item.nombre} descripcion={item.descripcion}
                                picture={item.picture}/>
                                )
                        ) }

                </div>
        </div>

    );

}

export default Tienda