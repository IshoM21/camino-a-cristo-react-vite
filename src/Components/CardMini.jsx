import { useEffect, useState } from "react";
// import { obtenerContenidoArchivo } from "../helpers/leerArchivo";

export default function CardMini({ numero, titulo, portada, resumena }) {

    const [resumen, setResumen] = useState('');
    const obtenerContenidoArchivo = async (archivo) => {
        try {
            const respuesta = await fetch(archivo);
            if (!respuesta.ok) {
                throw new Error('No se pudo obtener el archivo.');
            }
            const contenido = await respuesta.text();
            setResumen(contenido);
        } catch (error) {
            console.error('Error al obtener el archivo:', error);
        }
    };

    const portadaURL = `./assets/portadas/${numero}.jpg`
    const resumenURL = `./assets/resumenes/${numero}.txt`
    const dataResumen = obtenerContenidoArchivo(resumenURL)
    return (
        <>
            <div
                className="flex flex-row rounded-lg bg-white shadow-md dark:bg-neutral-700 md:w-1/3 lg:w-1/2 h-40 md:max-w-xl md:flex-row border border-blue-100 ">
                {/* <figure className="w-1/2"> */}
                <img
                    className="h-40 w-full rounded-t-lg object-cover md:h-auto md:w-32 md:rounded-none md:rounded-l-lg"
                    style={{ width: '100%' }}
                    src={portadaURL}
                    alt="" />

                {/* </figure> */}
                <div className="flex flex-col justify-start p-6">
                    <h5
                        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        {titulo}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {resumen}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                        <button
                            type="button"
                            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Leer
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}