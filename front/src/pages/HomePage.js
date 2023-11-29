import React from 'react';
import '../styles/componentes/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main>
            <div class="imagenInicio">
                <img src='img/Inicio.jpg' alt='Inicia'/>
            </div>
            <div class='holder'>
                <div class='textoInicio'>
                    <h2>
                    Raiz Serrana es una cooperativa de trabajo que nace en La Paz, una localidad del Valle de Traslasierra en Córdoba reconocida por ser la capital de las hierbas medicinales.
                    En esta parte del mapa, el consumo de yuyos con fines saludables forma parte de la cultura desde tiempos ancestrales. Nos importa transmitir estos saberes populares y hacer nuestro aporte en la protección del monte nativo.
                    Es por esto que nuestras hierbas son cosechadas de manera cuidada (teniendo en cuenta el calendario estacional de cada planta) y secadas a la sombra para preservar todas sus propiedades. Así garantizamos que lleguen a cada hogar con buen color, aroma y gusto.
                    </h2>
                </div>
            </div>
        </main>
    );

}

export default HomePage