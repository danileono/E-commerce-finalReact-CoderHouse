import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom"
import { db } from '../../service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';







const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()




    useEffect(() => {
        setCargando(true)
        const fetchProducto = async () => {
            try{

                const productoRef = doc(db, "productos", id)
                const res = await getDoc(productoRef)
                const data = res.data()
                const productoFormateado = {id: res.id, ...data}

                setProducto(productoFormateado)

            } catch (error){
                setError(error)
            } finally {
                setCargando(false)
            }
        }

    fetchProducto()

    }, [id])

    

return (
    <>
    {
        cargando ? 
        <h3>cargando...</h3>
        :
        <ItemDetail producto={producto} 
        />
    }
    </>
)
}

export default ItemDetailContainer