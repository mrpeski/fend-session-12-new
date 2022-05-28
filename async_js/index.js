// const axios = require("axios");

// console.dir(axios);

// axios.get("https://cat-fact.herokuapp.com/facts").then(res => {
//     console.log(res.data)
// })

fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => res.json())
    .then(res => console.log(res))