import {users} from "./bd.js"

let form = document.forms.card

let modal_bg = document.querySelector(".modal_bg")
let modal = document.querySelector(".modal")


let email_adres = document.querySelectorAll(".email_adres , .email_adres_bule")
let exit = document.querySelector(".exit")
let w1 = document.querySelector(".w1")
let locations_cards = document.querySelectorAll(".locations_cards")
let tranzit = document.querySelector(".tranzit")
let cards = document.querySelector(".cards")
let btn = document.querySelector(".add_card")

locations_cards[0].style.textDecoration = "underline"

email_adres.forEach(e => {
    e.innerHTML = JSON.parse(localStorage.users).email
});

exit.onclick=()=>{
    window.location.href = "../html/index1.html"
    localStorage.clear()
}

w1.onclick=()=>{
    window.location.href = "../html/index2.html"
}

tranzit.onclick=()=>{
    window.location.href = "../html/index4.html"
}

function reload(arr, plc) {
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

reload(users, cards)

btn.onclick=()=>{
    modal_bg.style.display = "block"
    modal.style.display = "block"
}

form.onsubmit=(event)=>{
    event.preventDefault()

    let info = {}

    let fm = new FormData(form)
    fm.forEach((value, key)=>{
        info[key] = value       
    })

    users.push(info)
    reload(users, cards)

    modal_bg.style.display = "none"
    modal.style.display = "none"

    let inputs = form.querySelectorAll("input")
    inputs.forEach(item=>{
        item.innerHTML = ""

    })
}