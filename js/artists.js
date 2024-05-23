let artistDetails = [
    {
        "artist": "Hozier",
        "date": "Wednesday, September 20, 2023",
        "location": "Place Bell, Laval",
        "show_time": "8:00 PM",
        "tickets_status": "TICKETS ON SALE NOW!",
        "button_text": "BUY TICKETS",
        "image_url": "../img/spiderman-artist.jpg"
    },
    {
        "artist": "Hozier",
        "date": "Wednesday, September 20, 2023",
        "location": "Place Bell, Laval",
        "show_time": "8:00 PM",
        "tickets_status": "TICKETS ON SALE NOW!",
        "button_text": "BUY TICKETS",
        "image_url": "../img/spiderman-artist.jpg"
    },
    {
        "artist": "Hozier",
        "date": "Wednesday, September 20, 2023",
        "location": "Place Bell, Laval",
        "show_time": "8:00 PM",
        "tickets_status": "TICKETS ON SALE NOW!",
        "button_text": "BUY TICKETS",
        "image_url": "../img/spiderman-artist.jpg"
    }
]

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
    loadArtistDetails()
});


