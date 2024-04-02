import { useState } from "react";
import { getDataByNumber } from "../helpers/getDataByNumber";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";

export const CardResumen = () => {

    const { capNumero } = useParams()


    const [resumenLargo, setResumenLargo] = useState('');
    const obtenerContenidoArchivo = async (archivo) => {
        try {
            const respuesta = await fetch(archivo);
            if (!respuesta.ok) {
                throw new Error('No se pudo obtener el archivo.');
            }
            const contenido = await respuesta.text();
            setResumenLargo(contenido);
        } catch (error) {
            console.error('Error al obtener el archivo:', error);
        }
    };
    const capitulo = getDataByNumber(capNumero);
    
    const portadaURL = `/assets/portadas/${capNumero}.jpg`
    const resumenURL = `/assets/resumenes/${capNumero}.txt`
    obtenerContenidoArchivo(resumenURL)

    return (
        <div className="mx-auto flex justify-center items-center md:items-start  lg:h-full  bg-gray-100">
            <div className="w-full md:max-w-3xl lg:max-w-4xl lg:h-full bg-white rounded-lg shadow-lg p-6 ">
                <div className="flex flex-col md:flex-row lg:w-fit">
                    {/* Primera sección, ocupa 50% del ancho */}
                    <div className=" md:w-1/2 mb-0 flex justify-center items-center">
                        {/* Contenido de la primera sección */}
                        <img
                            className="w-full h-full object-cover"
                            src={portadaURL}
                            alt="" />

                    </div>
                    {/* Segunda y tercera sección, ocupan 50% del ancho y se dividen en altura */}
                    <div className="w-full flex-col md:w-1/2  md:justify-start md:items-baseline md:h-full lg:h-full overflow-auto">
                        {/* Segunda sección, ocupa la mitad de la altura */}
                        <div className="w-full h-1/2 md:h-fit lg:h-1/10  p-4 mb-4 md:mb-0 sticky">
                            {/* Contenido de la segunda sección */}
                            <h2 className="text-xl font-bold mb-2">{capitulo[0].titulo}</h2>
                        </div>
                        {/* Tercera sección, ocupa la mitad de la altura */}
                        <div className="w-full h-1/2 md:h-fit lg:h-full pb-4 px-4 flex flex-col justify-between">
                            {/* Contenido de la tercera sección */}
                            <p className="text-gray-700">{resumenLargo}</p>
                            <div className="flex flex-col lg:flex-row lg:justify-evenly justify-center items-center mt-5 lg:mt-2">
                                <a href={`/#`} className="inline-block mb-2 w-full">
                                    <Button variant="text" className="flex  justify-center items-center gap-2 p-3 md:p-2 bg-slate-400 text-white w-full md:w-fit lg:w-fit">
                                        Capitulo Completo
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                            />
                                        </svg>
                                    </Button>
                                </a>

                                <a href={`/listado`} className="inline-block mb-2 w-full">
                                    <Button variant="text" className="flex justify-center items-center gap-2 p-3 md:p-2 bg-slate-400 text-white w-full md:w-fit lg:w-fit">
                                        Menu Principal
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4 transform rotate-180" // Agregar la clase transform rotate-0 para corregir la orientación
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 21l-8-8V5.007A1.5 1.5 0 014.5 3h15a1.5 1.5 0 011.5 1.507V13l-8 8z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 17v-6a3 3 0 013-3h0a3 3 0 013 3v6"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                                <a href="#" className="inline-block mb-2 w-full">
                                    <Button variant="text" className="flex justify-center items-center gap-2 p-3 md:p-2 bg-[#6BA3D8] text-white w-full md:w-fit lg:w-fit">
                                        Libro Completo
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

