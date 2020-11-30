import React from 'react'
import '../../Css/registro.css'
import {Link} from 'react-router-dom'



const RegistroContainer =({handleChange, nombre, apellido, usuario ,correo, clave, validarForm})=>(
    <div   className="container">


<div   className="row">
    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" onChange={handleChange}>
			<h2 style={{color:"white"}}>Registrese</h2>
			<hr   className="colorgraph"/>
			<div   className="row">
				<div   className="col-xs-12 col-sm-6 col-md-6">
					<div   className="form-group">
                        <input style={{border:(nombre)?"2px solid red":""}} type="text" name="nombre"   className="form-control input-lg" placeholder="Nombre(s)" tabIndex="1"/>
						{(nombre)?<span style={{color:"red"}}>Por favor rellene este campo</span>:""
}
					</div>
				</div>
				<div  className="col-xs-12 col-sm-6 col-md-6">
					<div  className="form-group">
						<input style={{border:(apellido)?"2px solid red":""}} type="text" name="apellido"    className="form-control input-lg" placeholder="Apellido(s)" tabIndex="2"/>
						{(apellido)?<span style={{color:"red"}}>Por favor rellene este campo</span>:""
}
					</div>
				</div>
			</div>
			<div  className="form-group">
				<input style={{border:(usuario)?"2px solid red":""}} type="text" name="usuario"  className="form-control input-lg" placeholder="Nombre de Usuario" tabIndex="3"/>
				{(usuario)?<span style={{color:"red"}}>Por favor rellene este campo</span>:""
}
			</div>
			<div  className="form-group">
				<input style={{border:(correo)?"2px solid red":""}} type="email" name="correo"   className="form-control input-lg" placeholder="Correo Electronico" tabIndex="4"/>
				{(correo)?<span style={{color:"red"}}>Por favor rellene este campo</span>:""
}
			</div>
			<div  className="row">
				<div  className="col-xs-12 col-sm-6 col-md-6">
					<div  className="form-group">
						<input style={{border:(clave)?"2px solid red":""}} type="password" name="clave"    className="form-control input-lg" placeholder="Clave" tabIndex="5"/>
						{(clave)?<span style={{color:"red"}}>Por favor rellene este campo</span>:""
}
					</div>
				</div>
				<div  className="col-xs-12 col-sm-6 col-md-6">
					<div  className="form-group">
						<input type="password" name="confirmClave"   className="form-control input-lg" placeholder="Confirmar Clave" tabIndex="6"/>
						{/* {(correo)?<span style={{color:"red"}}>Por favor rellene este campo</span>:""
} */}
					</div>
				</div>
			</div>
			
			<hr  className="colorgraph"/>
			<div  className="row">
				<div  className="col-xs-12 col-md-6"><input onClick={validarForm} type="submit" value="Registrarse"  className="btn btn-primary btn-block btn-lg" tabIndex="7"/></div>
				<div  className="col-xs-12 col-md-6"><Link to="/"  className="btn btn-success btn-block btn-lg">Iniciar Sesion</Link></div>
			</div>
	</div>
</div>
{/* <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/> */}
</div>
)

export default RegistroContainer
