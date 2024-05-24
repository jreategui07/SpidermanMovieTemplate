const TICKETS_PRICE = [
    {
        "code": "ODP",
        "name": "One Day Pass",
        "price": 95
    },
    {
        "code": "AAP",
        "name": "All Access Pass",
        "price": 274
    }
]

const TAX_RATE = 0.13
const NUMBER_OF_DECIMALS = 2

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

    // validations of data
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

    // proccess order summary
    let ticketPrice = 0
    for (let i = 0; i < TICKETS_PRICE.length; i++) {
        if (TICKETS_PRICE[i].code === FORM_DATA.ticketType) {
            ticketPrice = TICKETS_PRICE[i].price
        }
    }

    let subtotal = ticketPrice * parseFloat(FORM_DATA.numberTicktes)
    let tax = subtotal * TAX_RATE
    let finalPrice = subtotal + tax

    const ORDER_SUMMARY = {
        ticketType: FORM_DATA.ticketType,
        numberTicktes: FORM_DATA.numberTicktes,
        ticketPrice: ticketPrice.toFixed(NUMBER_OF_DECIMALS),
        subtotal: subtotal.toFixed(NUMBER_OF_DECIMALS),
        tax: tax.toFixed(NUMBER_OF_DECIMALS),
        finalPrice: finalPrice.toFixed(NUMBER_OF_DECIMALS)
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
    
    document.querySelector("#orderSummary").style.display = "flex";
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
