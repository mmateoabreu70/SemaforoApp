import React, { useState } from 'react'
import Menu from '../Components/Menu'

const Config =()=>(
<>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"/>
<Menu/>
<div class="containerrr">
	<div class="panel panel-default">
        <div class="panel-heading">
            <h1 class="panel-title">Configuraciones</h1>
        </div>   
        <ul class="list-group">
            <li class="list-group-item">
                <div class="row toggle" id="dropdown-detail-1" data-toggle="detail-1">
                    <div class="col-xs-10">
                        Usuario
                    </div>
                    <div class="col-xs-2"><i class="fa fa-chevron-down pull-right"></i></div>
                </div>
                <div id="detail-1">
                    <hr></hr>
                    <div class="containerrr">
                        <div class="">
                            <div class="col-xs-1">
                                Datos de Usuario
                            </div><br/>                        
                            <div class="col-xs-1">
                                Cuenta
                            </div><br/>                            
                            <div class="col-xs-1">
                                Cambiar Datos
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row toggle" id="dropdown-detail-2" data-toggle="detail-2">
                    <div class="col-xs-10">
                        Historial
                    </div>
                    <div class="col-xs-2"><i class="fa fa-chevron-down pull-right"></i></div>
                </div>
                <div id="detail-2">
                    <hr></hr>
                    <div class="containerrr">
                        <div class="fluid-row">
                            <div class="col-xs-1">
                                Eliminar Historial
                            </div><br/>
                            <div class="col-xs-1">
                                Ver Historial
                            </div>
                            {/* <div class="col-xs-1">
                                Detail:
                            </div>
                            <div class="col-xs-1">
                                Detail:
                            </div> */}
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row toggle" id="dropdown-detail-3" data-toggle="detail-3">
                    <div class="col-xs-10">
                        Accessibilidad
                    </div>
                    <div class="col-xs-2"><i class="fa fa-chevron-down pull-right"></i></div>
                </div>
                <div id="detail-3">
                    <hr></hr>
                    <div class="containerrr">
                        <div class="fluid-row">
                            <div class="col-xs-1">
                                Sonidos
                            </div><br/>
                            <div class="col-xs-1">
                                Vibraciones
                            </div><br/>
                            <div class="col-xs-1">
                                Pantalla
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
	</div>
</div>
</>

)

export default Config