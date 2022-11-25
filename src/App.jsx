
import { HashRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import InputName from './Components/InputName'
import Pokedex from './Components/Pokedex'
import PokedexDetail from './Components/PokedexDetail'
import ProtectedRoutes from './Components/ProtectedRoutes'


function App() {


  return (
    <HashRouter>
      <div className='App'>
        <Routes>
        <Route path='/' element={<InputName/>}/>
        
        <Route element={<ProtectedRoutes/>}>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokedex/:id' element={<PokedexDetail/>}/>
        </Route>
        </Routes>
        </div>
    </HashRouter>
  )
}

export default App
