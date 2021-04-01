const API = 'https://rickandmortyapi.com/api/character/'
// function fetchData(a)
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (event) => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error(`Error ${url_api}`));
            }
        }
        //Sending petition
        xhttp.send();
    });
}
fetchData(API)
    .then(date => {
        console.log(date.info.count);
        return fetchData(`${API}${date.results[0].id}`);
    })
    .then(date => {
        console.log(date.name);
        return fetchData(date.origin.url);
    })
    .then(date => {
        console.log(date.dimension);
    })
    .catch(err => console.error(err));