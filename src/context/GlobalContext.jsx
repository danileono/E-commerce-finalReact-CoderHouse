import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';


export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [producto, setProducto] = useState([]);
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (productoAgregado) => {
        setCarrito(currentCarrito => {
            // Buscar el producto en el carrito actual
            const productoEnElCarrito = currentCarrito.find(producto => producto.id === productoAgregado.id);
    
            if (productoEnElCarrito) {
                // Si el producto ya está en el carrito, se incrementa su cantidad
                return currentCarrito.map(producto =>
                    producto.id === productoAgregado.id
                        ? { ...producto, cantidad: producto.cantidad + 1 }
                        : producto
                );
            } else {
                // Si el producto no está en el carrito se agrega con cantidad 1
                return [...currentCarrito, { id: productoAgregado.id, info: productoAgregado, cantidad: 1 }];
            }
        });
    };
    

    const eliminarCarrito = (productoEliminado) => {
        setCarrito(currentCarrito => {
            const productoEnElCarrito = currentCarrito.find(producto => producto.id === productoEliminado.id);

            if (productoEnElCarrito) {
                if (productoEnElCarrito.cantidad > 1) {
                    // Se disminuye la cantidad solo si es mayor a 1
                    return currentCarrito.map(producto =>
                        producto.id === productoEliminado.id
                            ? { ...producto, cantidad: producto.cantidad - 1 }
                            : producto
                    );
                } else {
                    // Se elimina el producto del carrito si la cantidad llega a 0
                    return currentCarrito.filter(producto => producto.id !== productoEliminado.id);
                }
            }

            return currentCarrito;
        });
    };

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad * producto.info.price, 0);
    };



// Funcion para vaciar el carrito y mostrar un alert
const vaciarCarrito = () => {
    setCarrito([]);  // se vacía el carrito

    Swal.fire(
        '¡Vacío!',
        'Tu carrito ha sido vaciado.',
        'success'
    ).then(() => {
        navigate('/');  // Se redirige al home
    });
};

// llamar a la funcion solo cuando se apreta el boton vaciar
const handleVaciarCarrito = () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás recuperar los productos después de vaciar el carrito.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar'
    }).then((result) => {
        if (result.isConfirmed) {
            vaciarCarrito();  // Llama a la funcion para vaciar el carrito
        }
    });
};






//exporto las funciones para que se puedan usar en otros componentes
    const state = { producto, carrito, agregarCarrito, eliminarCarrito, calcularTotal, vaciarCarrito, handleVaciarCarrito };

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
