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

const loadticketsAndPricing = () => {
    for (let i = 0; i < ticketsAndPricingData.length; i++) {
        const item = ticketsAndPricingData[i];
        const liNode = document.createElement("li")
        liNode.innerHTML = item

        let itemDetailsHtml = ""
        for (let z = 0; z < item.details.length; z++) {
            const detail = item.details[z];
            itemDetailsHtml += `
                <a>
                    <i class="bi bi-star-half bi-small"></i>
                    ${ detail }
                </a>
            `
        }

        document.querySelector("#pricing-list").innerHTML += `
            <li>
                <i class="ticket-icon bi ${ item.icon }"></i>
                <a class="ticket-name">${ item.name }</a>
                <a class="ticket-price">${ item.price }</a>
                <div>${ itemDetailsHtml }</div>
                <button class="btn-primary" onclick="window.location.href='purchase-ticket.html'">${item.button_text}</button>
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
                <div>
                    <a>Artist: <strong>${ item.artist }</strong></a>
                    <a>Date: <strong>${ item.date }</strong></a>
                    <a>Location: <strong>${ item.location }</strong></a>
                    <a>Show Time: <strong>${ item.show_time }</strong></a>
                    <a>Tickets Status: <strong>${ item.tickets_status }</strong></a>
                    <a>Location: <strong>${ item.location }</strong></a>
                    <button class="btn-secondary" onclick="window.location.href='purchase-ticket.html'">${ item.button_text }</button>
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


