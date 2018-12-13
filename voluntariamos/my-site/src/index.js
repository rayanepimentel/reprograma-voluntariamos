import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Paginas/Home/Home'
import Sobre from './Paginas/Sobre/Sobre'

import Ativos from './Paginas/Eventos/Ativos/Ativos'
import Divulgue from './Paginas/Eventos/Divulgue/Divulgue'
import Assine from './Paginas/Eventos/Assine/Assine'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cabecalho from './Componentes/Navbar/Navbar'

function App() {
    return (
        <div>
            <Cabecalho/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Sobre' exact component={Sobre} />
                    <Route path='/Divulgue' exact component={Divulgue} />
                    <Route path='/Assine' exact component={Assine} />
                    <Route path='/Ativos' exact component={Ativos} />
                </Switch>
        
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app-voluntariamos'))