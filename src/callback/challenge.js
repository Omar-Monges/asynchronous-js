const API = 'https://rickandmortyapi.com/api/character/'
// function fetchData(a)
function fetchData (url_api, callback) {
    //Instancing la Connection
    let xhttp = new XMLHttpRequest();
    //Abrir una Connection con el method, la path y si es async o no;
    xhttp.open('GET', url_api, true);
    //Validation
    xhttp.onreadystatechange = function (event) {
        //Los estates de la petition, el 4 es el ultimo
        if (xhttp.readyState === 4) {
            //Verification si el status este en 200, que todo este bien y no un 400 o 500
            if (xhttp.status === 200) {
                // el primer valor es el error, y el next el result
                // run el callback con el result
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // Si el status no es 200
                const error = new Error(`Error ${url_api}`);
                // kill el process
                return callback(error, null);
            }
        }
    }
    //Por Ultimo sending la petition
    xhttp.send();
}
//1er called a la function de consult con la api y el callback
fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1); //Validation
    //2do called para ver la position [0] de results
    fetchData(API + data1.results[10].id, (error2, data2) => {
        if (error2) return console.error(error2); //Validation
        //3ra called con la position de result[0].id al origen de la dimensión de ese personage
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3); //Validation
            //prints los results
            console.log(`Cantidad de personajes es: ${data1.info.count}`);
            console.log(`Nombre del personaje es: ${data2.name}`);
            console.log(data3.dimension);
        })
    })
})