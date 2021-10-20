export enum RequestType {
    DELETE = 'DELETE',
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
}

/**
 * Enum for the definitions of end points 
 */
export enum RequestURL {
    POKEMON_POKEDEX = 'POKEMON_POKEDEX',
}

/**
 * Function responsible for the creation of the service URL.
 * @param {RequestURL} type transaction type according at the enum @param RequestURL
 * @param {QueryRequest} query Data type recieved in the calling function
 */
export function URLSERVICE(type: RequestURL) {

    const baseUrl = "https://pokeapi.co/api/v2";

    switch (type) {
        case RequestURL.POKEMON_POKEDEX: {
            const data = { url: baseUrl + `/pokedex` }
            return data;
        }
        default: {
            console.error('Invalid endpoint ');
            break;
        }
    }
}
