const axios = require("axios");

axios.get("https://swapi.dev/api/people/").then(response => {
    const results = response.data.results;

    let wrapper = "";
    results.forEach(person => {
        const markup = `<div class="card">
            <h4>${person.name}</h4>
            <p>${person.eye_color}</p>
            <p>${person.gender}</p>
        </div>`
        wrapper += markup;
    })
    console.log(wrapper)
    // document.appendChild(wrapper);
})