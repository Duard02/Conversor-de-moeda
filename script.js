const convertButton = document.querySelector(".convert-button")
const chosencoin = document.querySelector("#opcaodois")

function convertValue() {
    const inputCureeencyValue = document.querySelector("#input-currency").value
    const currencytoConverter = document.querySelector("#currencytoConverter")
    const currencyConverted = document.querySelector("#currencyConverted")

    const dolarValue = 5.21
    const libravalue = 7.01
    const eurovalue = 6
    const chinavalue = 0.76
    const japvalue = 0.032

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

    if (chosencoin.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "EUR"
        }).format(inputCureeencyValue / eurovalue)
    }

    if (chosencoin.value == "jap") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "JPY"
        }).format(inputCureeencyValue / japvalue)
    }

    if (chosencoin.value == "chi") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "CNY"
        }).format(inputCureeencyValue / chinavalue)
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

    if (chosencoin.value == "euro") {
        namecoin.innerHTML = "Euro"
        imgcoin.src = "./assets/Euro.png"
    }

    if (chosencoin.value == "chi") {
        namecoin.innerHTML = "Yuan Chinês"
        imgcoin.src = "./assets/China.webp"
    }

    if (chosencoin.value == "jap") {
        namecoin.innerHTML = "Iene Japonês"
        imgcoin.src = "./assets/Japão.jpg"
    }
    convertValue()
}

convertButton.addEventListener("click", convertValue)
chosencoin.addEventListener("change", convertformat)