import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Paginas/Home/Home'
import Sobre from './Paginas/Sobre/Sobre'
import Eventos from './Paginas/Eventos/Eventos'
import Contato from './Paginas/Contato/Contato'
import NaoEncontrada from './Paginas/NaoEncontrada/NaoEncontrada'
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
                    <Route path='/Eventos' exact component={Eventos} />
                    <Route path='/Contato' exact component={Contato} />
                    <Route component={NaoEncontrada} />
                </Switch>
        
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app-voluntariamos'))