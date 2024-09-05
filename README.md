# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Pre-entrega-2-React-CoderHouse
# danileono-Pre-entrega-2-React-CoderHouse













FUNCIONES QUE UTILICÉ PARA FIREBASE: agregar useEffect a la de agregar para que se carguen una vez nomas

//    async function subirProductosAfirebase(productos){
//      const productosCollection = collection(db, "productos");
    
//      for ( const producto of productos) {
//      try {
//      const docRef = await addDoc(productosCollection, producto);
//       } catch (e) {
//      console.error("error al agregar el producto: ", e);
//      }
//      }
//      }

useEffect(() => {

//      subirProductosAfirebase(productosAsync);

}, [])

    



// async function eliminarDocumentosConTitulosRepetidos() {
//     const productosCollection = collection(db, 'productos');
  
//     // Obtén todos los documentos de la colección
//     const querySnapshot = await getDocs(productosCollection);
  
//     // Encuentra títulos repetidos
//     const titleCounts = {};
//     querySnapshot.docs.forEach(doc => {
//       const data = doc.data();
//       if (data.title) {
//         titleCounts[data.title] = (titleCounts[data.title] || []).concat(doc);
//       }
//     });
  
//     // Identifica documentos a eliminar (excepto uno por cada título repetido)
//     const docsToDelete = [];
//     Object.values(titleCounts).forEach(docs => {
//       if (docs.length > 1) {
//         // Deja el primer documento y agrega los demás a la lista de eliminación
//         docs.slice(1).forEach(doc => docsToDelete.push(doc));
//       }
//     });
  
//     // Elimina los documentos
//     const deletePromises = docsToDelete.map(doc => {
//       return deleteDoc(doc.ref)
//         .then(() => console.log(`Documento con ID ${doc.id} eliminado`))
//         .catch(e => console.error(`Error al eliminar el documento con ID ${doc.id}: `, e));
//     });
  
//     // Espera a que todas las promesas se resuelvan
//     await Promise.all(deletePromises);
//   }
  
//   // Ejecuta la función para eliminar documentos con títulos repetidos
//   eliminarDocumentosConTitulosRepetidos();
# E-commerce-finalReact-CoderHouse
# E-commerce-finalReact-CoderHouse
# E-commerce-finalReact-CoderHouse
