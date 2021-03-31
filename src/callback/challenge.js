const API = 'https://rickandmortyapi.com/api/character/'
// funcion fetchData(a)
function fetchData (url_api, callback) {
    //Instanciando la conexion
    let xhttp = new XMLHttpRequest();
    //Abrir una conexion con el metodo, la ruta y si es asincono o no;
    xhttp.open('GET', url_api, true);
    //Validando la llamada
    xhttp.onreadystatechange = function (event) {
        //Los estados de la peticion, el 4 es el ultimo
        if (xhttp.readyState === 4) {
            //Verificamos si el status este en 200, que todo esta bien y no un 400 o 500
            if (xhttp.status === 200) {
                // el primer valor es el err, y el siguiente el resultado
                // ejecutamos el callback con el resultado
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // Si el status no es 200
                const error = new Error(`Error ${url_api}`);
                // Matamos el proceso
                return callback(error, null);
            }
        }
    }
    //Por Ultimo enviamos la petición
    xhttp.send();
}
fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, (error2, data2) => {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(`Cantidad de personaje es: ${data1.info.count}`);
            console.log(`Nombre del personaje es: ${data2.name}`);
            console.log(data3.dimension);
        })
    })
})