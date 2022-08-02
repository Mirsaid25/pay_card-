import {users ,tranzactions} from "./bd.js"

let form = document.forms.tranzit

let modal_bg = document.querySelector(".modal_bg")
let modal = document.querySelector(".modal")

let email_adres = document.querySelectorAll(".email_adres , .email_adres_bule")
let exit = document.querySelector(".exit")
let w1 = document.querySelector(".w1")
let locations_cards = document.querySelector(".locations_cards")
let tranzit = document.querySelector(".tranzit")
let tbody = document.querySelector("tbody")
let btn = document.querySelector(".add_tranzaction")

tranzit.style.textDecoration = "underline"

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

locations_cards.onclick=()=>{
    window.location.href = "../html/index3.html"
}

btn.onclick=()=>{
    modal_bg.style.display = "block"
    modal.style.display = "block"
}

function reload(arr, plc) {
    plc.innerHTML = ""
    for(let item of arr){
        let tr = document.createElement("tr")
        let id = document.createElement("td")
        let company = document.createElement("td")
        let categ = document.createElement("td")
        let total = document.createElement("td")
        let time = document.createElement("td")

        id.innerHTML = item.id
        company.innerHTML = item.company
        categ.innerHTML = item.coteg
        total.innerHTML = item.total
        time.innerHTML = item.time

        tr.append(id,company,categ,total,time)
        plc.append(tr)
    }
}

reload(tranzactions ,tbody)

form.onsubmit=(event)=>{
    event.preventDefault()

    let info = [
        {
            id: Math.round(Math.random() * 104000),
        }
    ]

    let fm = new FormData(form)
    fm.forEach((value, key)=>{
        info[key] = value       
    })

   tranzactions.push(info)
    reload(tranzactions, tbody)

    modal_bg.style.display = "none"
    modal.style.display = "none"

    let inputs = form.querySelectorAll("input")
    inputs.forEach(item=>{
        item.innerHTML = ""

    })
}