import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import NuevoStock from './components/NuevoStock';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoporteTecnico from './components/SoporteTecnico';
import Nosotros from "./components/Nosotros";
import Busqueda from "./components/Busqueda";
import Categoria from './components/Categoria';
import Subcategoria from './components/Subcategoria';
import ProductoDetalle from "./components/ProductoDetalle";
import CarritoCompras from "./components/CarritoCompras";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const agregarAlCarrito = (producto) => {
    const nuevoItem = {
      ...producto,
      idCarrito: Date.now(),
    };
    setCartItems((prev) => [...prev, nuevoItem]);
    toast.success("Producto agregado al carrito");
  };

  const eliminarDelCarrito = (idCarrito) => {
    const nuevoCarrito = cartItems.filter((item) => item.idCarrito !== idCarrito);
    setCartItems(nuevoCarrito);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Toaster position="top-right" />
        <Header
          cartItems={cartItems}
          eliminarDelCarrito={eliminarDelCarrito}
        />

        {/* Main dinámico que empuja el footer abajo */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <NuevoStock agregarAlCarrito={agregarAlCarrito} />
                </>
              }
            />
            <Route path="/soporte-tecnico" element={<SoporteTecnico />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/buscar" element={<Busqueda agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/categoria/:idCategoria" element={<Categoria agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/subcategoria/:idSubcategoria" element={<Subcategoria agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/producto/:idProducto" element={<ProductoDetalle agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/carrito" element={<CarritoCompras />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
