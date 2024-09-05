import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../service/firebaseConfig';

const CheckoutForm = () => {
const { carrito, calcularTotal, vaciarCarrito } = useContext(GlobalContext); 
const [nombre, setNombre] = useState('');
const [direccion, setDireccion] = useState('');
const [email, setEmail] = useState('');
const [metodoPago, setMetodoPago] = useState('creditCard');
const [error, setError] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);

// Funcion para manejar el envío del form
const handleSubmit = async (event) => {
event.preventDefault();

// Validación del form
if (!nombre || !direccion || !email) {
    setError('Por favor, completa todos los campos.');
    return;
}

// Validación del formato del correo 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    setError('Por favor, ingresa una dirección de correo válida.');
    return;
}

setIsSubmitting(true);

const usuario = {
    nombre,
    email, 
    direccion
};

const orden = {
    carrito,
    usuario
};

try {
    const orderRef = collection(db, "ordenes");
    const orderID = await addDoc(orderRef, orden);

    // Mostrar alert de éxito
    await Swal.fire({
    title: 'Compra realizada con éxito',
    html: `
    Número de orden: ${orderID.id}<br>
    Total: $${calcularTotal()}
    `,
    icon: 'success',
    confirmButtonText: 'Aceptar'
    }).then((result) => {
    if (result.isConfirmed) {
        // Se vacia el carrito después de confirmar
        vaciarCarrito();
    }
    });

    // Se limpia el form después del pago
    setNombre('');
    setDireccion('');
    setEmail('');
    setMetodoPago('creditCard');
    setError('');
} catch (error) {
    console.error("Error al crear la orden: ", error);
    setError('Ocurrió un error al procesar tu orden. Por favor, intenta nuevamente.');
} finally {
    setIsSubmitting(false);
}
};

return (
<Container className="my-5">
    <Row className="justify-content-center">
    <Col md={8} lg={6}>
        <div className="border p-4 rounded shadow-sm bg-light">
        <h2 className="text-center mb-4">Formulario de Pago</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                isInvalid={!!error}
            />
            </Form.Group>

            <Form.Group controlId="formDireccion" className="mt-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                isInvalid={!!error}
            />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!error}
            />
            </Form.Group>

            <Form.Group controlId="formMetodoPago" className="mt-3">
            <Form.Label>Medio de Pago</Form.Label>
            <Form.Control
                as="select"
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value)}
            >
                <option value="creditCard">Tarjeta de Crédito</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Transferencia Bancaria</option>
            </Form.Control>
            </Form.Group>

            {error && (
            <div className="alert alert-danger mt-3">
                {error}
            </div>
            )}

            <Button variant="primary" type="submit" disabled={isSubmitting} className="mt-4 w-100">
            Pagar
            </Button>
        </Form>
        </div>
    </Col>
    </Row>
</Container>
);
};

export default CheckoutForm;
