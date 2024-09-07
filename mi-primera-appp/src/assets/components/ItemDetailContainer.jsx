import React, { useEffect, useState } from 'react';
import { getProductById } from '../asyncmock';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({});
    const [cargando, setCargando] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentId, setCurrentId] = useState(Number(id));

    useEffect(() => {
        const fetchProduct = async () => {
            setCargando(true);
            try {
                const producto = await getProductById(currentId);
                setProd(producto);
            } catch (err) {
                console.error("Error al obtener el producto:", err);
            } finally {
                setCargando(false);
            }
        };
        fetchProduct();
    }, [currentId]);

    const mostrarSiguiente = () => {
        setCurrentId((prevId) => prevId + 1);
    };

    const mostrarAnterior = () => {
        setCurrentId((prevId) => (prevId > 1 ? prevId - 1 : prevId));
    };

    useEffect(() => {

        navigate(`/detalles/${currentId}`);
    }, [currentId, navigate]);

    if (cargando) {
        return <h1>Cargando....</h1>;
    }

    return (
        <div className='cardReal'>
            <h3>{prod.nombre}</h3>
            <img src={prod.imagen} alt={prod.nombre} />
            <p>{prod.precio}</p>
            <button onClick={mostrarAnterior}>Ver anterior</button>
            <button onClick={mostrarSiguiente}>Ver siguiente</button>
        </div>
    );
};

export default ItemDetailContainer;
