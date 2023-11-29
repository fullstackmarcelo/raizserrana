import React from 'react';
import '../styles/componentes/pages/tienda.css';

const Tienda = (props) => {
    return (
        <div class='contenedor-tienda holder'>
            <div class="row-tienda">
                <div class="card-tienda">
                    <img src='img/ambay.jpg' class='img-tienda-responsive' alt='Responsive image'/>
                    <h4 class="card-tienda-title">AMBAY</h4>
                    <div class="card-tienda-text">
                        <p>Para las afecciones respiratorias catarros y problemas en las vías respiratorias como resfríos, tos,asma, bronquitis, pulmonía, neumonía, enfisema y angina. Para el corazón, regulariza los latidos del corazón. Alivia las palpitaciones generadas por los nervios, fortalece el corazón y mejora el funcionamiento del sistema circulatorio. Antiespasmódico. Antioxidantes. Antipirético. Antitusivo. Astringente. Descongestiva. Diurética. Sedante</p>
                    </div>
                </div>
                <div class="card-tienda">
                    <img src='img/colacaballo.jpg' class='img-tienda-responsive' alt='Responsive image'/>
                    <h4 class="card-tienda-title">COLA DE CABALLO</h4>
                    <div class="card-tienda-text">
                        <p>La Cola de Caballo se destaca por su alto contenido mineral y sus propiedades diuréticas. Se utiliza para tratar las infecciones urinarias como la cistitis y la uretritis, actuando sobre los riñones para liberar cálculos y arenillas. También se utiliza para tratar problemas de próstata, edemas y retención de líquidos. Su acción depurativa es de gran ayuda para el estómago y los intestinos. Asimismo, se utiliza para tratar afecciones del sistema respiratorio, tales como infecciones pulmonares.</p>
                    </div>
                </div>
            </div>
            <div class="row-tienda">
                <div class="card-tienda">
                    <img src="img/espinacolorada.jpg" class="img-tienda-responsive" alt="Responsive image"/>
                    <h5 class="card-tienda-title">ESPINA COLORADA</h5>
                    <div class="card-tienda-text">
                        <p>Alivia cólicos y afecciones hepáticas, controla la hipertensión arterial, el reumatismo, el ácido úrico, los espasmos hepáticos como la cirrosis, también es un buen diurético. Es ideal para combatir la afecciones de la gastritis, hígado, vesícula, pesadez del estómago, cólicos hepáticos. Puede controlar excelentemente las piedras en la vesícula, controla los dolores reumáticos. Prostatitis. También tiene propiedades abortivas, por eso está prohibido el consumo durante el embarazo</p>
                    </div>
                </div>
                <div class="card-tienda">
                    <img src="img/cedron.jpg" class="img-tienda-responsive" alt="Responsive image"/>
                    <h5 class="card-tienda-title">CEDRÓN</h5>
                    <div class="card-tienda-text">
                        <p>El Cedrón se destaca por sus propiedades digestivas y relajantes. Es ideal para tratar el insomnio. Colabora con las digestiones lentas, libera de gases y es antidiarreico. Ayuda a calmar el sistema nervioso ya que posee propiedades ansiolíticas. Es antiespasmódico (alivia o calma los espasmos o convulsiones). Controla las reacciones alérgicas y los dolores reumáticos. Puede utilizarse en buches para combatir el mal aliento y si se coloca sobre la mejilla a modo de compresa de hojas machacadas, alivia el dolor de muelas</p>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default Tienda