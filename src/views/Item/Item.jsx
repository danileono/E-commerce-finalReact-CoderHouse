import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = (props) => {

  const { agregarCarrito } = useContext(GlobalContext);

  // Desestructuración del producto desde las props
  const { id, image, title, description, price } = props.producto;

  return (
    <Card className="h-100">
      <Card.Img className="w-50 align-self-center p-2" src={image} alt={`foto del producto ${title}`} />
      <Card.Body className="d-flex flex-column align-content-end">
        <Card.Title>{title}</Card.Title>
        <Card.Text className='lh-1'><small>{description}</small></Card.Text>
        <Card.Text className="fw-bold">Precio: ${price}</Card.Text>
        <div className="mt-auto">
        <Button className='my-2 me-3' variant="dark" as={Link} to={`/detalle/${id}`}>
            Ver Detalle
          </Button>
          <Button className='my-2' variant="warning" onClick={() => agregarCarrito({ id, image, title, description, price })}>
            Agregar 🛒
          </Button>

        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
