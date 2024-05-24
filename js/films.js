const FILMS = [
    {
        "name": "Spider-Man",
        "description": "Peter Parker becomes Spider-Man to fight evil.",
        "date": "Friday, May 3, 2002, 8:00 PM",
        "location": "Mann Village Theatre, Los Angeles",
        "image_url": "img/spider-man-1-poster.jpg"
    },
    {
        "name": "Spider-Man 2",
        "description": "Spider-Man faces new challenges and foes.",
        "date": "Wednesday, June 30, 2004, 7:30 PM",
        "location": "Mann Village Theatre, Los Angeles",
        "image_url": "img/spider-man-2-poster.jpg"
    },
    {
        "name": "Spider-Man 3",
        "description": "Spider-Man battles against Venom and Sandman.",
        "date": "Monday, April 30, 2007, 7:00 PM",
        "location": "Astor Plaza Theatre, New York City",
        "image_url": "img/spider-man-3-poster.jpg"
    },
    {
        "name": "The Amazing Spider-Man",
        "description": "A new story of Peter Parker as Spider-Man.",
        "date": "Tuesday, June 13, 2012, 7:00 PM",
        "location": "Sony Pictures Studios, Culver City",
        "image_url": "img/the-amazing-spider-man-poster.jpg"
    },
    {
        "name": "The Amazing Spider-Man 2",
        "description": "Spider-Man faces Electro and his past.",
        "date": "Thursday, April 24, 2014, 7:00 PM",
        "location": "Ziegfeld Theatre, New York City",
        "image_url": "img/the-amazing-spider-man-2-poster.jpg"
    },
    {
        "name": "Spider-Man: Homecoming",
        "description": "Peter Parker balances high school life and being Spider-Man.",
        "date": "Wednesday, June 28, 2017, 7:00 PM",
        "location": "TCL Chinese Theatre, Los Angeles",
        "image_url": "img/spider-man-homecoming-poster.jpg"
    },
    {
        "name": "Spider-Man: Far From Home",
        "description": "Spider-Man goes on a European adventure.",
        "date": "Wednesday, June 26, 2019, 7:00 PM",
        "location": "TCL Chinese Theatre, Los Angeles",
        "image_url": "img/spider-man-far-from-home-poster.jpg"
    },
    {
        "name": "Spider-Man: No Way Home",
        "description": "Spider-Man faces multiversal threats.",
        "date": "Monday, December 13, 2021, 7:00 PM",
        "location": "Fox Village Theatre, Los Angeles",
        "image_url": "img/spider-man-no-way-home-poster.jpg"
    }
]


const loadFilms = () => {
    for (let i = 0; i < FILMS.length; i++) {
        const item = FILMS[i];
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