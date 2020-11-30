import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ModuloRegistro from './Pages/ModuloRegistro'
import ModuloLogin from './Pages/ModuloLogin'
import Historial from './Pages/Historial'
import SideBarContainer from './Components/Containers/SideBarContainer'



const App = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ModuloLogin} />
            <Route exact path="/registro" component={ModuloRegistro} />
            <Route exact path="/principal" component={SideBarContainer} />
            <Route exact path="/historial" component={Historial} />
        </Switch>
        </BrowserRouter>
)

export default App;
