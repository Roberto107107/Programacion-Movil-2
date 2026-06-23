import { useState, useEffect } from 'react';

import {
  productos as productosMock,
  artesanos
} from '../services/artesaniaService';

import {
  Producto,
  Artesano
} from '../types';

/*
  Custom Hook encargado de manejar
  la carga de productos y la búsqueda
  de artesanos.
*/

export function useProductos() {

  // Estado que almacena la lista de productos
  const [productos, setProductos] =
    useState<Producto[]>([]);

  // Estado que indica si la información sigue cargando
  const [cargando, setCargando] =
    useState<boolean>(true);

  /*
    Se ejecuta una sola vez cuando
    la pantalla se monta.
  */
  useEffect(() => {

    setProductos(productosMock);

    setCargando(false);

  }, []);

  /*
    Busca el artesano asociado
    a un producto.
  */
  const getArtesano = (
    artesanoId: number
  ): Artesano | undefined => {

    return artesanos.find(
      a => a.id === artesanoId
    );
  };

  /*
    Devuelve los datos necesarios
    para las pantallas.
  */
  return {
    productos,
    cargando,
    getArtesano
  };
}