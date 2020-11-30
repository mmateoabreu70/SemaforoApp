import React, { useState } from 'react'
import RegistroContainer from './Containers/RegistroContainer'
import {Redirect} from 'react-router-dom';

//Installed
import axios from 'axios'

const Registro =()=>{ 
    
    const [datos, setDatos] = useState(
        {   nombre: "",
         apellido:"",
         correo:"",
         clave:"",
         usuario:""})
     const [nombre, setNombre] = useState(false)
     const [apellido, setApellido] = useState(false)
     const [correo, setCorreo] = useState(false)
     const [clave, setClave] = useState(false)
     const [usuario, setUsuario] = useState(false)
     const [vamonos, setVamonos] = useState(false)

     const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setDatos(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(name + ": " + value)
     }

     const validarForm =()=>{
         if(datos.nombre){
            setNombre(false)
         }else{
            setNombre(true)
         }

         if(datos.apellido){
            setApellido(false)
         }else{
            setApellido(true)
         }
         if(datos.usuario){
            setUsuario(false)
         }else{
            setUsuario(true)
         }
         if(datos.correo){
            setCorreo(false)
         }else{
            setCorreo(true)
         }
         if(datos.clave){
            setClave(false)
         }else{
            setClave(true)
         }
         if(datos.nombre && datos.apellido && datos.correo && datos.clave && datos.usuario){
            Enviar()
         }

      }

      const Enviar =()=>{
         const name = datos.nombre
         const lastName = datos.apellido
         const email = datos.correo
         const pass = datos.clave
         const user = datos.usuario

         var enviarDatos ={
            enombre :name,
            eapellido:lastName,
              ecorreo:email,
               eclave:pass,
             eusuario:user
         }

         console.log("=====enviarDatos====== ", enviarDatos)

         axios.post('http://localhost:3001/Registro', enviarDatos)
          .then(function (response) {
            console.log(response);
            setVamonos(true)
          })
          .catch(function (error) {
            console.log(error);
          });

     }

    return(
       <>
       {!vamonos? 
      <RegistroContainer
         handleChange= {handleChange}
         nombre ={nombre}
         apellido ={apellido}
         usuario ={usuario}
         correo ={correo}
         clave ={clave}
         validarForm ={validarForm}
      />
      :
      <Redirect to="/"/>
       }
       </>
      
)
}



export default Registro