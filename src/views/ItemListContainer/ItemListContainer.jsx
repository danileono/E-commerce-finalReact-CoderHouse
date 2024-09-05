import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "../Item/Item.jsx";
import { db } from '../../service/firebaseConfig'; 
import { collection, getDocs, query, where, } from 'firebase/firestore';



const ItemListContainer = () => {
const [productos, setProductos] = useState([]);
const [cargando, setCargando] = useState(true);

const { categoryName } = useParams();



//maping de productos de db firebase


useEffect(() => {
    const fetchProductos = async () => {
    setCargando(true);

    try {
        const productosRef = collection(db, "productos");
        const q = categoryName ? 
        query(productosRef, where("category", "==", categoryName)) : 
        productosRef;

        const snapshot = await getDocs(q);
        const prods = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
        }));

        setProductos(prods);
    } catch (error) {
        console.error("Error al cargar productos:", error);
    } finally {
        setCargando(false);
    }
    };

    fetchProductos();
}, [categoryName]);

useEffect(() => {
    if (cargando) {
    Swal.fire({
        width: 150,
        height: 150,
        padding: "2em",
        color: "rgba(0,0,123,0.05)",
        background: "#fff",
        backdrop: `
        rgba(0,0,123,0.05)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        center top
        no-repeat
        `,
        allowOutsideClick: false,
        customClass: {
        popup: 'round-loading' 
        },
        didOpen: () => {
        Swal.showLoading();
        }
    });
    } else {
    Swal.close();
    }
}, [cargando]);


return (
    <div className="container mt-3">
    <div className="row">
        {productos.map(el => (
        <div className="col-md-4 mb-3" key={el.id}>
            <Item producto={el} />
        </div>
        ))}
    </div>
    </div>
);
};

export default ItemListContainer;
