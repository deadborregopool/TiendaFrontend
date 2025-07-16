// src/components/Ofertas.jsx
import React, { useState, useEffect } from "react";
import ProductoCard from "./ProductoCard";
import { FaTag } from "react-icons/fa";

const Ofertas = ({ agregarAlCarrito }) => {
    const [ofertas, setOfertas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Cargar ofertas desde el endpoint
        const fetchOfertas = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch("https://tienda-kxep.onrender.com/api/productos/ofertas");
                
                if (!response.ok) {
                    throw new Error("Error al cargar las ofertas");
                }
                
                const data = await response.json();
                setOfertas(data);
            } catch (err) {
                console.error("Error al cargar ofertas:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOfertas();
    }, []);

    // Skeleton loader
    const renderSkeletons = () => {
        return Array(4).fill(0).map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col h-full w-[240px] mx-auto animate-pulse">
                <div className="relative">
                    <div className="w-full h-52 bg-gray-200"></div>
                    <div className="absolute top-3 right-3 bg-gray-300 rounded-full w-16 h-16"></div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
                    <div className="h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="mt-auto flex justify-center gap-3">
                        <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
                        <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
            </div>
        ));
    };

    if (error) {
        return (
            <div className="px-[5%] py-12 w-full bg-gradient-to-b from-white to-gray-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                        Ofertas Especiales
                    </h2>
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-md mx-auto">
                        <p className="font-bold">Error al cargar ofertas</p>
                        <p>{error}</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="mt-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors"
                        >
                            Intentar de nuevo
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="px-[5%] py-12 w-full bg-gradient-to-b from-white to-gray-50">
            {/* Encabezado con gradiente */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
                    <FaTag className="mr-3 text-green-500" />
                    Ofertas Especiales
                    <FaTag className="ml-3 text-blue-500" />
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Descubre nuestras mejores ofertas con descuentos exclusivos
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {loading ? (
                <div className="flex flex-wrap justify-center gap-6">
                    {renderSkeletons()}
                </div>
            ) : ofertas.length === 0 ? (
                <div className="text-center py-10">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl inline-block border border-green-200">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4"></div>
                        <h3 className="text-xl font-bold text-gray-700 mb-2">¡No hay ofertas disponibles!</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-4">
                            Actualmente no tenemos ofertas disponibles, pero vuelve pronto para descubrir nuestras promociones especiales.
                        </p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors"
                        >
                            Revisar nuevamente
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    {/* Grid de ofertas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {ofertas.map((oferta) => (
                            <div 
                                key={oferta.id} 
                                className="transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl relative"
                            >
                                <ProductoCard 
                                    producto={oferta}
                                    agregarAlCarrito={agregarAlCarrito}
                                />
                            </div>
                        ))}
                    </div>
                    
                    {/* Mensaje final */}
                    <div className="mt-10 text-center">
                        <div className="inline-block bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                            <p className="text-gray-700 italic">
                                <span className="font-bold text-green-600">¡Aprovecha ahora!</span> Estas ofertas pueden agotarse rápidamente.
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Ofertas;