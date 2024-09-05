import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer.jsx'
import ItemListContainer from './views/ItemListContainer/ItemListContainer.jsx'
import Carrito from './views/Carrito/Carrito'
import NavigationBar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CheckoutForm from './views/CheckoutForm/CheckoutForm.jsx'


function App() {

  return (
    
    <BrowserRouter>
      <NavigationBar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoryName' element={<ItemListContainer/>} />      
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        <Route path='/carrito' element={ <Carrito /> }></Route>          
        <Route path='/pagar' element={ <CheckoutForm /> }></Route>          
      </Routes>

    
    </BrowserRouter>
    
  )
}

export default App



