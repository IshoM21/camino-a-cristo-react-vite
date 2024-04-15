import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

export const CardMaterial = ({ numero, titulo, linkLibro, link, resumenCorto }) => {

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

    const portadaURL = `/assets/portadas/${numero}.jpg`
    const resumenURL = `/assets/resumenes/${numero}.txt`
    const dataResumen = obtenerContenidoArchivo(resumenURL)
    return (
        <Card className="w-full max-w-[48rem] md:flex-row rounded-xl md:w-full flex flex-col">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full md:w-2/5 shrink-0 rounded-r-lg"
            >
                <img
                    src={portadaURL}
                    alt="card-image"
                    className="md:h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {titulo}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    {resumenCorto}
                </Typography>
                {
                    numero != 0 && (
                        <a href={`/resumen/${numero}`} className="inline-block mb-2  mr-2">
                            <Button variant="text" className="flex items-center gap-2 p-3 bg-amber-950 text-white">
                                Leer Resumen
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
                    )
                }
                {
                    numero == 0 ? (
                        <a href={`/resumen/${numero}`} className="inline-block mb-2 mr-2">
                            <Button variant="text" className="flex items-center gap-2 p-3 bg-amber-950 text-white">
                                Leer Resumen
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
                    ) : (
                <a href={link} className="inline-block mb-2" target='_blank'>
                    <Button variant="text" className="flex items-center gap-2 p-3 bg-amber-950 text-white">
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
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
                    )}
                <a href={ linkLibro } className="inline-block mb-2" target='_blank'>
                    <Button variant="text" className="flex items-center gap-2 p-3 bg-[#6BA3D8] text-white">
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
            </CardBody>
        </Card>
    );
};
