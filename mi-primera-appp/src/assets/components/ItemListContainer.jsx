import React, { useEffect, useState } from 'react';
import { getProducts } from './asynmock';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [items, setItems] = useState([]); 
  const [cargando, setCargando] = useState(true); 
  const { categoria } = useParams(); 

  useEffect(() => {
    setCargando(true);

    const fetchData = async () => {
      try {
        const productos = await getProducts();
        if (categoria) {
          setItems(productos.filter((e) => e.categoria === categoria));
        } else {
          setItems(productos);
        }
      } catch (err) {
        console.error("Error al cargar los productos: ", err);
      } finally {
        setCargando(false); 
      }
    };

    fetchData();
  }, [categoria]); 

  if (cargando) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className='Lista'>
      <ItemList items={items} /> {}
    </div>
  );
}

export default ItemListContainer;
