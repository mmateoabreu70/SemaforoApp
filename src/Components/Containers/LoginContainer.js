import React from 'react'
import '../../Css/registro.css'
import {Link} from 'react-router-dom'


const LoginContainer =({handleChange,  usuario , clave, validarForm, errol})=>(

<div className="container">



	<div className="incontainer">
<div   className="row">
    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" onChange={handleChange}>
			<h2 style={{color:"white"}}>Iniciar Sesion</h2>
			<hr   className="colorgraph"/>
			{errol?<span style={{color:"red"}}>Nombre de Usuario o Clave incorrectos</span>:""}
			<div   className="row">
				<div   className="col-xs-12 col-sm-6 col-md-6">
					<div   className="form-group">
                        <input style={{border:(usuario)?"2px solid red":""}} type="text" name="usuario"   className="form-control input-lg" placeholder="Usuario" tabIndex="1" />
						{(usuario)?<span style={{color:"red"}}>Por favor rellene este campo</span>:""
}
					</div>
				</div>				
			</div>
			<div   className="row">
			<div  className="col-xs-12 col-sm-6 col-md-6">
					<div  className="form-group">
						<input style={{border:(clave)?"2px solid red":""}} type="password" name="clave"    className="form-control input-lg" placeholder="Clave" tabIndex="2"/>
						{(clave)?<span style={{color:"red"}}>Por favor rellene este campo</span>:""
}
					</div>
				</div>
			</div>
			
			<hr  className="colorgraph"/>
			<div  className="row">
				<div  className="col-xs-12 col-md-6">
                    <input onClick={validarForm} type="submit" value="Iniciar Sesion"  
                    className="btn btn-success btn-block btn-lg" tabIndex="7"/>
                    </div>
			</div>
			<p style={{color:"white"}}>No tienes una cuenta? <Link to="/registro">Registrate</Link></p>
	</div>
</div>
</div>
</div>
)

export default LoginContainer