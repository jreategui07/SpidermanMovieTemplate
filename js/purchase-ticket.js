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

const resetValues = () => {
    localStorage.removeItem("ORDER_SUMMARY_IN_PROGRESS")
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

    localStorage.setItem("ORDER_SUMMARY_IN_PROGRESS", JSON.stringify(ORDER_SUMMARY))
    showOrderSummary(ORDER_SUMMARY)
}

const showOrderSummary = (ORDER_SUMMARY) => {
    document.querySelector("#order-summary-list").innerHTML += `
        <a>Ticket type: <strong>${ ORDER_SUMMARY.ticketType }</strong></a>
        <a>Number of tickets: <strong>${ ORDER_SUMMARY.numberTicktes }</strong></a>
        <a>Price per ticket: <strong>$${ ORDER_SUMMARY.ticketPrice }</strong></a>
        <a>Subtotal: <strong>$${ ORDER_SUMMARY.subtotal }</strong></a>
        <a>Tax (13%): <strong>$${ ORDER_SUMMARY.tax }</strong></a>
        <a>Final Price: <strong>$${ ORDER_SUMMARY.finalPrice }</strong></a>
        <button class="btn-primary" id="btn-pay">Confirm and pay</button>
        <button class="btn-primary" id="btn-reset">Reset</button>
    `;
    document.querySelector("#orderSummary").style.display = "flex";
    document.querySelector("#btn-pay").addEventListener("click", btnPayPressed)
    document.querySelector("#btn-reset").addEventListener("click", btnResetPressed)
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
    resetValues()
}

const btnResetPressed = () => {
    resetValues()
}

document.addEventListener('DOMContentLoaded', function() {
    loadSelectTicketOption()
    document.querySelector("#orderSummary").style.display = "none";
    const ORDER_SUMMARY_IN_PROGRESS = JSON.parse(localStorage.getItem("ORDER_SUMMARY_IN_PROGRESS"))
    if (ORDER_SUMMARY_IN_PROGRESS !== null) {
        showOrderSummary(ORDER_SUMMARY_IN_PROGRESS)
    }
});

document.querySelector("#btn-order-summary").addEventListener("click", btnOrderSummary)
