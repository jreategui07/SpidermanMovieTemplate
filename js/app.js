const loadFilms = () => {
    for (let i = 0; i < filmsData.length; i++) {
        const item = filmsData[i];
        const liNode = document.createElement("li")
        liNode.innerHTML = item
        document.querySelector("#films-list").innerHTML += `
            <li>
                <img src="${ item.image_url }"/>
                Name: ${ item.name }
                Description: ${ item.description }
                Date: ${ item.date }
                Location: ${ item.location }
            </li>
        `;
    }
}

const loadticketsAndPricing = () => {
    for (let i = 0; i < ticketsAndPricingData.length; i++) {
        const item = ticketsAndPricingData[i];
        const liNode = document.createElement("li")
        liNode.innerHTML = item
        document.querySelector("#tickets-and-pricing-list").innerHTML += `
            <li>
                <i class="bi ${ item.icon }"></i>
                Name: ${ item.name }
                Date: ${ item.date }
                Location: ${ item.location }
                <button onclick="window.location.href='purchase-ticket.html'">${item.button_text}</button>
            </li>
        `;
    }
}

const loadArtistDetails = () => {
    for (let i = 0; i < artistDetails.length; i++) {
        const item = artistDetails[i];
        const liNode = document.createElement("li")
        liNode.innerHTML = item
        document.querySelector("#artist-list").innerHTML += `
            <li>
                <img src="${ item.image_url }"/>
                <div class="column-container">
                    <ul>
                        <li>Artist: ${ item.artist }</li>
                        <li>Date: ${ item.date }</li>
                        <li>Location: ${ item.location }</li>
                        <li>Show Time: ${ item.show_time }</li>
                        <li>Tickets Status: ${ item.tickets_status }</li>
                        <li>Location: ${ item.location }</li>
                        <button href="#">${ item.button_text }</button>
                    </ul>
                </div>
            </li>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadFilms()
    loadticketsAndPricing()
    loadArtistDetails()
});


