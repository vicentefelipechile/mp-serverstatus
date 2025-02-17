/**
 * Genera una respuesta HTTP con formato JSON.
 * 
 * @param data - Los datos que se serializarán a JSON en la respuesta
 * @returns {Response} Un objeto Response conteniendo los datos serializados y el header Content-Type apropiado
 * 
 * @example
 * ```typescript
 * const datos = { mensaje: "Hola mundo" };
 * const respuesta = ResponseJSON(datos);
 * // Response con Content-Type: application/json
 * ```
 */
const ToJSON = JSON.stringify;
const ResponseJSON = (data, status = 200): Response => {
    return new Response(ToJSON(data), {
        headers: { 'Content-Type': 'application/json' },
        status
    });
}

/**
 * Crea una nueva respuesta HTTP con contenido HTML.
 * 
 * @param data - Los datos HTML que se enviarán en el cuerpo de la respuesta
 * @returns Una nueva instancia de Response configurada con el tipo de contenido HTML
 * 
 * @example
 * ```typescript
 * const html = "<h1>Hola Mundo</h1>";
 * const response = ResponseHTML(html);
 * ```
 */
const ResponseHTML = (data: string): Response => {
    return new Response(data, {
        headers: { 'Content-Type': 'text/html' }
    });
}

export { ResponseJSON, ResponseHTML };