let contener = document.querySelector(".contener")

function redistation(plc) {
    plc.innerHTML = ""

    let title = document.createElement("h1") 
    let form  = document.createElement("form")
    let email = document.createElement("input")
    let name = document.createElement("input")
    let surName = document.createElement("input")
    let password = document.createElement("input")
    let button = document.createElement("button")
    let h4 = document.createElement("h4")
    
    title.innerHTML = "Регистрация"
    button.innerHTML = "Продолжить"
    h4.innerHTML = "Войти в аккаунт"
    
    email.type = "email"
    email.name = "email"
    email.placeholder = "Почта"
    email.required =
    name.type = "text"
    name.name = "name"
    name.placeholder = "Имя"
    name.required =
    surName.type = "text"
    surName.name = "surName"
    surName.placeholder = "Фамилия"
    surName.required =
    password.type = "password"
    password.name = "password"
    password.placeholder = "Пароль"
    password.required =
    form.name = "regiatration"
    
    plc.append(title, form, h4)
    form.append(email, name, surName, password, button)

    // functions

    // h4.onclick = ()=>{
    //     localStorage.setItem("enter", "ee")
    //     location.reload()
    // }
}


function enter(plc) {
    plc.innerHTML = ""

    let title = document.createElement("h1") 
    let form  = document.createElement("form")
    let email = document.createElement("input")
    let password = document.createElement("input")
    let button = document.createElement("button")
    let h4 = document.createElement("h4")
    
    title.innerHTML = "Войти в аккаунт"
    button.innerHTML = "Продолжить"
    h4.innerHTML = "Регистрация"
    
    email.type = "email"
    password.type = "password"

    email.placeholder = "Почта"
    password.placeholder = "Пароль"

    form.name = "enter"
    email.name = "email"
    password.name = "password"

    email.required =
    password.required =
    
    plc.append(title, form, h4)
    form.append(email,  password, button)

    // functions
    // h4.onclick = ()=>{
    //     localStorage.removeItem("enter", "ee")
    //     localStorage.removeItem("users")
    //     location.reload()
    // }
}


if(typeof(localStorage.users) !== "string"){

    redistation(contener)

    let formRegiatration = document.forms.regiatration

    let users1 =  {}

    formRegiatration.onsubmit = (event) => {
        event.preventDefault()
    
        submit(formRegiatration)
    
        localStorage.setItem("users", JSON.stringify(users1))
        contener.style.display = "none"
        window.location.href = "../html/index2.html"

    }

    function submit(form) {
        let get = {}
        
        let fm = new FormData(form)
        fm.forEach((value, key) => {
        get[key] = value
        })
    
        users1 = get
    }

} else{
    
   

    enter(contener)

    let formEnter = document.forms.enter

    let users2 =  {}

    formEnter.onsubmit = (e) => {
        e.preventDefault()
    
        submit(formEnter)
        if(users2.email === JSON.parse(localStorage.getItem("users")).email &&
        users2.password === JSON.parse(localStorage.getItem("users")).password){
            window.location.href = "../html/index2.html"
        }
    }

    function submit(form) {
        let get = {}
        
        let fm = new FormData(form)
        fm.forEach((value, key) => {
        get[key] = value
        })
    
        users2 = get
    }
}

console.log(typeof(localStorage.users) === "string");