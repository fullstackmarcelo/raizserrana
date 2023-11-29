import React from "react";
const HierbaItem = (props) => {
    const{nombre, descripcion, picture} = props;
    return (
        <div class="card-tienda">
            <h4 class="card-tienda-title">{nombre}</h4>
            <img src={picture} class='center' alt='Responsive image' width="500px"  />
            <div class="card-tienda-text">{descripcion}</div>
            <hr/>
        </div>
    );
}

export default HierbaItem;