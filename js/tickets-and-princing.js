let ticketsAndPricingData = [
    {
        "code": "ODP",
        "icon": "bi-ticket-perforated-fill",
        "name": "One Day Pass",
        "price": "$95",
        "details": [
            "Access to every performance on 1 day",
            "7% off all snacks and drinks"
        ],
        "button_text": "BUY TICKETS"
    },
    {
        "code": "AAP",
        "icon": "bi-film",
        "name": "All Access Pass",
        "price": "$274",
        "details": [
            "Unlimited access to every performance",
            "Valid for entry on all festival days",
            "Skip the line with fast entry",
            "15% off all snacks and drinks",
            "Exclusive backstage meet and greets"
        ],
        "button_text": "BUY TICKETS"
    }
]


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

document.addEventListener('DOMContentLoaded', function() {
    loadticketsAndPricing()
});
