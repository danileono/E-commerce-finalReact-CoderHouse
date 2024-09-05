import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom'

const Carrito = () => {
    const { carrito, agregarCarrito, eliminarCarrito, calcularTotal, vaciarCarrito, handleVaciarCarrito } = useContext(GlobalContext);

    // Verificar si hay productos en el carrito
    const tieneProductos = carrito.length > 0;

    return (
        <>
            <h2>Detalle de tu compra</h2>
            <table className="table table-hover d-flex justify-content-center px-5 mt-5">
                <tbody>
                    {carrito.map(({ id, info, cantidad }) => (
                        <tr key={id}>
                            <td className='td-dani'><img className="cart-img w-25" src={info.image} alt={info.title} /></td>
                            <td>{info.title}</td>   
                            <td>${info.price * cantidad}</td>
                            <td>
                                <Button variant="danger" onClick={() => eliminarCarrito(info)}>-</Button>
                            </td>
                            <td>{cantidad}</td>
                            <td>
                                <Button variant="dark" onClick={() => agregarCarrito(info)}>+</Button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="6"><h3>Total: ${calcularTotal()}</h3></td>
                    </tr>
                    
                    {tieneProductos && (
                    <tr className='d-flex justify-content-center mx-auto'>
                            <td colSpan="6" className="text-center">
                                <Button variant="danger" onClick={handleVaciarCarrito}>Vaciar Carrito</Button>
                            </td>
                        <td colSpan="6" className="text-center">
                            <Link to="/pagar">
                                <Button variant="success">Pagar</Button>
                            </Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Carrito;
