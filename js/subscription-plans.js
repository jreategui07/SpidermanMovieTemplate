const SUBCRIPTIONS_TYPE = [
    {
        "code": "ODP",
        "icon": "bi-ticket-perforated-fill",
        "name": "One Day Pass",
        "price": "$9.99",
        "details": [
            "Access to every movie on 1 day",
            "Full HD video streaming"
        ],
        "button_text": "PURCHASE PLAN"
    },
    {
        "code": "MP",
        "icon": "bi-film",
        "name": "Monthly Pass",
        "price": "$29.99",
        "details": [
            "Monthly access to every movie",
            "Full HD video streaming"
        ],
        "button_text": "PURCHASE PLAN"
    }
]


const loadticketsAndPricing = () => {
    for (let i = 0; i < SUBCRIPTIONS_TYPE.length; i++) {
        const item = SUBCRIPTIONS_TYPE[i];
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
                <button class="btn-primary" onclick="window.location.href='purchase-plan.html'">${item.button_text}</button>
            </li>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadticketsAndPricing()
});
