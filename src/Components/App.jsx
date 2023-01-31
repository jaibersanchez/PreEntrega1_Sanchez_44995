
import './App.css'; 
import { ItemListContainer } from './ItemListContainer/ItemListContainer'

// Components
import {Navbar} from './Navbar/Navbar'

export const App = () => {
  return (
   <>
    <Navbar nombre={"Frida Beauty Shop"}/>
    <ItemListContainer greeting={5}/>
   </>
  )
}


 