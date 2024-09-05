import React from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from 'react'

const CartWidget = () => {

  const { calcularTotal } = useContext(GlobalContext)



  return (
    <div>
      <NavLink className="text-warning" to="/carrito">🛒 Total ${calcularTotal()}</NavLink>
    </div>



  )
}

export default CartWidget