import { CardCap } from "./CardCap";

export const CardResumen = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row">
                    {/* Primera sección, ocupa 50% del ancho */}
                    <div className="w-full h-full md:w-1/2 bg-red-500 mb-4 md:mb-0">
                        {/* Contenido de la primera sección */}
                        <CardCap/>
                    </div>
                    {/* Segunda y tercera sección, ocupan 50% del ancho y se dividen en altura */}
                    <div className="w-full md:w-1/2 md:flex">
                        {/* Segunda sección, ocupa la mitad de la altura */}
                        <div className="w-full h-1/2 md:h-full bg-blue-500 rounded-lg shadow-md p-4 mb-4 md:mb-0">
                            {/* Contenido de la segunda sección */}
                            <h2 className="text-xl font-bold mb-2">Segunda Sección</h2>
                            <p className="text-gray-700">Contenido de la segunda sección...</p>
                        </div>
                        {/* Tercera sección, ocupa la mitad de la altura */}
                        <div className="w-full h-1/2 md:h-full bg-green-500 rounded-lg shadow-md p-4">
                            {/* Contenido de la tercera sección */}
                            <h2 className="text-xl font-bold mb-2">Tercera Sección</h2>
                            <p className="text-gray-700">Contenido de la tercera sección...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

