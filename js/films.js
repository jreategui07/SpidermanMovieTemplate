const filmsData = [
    {
        "name": "Hollywood Film Festival",
        "description": "A prestigious festival showcasing the best in international cinema.",
        "date": "October 1-7, 2024",
        "location": "Los Angeles, USA",
        "image_url": "../img/spiderman-poster.jpg"
    },
    {
        "name": "Hollywood Film Festival",
        "description": "A prestigious festival showcasing the best in international cinema.",
        "date": "October 1-7, 2024",
        "location": "Los Angeles, USA",
        "image_url": "../img/spiderman-poster.jpg"
    },
    {
        "name": "Hollywood Film Festival",
        "description": "A prestigious festival showcasing the best in international cinema.",
        "date": "October 1-7, 2024",
        "location": "Los Angeles, USA",
        "image_url": "../img/spiderman-poster.jpg"
    },
    {
        "name": "Hollywood Film Festival",
        "description": "A prestigious festival showcasing the best in international cinema.",
        "date": "October 1-7, 2024",
        "location": "Los Angeles, USA",
        "image_url": "../img/spiderman-poster.jpg"
    },
    {
        "name": "Hollywood Film Festival",
        "description": "A prestigious festival showcasing the best in international cinema.",
        "date": "October 1-7, 2024",
        "location": "Los Angeles, USA",
        "image_url": "../img/spiderman-poster.jpg"
    }
]

const loadFilms = () => {
    for (let i = 0; i < filmsData.length; i++) {
        const item = filmsData[i];
        const liNode = document.createElement("li")
        liNode.innerHTML = item
        document.querySelector("#films-list").innerHTML += `
            <li>
                <img src="${ item.image_url }"/>
                <div>
                    <a>Name: <strong>${ item.name }</strong></a>
                    <a>Description: <strong>${ item.description }</strong></a>
                    <a>Date: <strong>${ item.date }</strong></a>
                    <a>Location: <strong>${ item.location }</strong></a>
                </div>
            </li>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadFilms()
});