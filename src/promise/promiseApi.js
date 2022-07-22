import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'
const postData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response
}
//Update a product
const putData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response
}
//Delete a product
const deleteData = (urlApi) => {
  const response = fetch(urlApi, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    }
  })
  return response
}
let data = {
  "title": "Other Kong",
  "price": 19,
  "description": "A new description",
  "categoryId": 2,
  "images": ["https://placeimg.com/640/480/any"]
}

let update = {
  "title": "King Kong",
  "price": 999
}

let idCreated

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(products => {
    idCreated = products.id
    console.log(products)
  })
  .catch(err => console.log(err))

// putData(`${API}/products/${idCreated}`, update)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err))


let flag = 0
let countDownDelete = setTimeout(() => {
  if(flag === 0){
    deleteData(`${API}/products/${idCreated}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
    flag++
  } else {
    clearTimeout(countDownDelete)
  }
}, 10000);