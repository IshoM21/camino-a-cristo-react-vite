export const obtenerContenidoArchivo = async (archivo) => {
    try {
        const respuesta = await fetch(archivo);
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener el archivo.');
        }
        const contenido = await respuesta.text();
        setContenidoArchivo(contenido);
    } catch (error) {
        console.error('Error al obtener el archivo:', error);
    }
};
