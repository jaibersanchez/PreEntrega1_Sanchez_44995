import { RiShoppingCart2Fill } from "react-icons/ri";
export const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button><RiShoppingCart2Fill/></button>
            <p>{cantCarrito}</p>
        </>
    )
}

