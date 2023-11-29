import React from 'react';
import '../styles/componentes/pages/reserva.css';

const Reserva = (props) => {
    return (
        <div class="holder">
            <div class="texto-reserva">
                <h3>
                    La Reserva Natural "Los Mates" es un campo de 120 hectáreas ubicado en La Paz, Córdoba que posee un 75 % de monte nativo de las características de chaco seco y el resto en estado de recuperación.

                    Es por esto que desde Raíz Serrana diseñamos un plan de manejo para potenciar estas oportunidades que se sostiene en 4 ejes principales:
                    <ul>
                        <li>Preservación</li>
                        <li>Educación</li>
                        <li>Producción sustentable</li>
                        <li>Sostenibilidad económica</li>
                    </ul>
                </h3>
            </div>
            <div>
                <img src="img/reserva.jpg" class="imagen-reserva"/>
            </div>
        </div>

    );

}

export default Reserva