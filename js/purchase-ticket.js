const DEFAULT_FORM = ""

let ticketType = ""
let numberTicktes = ""
let creditCard = ""

const cleanForm = () => {
    document.querySelector("#select-ticket-type").value = ""
    document.querySelector("#txt-number-ticktes").value = ""
    document.querySelector("#txt-credit-card").value = ""
}

const buyTickts = () => {
    alert("SUCCESS: Transaction done")
}

const btnPayPressed = () => {
    // check values
    ticketType = document.querySelector("#select-ticket-type").value
    numberTicktes = document.querySelector("#txt-number-ticktes").value
    creditCard = document.querySelector("#txt-credit-card").value

    console.log(`ticketType: ${ ticketType }`)
    console.log(`numberTicktes: ${ numberTicktes }`)
    console.log(`creditCard: ${ creditCard }`)

    if (ticketType.trim() === "" || numberTicktes.trim() === "" || creditCard.trim() === "") {
        alert("ERROR: Should provide ticket type, number of tickets hours credit card information")
        return
    }

    if (creditCard.length != 6) {
        alert("ERROR: CreditCard Should contain 6 digits");
        return
    }

    let totalPrice = numberTicktes * 12.50
    // calculate receipt
    document.querySelector("#order-summary-list").innerHTML += `
            <li>Ticket type: ${ ticketType }</li>
            <li>Number of tickets: ${ numberTicktes }</li>
            <li>Credit card: ${ creditCard }</li>
            <li>Total amount: ${ totalPrice.toFixed(2) }</li>
    `;

    // document.querySelector("#purchase-ticket-container").innerHTML += `
    //     <button id="btn-buy">Buy</button>
    // `
    
}

// buyTickts() // TODO: cuando preciona botón de comprar
// cleanForm() // TODO: despues e la compra


document.addEventListener('DOMContentLoaded', function() {
    DEFAULT_FORM = document.querySelector("#purchase")
    console.log("DEFAULT_FORM")
    console.log(DEFAULT_FORM)
});

document.querySelector("#btn-order-summary").addEventListener("click", btnPayPressed)
