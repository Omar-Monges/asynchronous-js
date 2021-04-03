const API = 'https://rickandmortyapi.com/api/character/';
// function fetchData(a)
const fetchData = (url_api) => {
    return new Promise ((resolve, reject) => {
        //Instancing la Connection
        let xhttp = new XMLHttpRequest();
        //Abrir una Connection con el method, la path y si es async o no;
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (event) => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new Error(`Error ${url_api}`));
                }
            }
        }
        xhttp.send();
    })
}
const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}
console.log('Before');
anotherFunction(API);
console.log('After');