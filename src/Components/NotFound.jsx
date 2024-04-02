import React from 'react';

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
                <p className="text-lg">Lo sentimos, la página que estás buscando no existe.</p>
                {/* Puedes agregar un botón o enlace para redirigir a la página de inicio */}
                <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Ir a la página de inicio</a>
            </div>
        </>
    );
};

export default NotFound;
