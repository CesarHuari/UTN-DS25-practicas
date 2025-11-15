import React, { createContext, useContext, useState } from 'react';
import { datosLibros as datosIniciales } from '../data/booksData';

const ContextoCatalogo = createContext(null);

export const ProveedorCatalogo = ({ children }) => {
  const [libros, setLibros] = useState(datosIniciales);

  // Agregar libro al catálogo local. Retorna el libro agregado (con id).
  const agregarLibro = (claveSeccion, nuevoLibro) => {
    let creadoLocal = null;
    setLibros((anterior) => {
      const arregloSeccion = anterior[claveSeccion] ? [...anterior[claveSeccion]] : [];
      const siguienteId = arregloSeccion.length ? Math.max(...arregloSeccion.map((b) => b.id || 0)) + 1 : 1;
      creadoLocal = { id: siguienteId, ...nuevoLibro };
      return { ...anterior, [claveSeccion]: [creadoLocal, ...arregloSeccion] };
    });
    return creadoLocal;
  };

  const obtenerTodosLosLibros = () => {
    const clavesValidas = ['ficcion', 'noFiccion', 'infantil', 'tecnico'];
    return clavesValidas.flatMap((clave) => (libros[clave] || []).map((b) => ({ ...b, claveSeccion: clave })));
  };

  return (
    <ContextoCatalogo.Provider value={{ libros, agregarLibro, obtenerTodosLosLibros }}>
      {children}
    </ContextoCatalogo.Provider>
  );
};

export const useCatalogo = () => {
  const ctx = useContext(ContextoCatalogo);
  if (!ctx) throw new Error('useCatalogo debe ser usado dentro de ProveedorCatalogo');
  return ctx;
};

export default ContextoCatalogo;
