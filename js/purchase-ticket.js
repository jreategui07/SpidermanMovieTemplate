const TICKETS_PRICE = [
    {
        "code": "ODP",
        "name": "One Day Pass",
        "price": "$95"
    },
    {
        "code": "AAP",
        "name": "All Access Pass",
        "price": "$274"
    }
]

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

    const FORM_DATA = {
        ticketType: document.querySelector("#select-ticket-type").value,
        numberTicktes: document.querySelector("#txt-number-ticktes").value,
        creditCard: document.querySelector("#txt-credit-card").value
    }

    if (
        FORM_DATA.ticketType.trim() === "" ||
        FORM_DATA.numberTicktes.trim() === "" ||
        FORM_DATA.creditCard.trim() === ""
    ) {
        alert("WARNING: Should provide ticket type, number of tickets hours credit card information")
        return
    }

    if (FORM_DATA.creditCard.length != 6) {
        alert("WARNING: CreditCard Should contain 6 digits");
        return
    }

    document.querySelector("#orderSummary").style.display = "flex";
    
    let ticketPrice = 35.99
    if (FORM_DATA.ticketType === "ODP") {
        ticketPrice = 95.00
    } else if (FORM_DATA.ticketType === "ODP") {
        ticketPrice = 274.00
    }

    let subtotal = ticketPrice * parseFloat(FORM_DATA.numberTicktes)
    let tax = subtotal * 0.13
    let finalPrice = subtotal + tax

    const ORDER_SUMMARY = {
        ticketType: FORM_DATA.ticketType,
        numberTicktes: FORM_DATA.numberTicktes,
        ticketPrice: ticketPrice.toFixed(2),
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        finalPrice: finalPrice.toFixed(2)
    }

    // calculate receipt
    document.querySelector("#order-summary-list").innerHTML += `
            <a>Ticket type: <strong>${ ORDER_SUMMARY.ticketType }</strong></a>
            <a>Number of tickets: <strong>${ ORDER_SUMMARY.numberTicktes }</strong></a>
            <a>Price per ticket: <strong>$${ ORDER_SUMMARY.ticketPrice }</strong></a>
            <a>Subtotal: <strong>$${ ORDER_SUMMARY.subtotal }</strong></a>
            <a>Tax (13%): <strong>$${ ORDER_SUMMARY.tax }</strong></a>
            <a>Final Price: <strong>$${ ORDER_SUMMARY.finalPrice }</strong></a>
            <button class="btn-primary" id="btn-pay">Confirm and pay</button>
    `;
    
    document.querySelector("#btn-pay").addEventListener("click", btnPayPressed)
}

const loadSelectTicketOption = () => {
    for (let i = 0; i < TICKETS_PRICE.length; i++) {
        const item = TICKETS_PRICE[i];
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
