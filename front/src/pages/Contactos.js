import React from 'react';
import '../styles/componentes/pages/contactos.css';
import { useState } from 'react';
import axios from 'axios';

const Contactos = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        mensaje: '',
        telefono: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange =  e => {
        const {value, name} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
    }));
    }
 
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/sendmail', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error == false){
            setFormData(initialForm)
        }
     }



    return (
        <main class='holder contacto'>
            <div>
                <h2>CONTACTO</h2>
                <form class="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar"/> </p>

                    {sending ? <p>Enviando....</p> : null}
                    {msg ? <p>{msg}</p> : null}

                </form>
            </div>
            <div class="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse por los siguientes medios:</p>
                <ul>
                    <li>Telefono: 54 9 3544 51-4133</li>
                    <li>e-mail: raizserrana@gmail.com</li>
                    <li>Oficinas: Velez Sarsfield esq Independencia. Local 2. </li>
                </ul>
            </div>

        </main>

    );

}

export default Contactos