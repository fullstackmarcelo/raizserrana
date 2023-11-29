import React from "react";
const HierbaItemCorte = (props) => {
    const{nombre, descripcion, picture} = props;
    return (
        <div>
             <div class="card-tienda">
                <h4 class="card-tienda-title">{nombre}</h4>
                <img src={picture} class='img-tienda-responsive' alt='Responsive image' />
                <div class="card-tienda-text">{descripcion}</div>
                <hr/>
             </div>
        </div>
    );
}

export default HierbaItemCorte;