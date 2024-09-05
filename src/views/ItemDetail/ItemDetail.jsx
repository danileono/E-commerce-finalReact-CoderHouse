import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({ producto }) => {
  const { agregarCarrito } = useContext(GlobalContext);

  const { id, image, title, description, category, rating, price } = producto

  if (!producto || Object.keys(producto).length === 0) {
    return <h3>No se encontró el producto</h3>;
}


  return (
    <Card className="m-3 mt-5 col-8 d-flex flex-row m-auto">
          <Card.Img 
        variant="top" 
        src={image} 
        alt={`foto del producto ${title}`} 
        className="w-25 mx-3 col-2" 
        style={{ objectFit: 'contain', height: 'auto' }}
      />
    <Card.Body className="col-6">
      <Card.Title> <h3>{title}</h3> </Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text>
        <strong>Precio:</strong> ${price}
      </Card.Text>
      <Card.Text>
        <strong>Categoría:</strong> {category}
      </Card.Text>
      <div className="mt-3">
      </div>

      <div className="mt-3">
        <Button variant="dark me-3" as={Link} to="/"><small>Volver</small></Button>
        <Button className='my-2 me-3' variant="warning" onClick={() => agregarCarrito({ id, image, title, description, price })}>Agregar 🛒</Button>

      </div>

    </Card.Body>
  </Card>
  )
}

export default ItemDetail