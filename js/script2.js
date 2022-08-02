import {users} from "./bd.js"


let email_adres = document.querySelectorAll(".email_adres , .email_adres_bule")
let name = document.querySelector(".name")
let exit = document.querySelector(".exit")
let w1 = document.querySelector(".w1")
let locations_cards = document.querySelectorAll(".locations_cards")
let tranzit = document.querySelectorAll(".tranzit")
let cards = document.querySelector(".cards")


email_adres.forEach(e => {
    e.innerHTML = JSON.parse(localStorage.users).email
});

name.innerHTML = JSON.parse(localStorage.users).name

exit.onclick=()=>{
    window.location.href = "../html/index1.html"
    localStorage.clear()
}

w1.style.textDecoration = "underline"

locations_cards.forEach(item=>{
    item.onclick=()=>{
        window.location.href = "../html/index3.html"
    }
})

tranzit.forEach(item=>{
    item.onclick=()=>{
        window.location.href = "../html/index4.html"
    }
})

function reload1(arr, plc) {
    plc.innerHTML = ""
    for(let item of arr){
        let card = document.createElement("div")
        let company = document.createElement("span")
        let total = document.createElement("span")
        let currency = document.createElement("span")

        card.classList.add("card")
        company.classList.add("company")
        total.classList.add("total")
        currency.classList.add("currency")

        company.innerHTML = item.company
        total.innerHTML = item.total
        currency.innerHTML = item.currency

        card.append(company, total, currency)
        plc.append(card)
    }
    
}

reload1(users, cards)