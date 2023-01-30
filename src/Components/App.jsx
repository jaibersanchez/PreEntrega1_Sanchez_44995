
import './App.css'; 
import { CartWidget } from './CartWidget/CartWidget';

// Components
import {Navbar} from './Navbar/Navbar'

export const App = () => {
  return (
   <>
    <Navbar nombre={"Frida Beauty Shop"}/>
    <CartWidget cantCarrito={5}/>
   </>
  )
}


 