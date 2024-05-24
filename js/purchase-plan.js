const PLANS_PRICE = [
    {
        "code": "ODP",
        "name": "One Day Pass",
        "price": 9.99
    },
    {
        "code": "MP",
        "name": "Monthly Pass",
        "price": 29.99
    }
]

const TAX_RATE = 0.13
const NUMBER_OF_DECIMALS = 2

const resetValues = () => {
    localStorage.removeItem("ORDER_SUMMARY_IN_PROGRESS")
    document.querySelector("#select-plan-type").value = ""
    document.querySelector("#txt-number-users").value = ""
    document.querySelector("#txt-credit-card").value = ""
    document.querySelector("#order-summary-list").innerHTML = ""
    document.querySelector("#orderSummary").style.display = "none";
}

const btnOrderSummary = () => {
    document.querySelector("#order-summary-list").innerHTML = ""

    // validations of data
    const FORM_DATA = {
        planType: document.querySelector("#select-plan-type").value,
        numberUsers: document.querySelector("#txt-number-users").value,
        creditCard: document.querySelector("#txt-credit-card").value
    }

    if (
        FORM_DATA.planType.trim() === "" ||
        FORM_DATA.numberUsers.trim() === "" ||
        FORM_DATA.creditCard.trim() === ""
    ) {
        alert("WARNING: Should select plan type and provide number of users and credit card information")
        return
    }

    if (
        FORM_DATA.creditCard.length != 6 ||
        isNaN(FORM_DATA.creditCard)
    ) {
        alert("WARNING: Credit card should contain 6 numbers");
        return
    }

    // proccess order summary
    let userPrice = 0
    for (let i = 0; i < PLANS_PRICE.length; i++) {
        if (PLANS_PRICE[i].code === FORM_DATA.planType) {
            userPrice = PLANS_PRICE[i].price
        }
    }

    let subtotal = userPrice * parseFloat(FORM_DATA.numberUsers)
    let tax = subtotal * TAX_RATE
    let finalPrice = subtotal + tax

    const ORDER_SUMMARY = {
        planType: FORM_DATA.planType,
        numberUsers: FORM_DATA.numberUsers,
        userPrice: userPrice.toFixed(NUMBER_OF_DECIMALS),
        subtotal: subtotal.toFixed(NUMBER_OF_DECIMALS),
        tax: tax.toFixed(NUMBER_OF_DECIMALS),
        finalPrice: finalPrice.toFixed(NUMBER_OF_DECIMALS),
        creditCard: FORM_DATA.creditCard
    }

    localStorage.setItem("ORDER_SUMMARY_IN_PROGRESS", JSON.stringify(ORDER_SUMMARY))
    showOrderSummary(ORDER_SUMMARY)
}

const showOrderSummary = (ORDER_SUMMARY) => {
    document.querySelector("#order-summary-list").innerHTML += `
        <a>Plan type: <strong>${ ORDER_SUMMARY.planType }</strong></a>
        <a>Number of users: <strong>${ ORDER_SUMMARY.numberUsers }</strong></a>
        <a>Price per user: <strong>$${ ORDER_SUMMARY.userPrice }</strong></a>
        <a>Subtotal: <strong>$${ ORDER_SUMMARY.subtotal }</strong></a>
        <a>Tax (13%): <strong>$${ ORDER_SUMMARY.tax }</strong></a>
        <a>Final Price: <strong>$${ ORDER_SUMMARY.finalPrice }</strong></a>
        <button class="btn-primary" id="btn-pay">Confirm and purchase</button>
        <button class="btn-primary" id="btn-reset">Cancel</button>
    `;
    document.querySelector("#orderSummary").style.display = "flex";
    document.querySelector("#btn-pay").addEventListener("click", btnPayPressed)
    document.querySelector("#btn-reset").addEventListener("click", btnResetPressed)
}

const resumeForm = (ORDER_SUMMARY) => {
    document.querySelector("#select-plan-type").value = ORDER_SUMMARY.planType
    document.querySelector("#txt-number-users").value = ORDER_SUMMARY.numberUsers
    document.querySelector("#txt-credit-card").value = ORDER_SUMMARY.creditCard
}

const loadSelectOption = () => {
    for (let i = 0; i < PLANS_PRICE.length; i++) {
        const item = PLANS_PRICE[i];
        document.querySelector("#select-plan-type").innerHTML += `
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
    loadSelectOption()
    document.querySelector("#orderSummary").style.display = "none";
    const ORDER_SUMMARY_IN_PROGRESS = JSON.parse(localStorage.getItem("ORDER_SUMMARY_IN_PROGRESS"))
    if (ORDER_SUMMARY_IN_PROGRESS !== null) {
        resumeForm(ORDER_SUMMARY_IN_PROGRESS)
        showOrderSummary(ORDER_SUMMARY_IN_PROGRESS)
    }
});

document.querySelector("#btn-order-summary").addEventListener("click", btnOrderSummary)
