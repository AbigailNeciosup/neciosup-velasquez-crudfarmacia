import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BarraNavegacion from './app/comunes/barraNavegacion/BarraNavegacion';
import AgregarMarca from './app/paginas/marca/AgregarMarca';
import EditarMarca from './app/paginas/marca/EditarMarca';
import VistaMarca from './app/paginas/marca/VistaMarca';
import AgregarProducto from './app/paginas/producto/AgregarProducto';
import EditarProducto from './app/paginas/producto/EditarProducto';
import VistaProducto from './app/paginas/producto/VistaProducto';
import AgregarTrabajador from './app/paginas/trabajador/AgregarTrabajador';
import EditarTrabajador from './app/paginas/trabajador/EditarTrabajador';
import VistaTrabajador from './app/paginas/trabajador/VistaTrabajador';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <BarraNavegacion />
            <div className="container mt-4">
              <Switch>
                    <Route path="/marca" exact><VistaMarca/></Route>
                    <Route path="/agregarMarca" exact><AgregarMarca/></Route>
                    <Route path="/editarMarca/:id" exact><EditarMarca/></Route>
                    <Route path="/producto" exact><VistaProducto/></Route>
                    <Route path="/agregarProductos" exact><AgregarProducto/></Route>
                    <Route path="/editarProducto/:id" exact><EditarProducto/></Route>
                    <Route path="/trabajador" exact><VistaTrabajador/></Route>
                    <Route path="/agregarTrabajador" exact><AgregarTrabajador/></Route>
                    <Route path="/editarTrabajador/:id" exact><EditarTrabajador/></Route>
              </Switch>
            </div>
    </BrowserRouter>
    
      
  );
}

export default App;
