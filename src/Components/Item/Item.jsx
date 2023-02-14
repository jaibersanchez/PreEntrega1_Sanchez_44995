import { Link } from "react-router-dom";

export const Item = ({item}) => {
    return (

        <div className="card mb-3 cardProducto border-light">
            <img src={`/img/${item.img}`} className="card-img-top" alt={`imagen de ${item.title}`} />
            <div className="card-body cardBody">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.precio}</p>
                <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
            </div>
        </div>
    );
}


