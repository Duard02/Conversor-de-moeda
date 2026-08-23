const convertButton = document.querySelector(".convert-button")
const chosencoin = document.querySelector("#opcaodois")

function convertValue() {
    const inputCureeencyValue = document.querySelector("#input-currency").value
    const currencytoConverter = document.querySelector("#currencytoConverter")
    const currencyConverted = document.querySelector("#currencyConverted")

    const dolarValue = 5.21
    const libravalue = 7.01

    currencytoConverter.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCureeencyValue)


    if (chosencoin.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCureeencyValue / dolarValue)
    }

    if (chosencoin.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "GBP"
        }).format(inputCureeencyValue / libravalue)
    }
}

function convertformat() {
    const namecoin = document.querySelector("#namecoin")
    const imgcoin = document.querySelector("#imgcoin")

    if (chosencoin.value == "dolar") {
        namecoin.innerHTML = "Dólar Americano"
        imgcoin.src = "./assets/EUA.webp"
    }

    if (chosencoin.value == "libra") {
        namecoin.innerHTML = "Libra Esterlina"
        imgcoin.src = "./assets/LIBRA.png"
    }

    convertValue()
}

convertButton.addEventListener("click", convertValue)
chosencoin.addEventListener("change", convertformat)