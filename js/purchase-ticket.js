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

let ticketType = ""
let numberTicktes = ""
let creditCard = ""

const cleanForm = () => {
    document.querySelector("#select-ticket-type").value = ""
    document.querySelector("#txt-number-ticktes").value = ""
    document.querySelector("#txt-credit-card").value = ""
    document.querySelector("#order-summary-list").innerHTML = ""
    document.querySelector("#orderSummary").style.display = "none";
}

const buyTickts = () => {
    alert("SUCCESS: Transaction done")
}

const btnOrderSummary = () => {
    document.querySelector("#order-summary-list").innerHTML = ""

    // check values
    ticketType = document.querySelector("#select-ticket-type").value
    numberTicktes = document.querySelector("#txt-number-ticktes").value
    creditCard = document.querySelector("#txt-credit-card").value

    if (ticketType.trim() === "" || numberTicktes.trim() === "" || creditCard.trim() === "") {
        alert("ERROR: Should provide ticket type, number of tickets hours credit card information")
        return
    }

    if (creditCard.length != 6) {
        alert("ERROR: CreditCard Should contain 6 digits");
        return
    }

    document.querySelector("#orderSummary").style.display = "flex";
    
    let ticketPrice = 35.99

    if (ticketType === "ODP") {
        ticketPrice = 95.00
    } else if (ticketType === "ODP") {
        ticketPrice = 274.00
    }

    let totalPrice = numberTicktes * ticketPrice

    // calculate receipt
    document.querySelector("#order-summary-list").innerHTML += `
            <a>Ticket type: <strong>${ ticketType }</strong></a>
            <a>Number of tickets: <strong>${ numberTicktes }</strong></a>
            <a>Credit card: <strong>${ creditCard }</strong></a>
            <a>Total amount: <strong>$${ totalPrice.toFixed(2) }</strong></a>
            <button class="btn-primary" id="btn-pay">Confirm and pay</button>
    `;
    
    document.querySelector("#btn-pay").addEventListener("click", btnPayPressed)
}

const loadSelectTicketOption = () => {
    for (let i = 0; i < ticketsAndPricingData.length; i++) {
        const item = ticketsAndPricingData[i];
        document.querySelector("#select-ticket-type").innerHTML += `
            <option value="${ item.code }">${ item.name }</option>
        `
    }
}

const btnPayPressed = () => {
    alert("SUCCESS: Payment successful")
    cleanForm()
}

document.addEventListener('DOMContentLoaded', function() {
    loadSelectTicketOption()
    document.querySelector("#orderSummary").style.display = "none";
});

document.querySelector("#btn-order-summary").addEventListener("click", btnOrderSummary)
