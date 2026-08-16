const convertButton = document.querySelector(".convert-button")

function convertValue() {
    const inputCureeencyValue = document.querySelector("#input-currency").value
    const currencytoConverter = document.querySelector("#currencytoConverter")
    const currencyConverted = document.querySelector("#currencyConverted")
    
    const dolarValue = 5.21

    const convertedValue  = inputCureeencyValue / dolarValue
    
    currencytoConverter.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCureeencyValue)

    currencyConverted.innerHTML = new Intl.NumberFormat("pt-br",{
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

}

convertButton.addEventListener("click", convertValue) 