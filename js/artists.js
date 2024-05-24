const ARTISTS = [
    {
        "artist": "Tobey Maguire",
        "date": "Friday, May 3, 2002",
        "location": "Mann Village Theatre, Los Angeles",
        "show_time": "8:00 PM",
        "movie_status": "AVAILABLE",
        "button_text": "WATCH MOVIE",
        "image_url": "img/tobey-maguire.jpg"
    },
    {
        "artist": "Andrew Garfield",
        "date": "Tuesday, July 3, 2012",
        "location": "Sony Pictures Studios, Culver City",
        "show_time": "7:00 PM",
        "movie_status": "AVAILABLE",
        "button_text": "WATCH MOVIE",
        "image_url": "img/andrew-garfield.jpg"
    },
    {
        "artist": "Tom Holland",
        "date": "Friday, July 7, 2017",
        "location": "TCL Chinese Theatre, Los Angeles",
        "show_time": "7:00 PM",
        "movie_status": "AVAILABLE",
        "button_text": "WATCH MOVIE",
        "image_url": "img/tom-holland.jpg"
    }
]

const loadArtistDetails = () => {
    for (let i = 0; i < ARTISTS.length; i++) {
        const item = ARTISTS[i];
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
                    <a>Movie Status: <strong>${ item.movie_status }</strong></a>
                    <a>Location: <strong>${ item.location }</strong></a>
                    <button class="btn-secondary" onclick="window.location.href='purchase-plan.html'">${ item.button_text }</button>
                </div>
            </li>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadArtistDetails()
});


