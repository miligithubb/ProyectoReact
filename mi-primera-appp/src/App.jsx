import './App.css'
import { Button } from './components/Button'
import { ItemCount } from './components/itemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PostsContainer from './components/PostsContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Bienvenido!" />}/>
        <Route path='/Lista/:Lista' element={ <ItemListContainer greeting="Bienvenido!" />}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h1>Volve!</h1>} /> 
      </Routes>

    </BrowserRouter>


    </>
  ) ;
}

export default App;

