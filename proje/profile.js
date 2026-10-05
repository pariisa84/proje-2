let home = document.querySelector("div.header>span.editing")
let img = document.querySelector("div.header>img")
let backgender = document.querySelector("div.backgender")
let gendermodal = document.querySelector("div.backgender>div.gendermodal")
let close = document.querySelector("div.backgender>div.gendermodal>div.top>i")
let woman = document.querySelector("div.backgender>div.gendermodal>div.woman>input")
let man = document.querySelector("div.backgender>div.gendermodal>div.man>input")
let gendertxt = document.querySelector("div.infor>div.gender>a.gender>h5")
let opengender = document.querySelector("div.infor>div.gender>a.gender")
let infocard = document.querySelector("div.cardbadge>div.info")
let cardbadge = document.querySelector("div.cardbadge")
let information = document.querySelector("div.infor")
let arrowicon = document.querySelector("div.welcome>i.fa-arrow-right")
let welcome = document.querySelector("div.welcome")
let submitbtn = document.querySelector("div.infor>div.btn>button")
let fname = document.querySelector("div.infor>div.fname>input")
let lname = document.querySelector("div.infor>div.lname>input")
let email = document.querySelector("div.infor>div.email>input")
let phone = document.querySelector("div.infor>div.phone>input")
let code = document.querySelector("div.infor>div.code>input")
let birth = document.querySelector("div.infor>div.birth>input")
let welcomename = document.querySelector("div.welcome>div.text>span.welcome>h4.name")
let erroremail = document.querySelector("div.infor>div.email>h4.error")
let errorcode = document.querySelector("div.infor>div.code>h4.error")
let errorphone = document.querySelector("div.infor>div.phone>h4.error")
let backlog = document.querySelector("div.backlog")
let logout = document.querySelector("div.cardbadge>div.logout")
let closelog = document.querySelector("div.backlog>div.logout>div.top>i")
let yes = document.querySelector("div.backlog>div.logout>div.button>button.yes")
let no = document.querySelector("div.backlog>div.logout>div.button>button.no")
let walletcard = document.querySelector("div.cardbadge>div.wallet")
let wallet = document.querySelector("div.wallets")
let backwallet = document.querySelector("div.wallets>div.right>div.back>i")
let inputwallet = document.querySelector("div.wallets>div.right>input")
let numwallet = document.querySelectorAll("div.wallets>div.right>div.suggest>button")
let cartnum = document.querySelector("div.wallets>div.left>div.cart>div.mojodi>div.num>h4.num")
let change = document.querySelector("div.wallets>div.right>button")
let trans = document.querySelector("div.transactions")
let transcard = document.querySelector("div.cardbadge>div.transaction")
let transback = document.querySelector("div.transactions>div.one>i")
let askcard = document.querySelector("div.cardbadge>div.question")
let question = document.querySelector("div.questions")
let aboutcard = document.querySelector("div.cardbadge>div.about")
let about = document.querySelector("div.aboutas")
let contactcard = document.querySelector("div.cardbadge>div.contact")
let contact = document.querySelector("div.contacts")
let inputs = document.querySelectorAll("input.inputs")
let subbtn = document.querySelector("div.contacts>div.tamas>button.btn")
let favcard = document.querySelector("div.cardbadge>div.fav")
let favorite = document.querySelector("div.favorite")
let backfav = document.querySelector("div.favorite>div.back>i")
let add = document.querySelector("div.favorite>div.add>i")
let addmodal = document.querySelector("div.backadd")
let closeadd = document.querySelector("div.backadd>div.add>div.top>i")
let editbtn = document.querySelector("div.backadd>div.add>div.btns>button.del")
let closeedit = document.querySelector("div.backedit>div.edit>div.top>i")
let editmodal = document.querySelector("div.backedit")
let jnob = document.querySelector("div.backedit>div.edit>div.btns>button.jnob")
let shomal = document.querySelector("div.backedit>div.edit>div.btns>button.shomal")
let delmodal = document.querySelector("div.backdel")
let closedel = document.querySelector("div.backdel>div.delet>div.top>i")
let yesdel = document.querySelector("div.backdel>div.delet>div.btns>button.yes")
let nodel = document.querySelector("div.backdel>div.delet>div.btns>button.no")
let jnobcards = document.querySelector("div.favorite>div.jnob")
let shomalcards = document.querySelector("div.favorite>div.shomal")
let selecttodel = null
let message = document.querySelector("div.message")
let travelcard = document.querySelector("div.cardbadge>div.travel")
let mytravel = document.querySelector("div.mytravel")
let nowbtn = document.querySelector("div.mytravel>div.two>div.now")
let beforbtn = document.querySelector("div.mytravel>div.two>div.befor")
let texttravel = document.querySelectorAll(".mytravel .left")
let backtravel = document.querySelector("div.mytravel>div.one>i")
let travelmodal = document.querySelector("div.backtravel")
let closetravel = document.querySelector("div.backtravel>div.travelmodal>div.one>i")
let resmenu = document.querySelector("div.resmenu")
let resopeninfo = document.querySelector("div.welcome>i.fa-angle-left")
let reshome = document.querySelector("div.resmenu>div.home")
let resfav = document.querySelector("div.resmenu>div.fav")
let restravel = document.querySelector("div.resmenu>div.travel")
let reslogin = document.querySelector("div.resmenu>div.login")
let genderclose = document.querySelector("div.backgender>div.gendermodal>hr")
let resbackcontact = document.querySelector("div.contacts>div.tamas>div.back>i")
let resbackabout = document.querySelector("div.aboutas>div.back>i")
let resbacklogout = document.querySelector("div.backlog>div.logout>hr")
let resbacktravel = document.querySelector("div.backtravel>div.travelmodal>hr")
let resbackadd = document.querySelector("div.backadd>div.add>hr")
let resbackedit = document.querySelector("div.backedit>div.edit>hr")
let resbackdelet = document.querySelector("div.backdel>div.delet>hr")

// start homepage
home.addEventListener("click", function () {
    cardbadge.style.display = "flex"
    welcome.style.display = "flex"
    information.style.display = "none"
    arrowicon.style.display = "none"
    welcome.style.marginRight = ""
    wallet.style.display = "none"
    trans.style.display = "none"
    question.style.display = "none"
    about.style.display = "none"
    contact.style.display = "none"
    travelcard.style.display = "none"
})

img.addEventListener("click", function () {
    window.location.href = "proje2.html"
})
// end homepage

// start gendermodal
opengender.addEventListener("click", function (e) {
    e.preventDefault()
    backgender.style.display = "flex"
})

close.addEventListener("click", function () {
    backgender.style.display = "none"
})

woman.addEventListener("change", function () {
    gendertxt.textContent = "زن"
    gendertxt.style.color = "#23292E"
    backgender.style.display = "none"
})

man.addEventListener("change", function () {
    gendertxt.textContent = "مرد"
    gendertxt.style.color = "#23292E"
    backgender.style.display = "none"
})
// end gendermodal

// start infocard
infocard.addEventListener("click", function () {
    cardbadge.style.display = "none"
    arrowicon.style.display = "flex"
    welcome.style.marginRight = "150px"
    information.style.display = "flex"
})

arrowicon.addEventListener("click", function () {
    information.style.display = "none"
    cardbadge.style.display = "flex"
    arrowicon.style.display = "none"
    welcome.style.marginRight = ""
})

submitbtn.addEventListener("click", function (e) {
    e.preventDefault()
    let isvalid = true

    if (!email.value.endsWith("@gmail.com")) {
        erroremail.style.display = "block"
        isvalid = false
    }
    else {
        erroremail.style.display = "none"
    }

    let phonerange = /^[0-9]{11}$/

    if (!phonerange.test(phone.value)) {
        errorphone.style.display = "block"
        isvalid = false
    }
    else {
        errorphone.style.display = "none"
    }

    let coderange = /^[0-9]+$/

    if (!coderange.test(code.value)) {
        errorcode.style.display = "block"
        isvalid = false
    }
    else {
        errorcode.style.display = "none"
    }

    if (!isvalid) {
        return
    }

    localStorage.setItem("fname", fname.value)
    localStorage.setItem("lname", lname.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("code", code.value)
    localStorage.setItem("birth", birth.value)
    localStorage.setItem("gender", gendertxt.textContent)

    information.style.display = "none"
    cardbadge.style.display = "flex"
    arrowicon.style.display = "none"
    welcome.style.marginRight = ""

    if (fname.value && lname.value) {
        welcomename.textContent = fname.value + " " + lname.value
    }
})
// end infocard

// start transaction
transcard.addEventListener("click", function () {
    cardbadge.style.display = "none"
    welcome.style.display = "none"
    trans.style.display = "flex"
})

transback.addEventListener("click", function () {
    cardbadge.style.display = "flex"
    welcome.style.display = "flex"
    trans.style.display = "none"
})
// end transaction

// start logout modal
logout.addEventListener("click", function () {
    backlog.style.display = "flex"
})

closelog.addEventListener("click", function () {
    backlog.style.display = "none"
})

no.addEventListener("click", function () {
    backlog.style.display = "none"
})

yes.addEventListener("click", function () {
    localStorage.removeItem("fname")
    localStorage.removeItem("lname")
    localStorage.removeItem("email")
    localStorage.removeItem("phone")
    localStorage.removeItem("code")
    localStorage.removeItem("birth")
    localStorage.removeItem("gender")

    window.location.href = "proje2.html"
})
// end logout modal

// start favorite
favcard.addEventListener("click", function () {
    cardbadge.style.display = "none"
    welcome.style.display = "none"
    favorite.style.display = "flex"
})

backfav.addEventListener("click", function () {
    cardbadge.style.display = "flex"
    welcome.style.display = "flex"
    favorite.style.display = "none"
})

add.addEventListener("click", function () {
    addmodal.style.display = "flex"
})

closeadd.addEventListener("click", function () {
    addmodal.style.display = "none"
})

closeedit.addEventListener("click", function () {
    editmodal.style.display = "none"
})

editbtn.addEventListener("click", function () {
    addmodal.style.display = "none"
    editmodal.style.display = "flex"
})

closedel.addEventListener("click", function () {
    selecttodel = null
    delmodal.style.display = "none"
})

jnob.addEventListener("click", function () {
    selecttodel = jnobcards
    editmodal.style.display = "none"
    delmodal.style.display = "flex"
})

shomal.addEventListener("click", function () {
    selecttodel = shomalcards
    editmodal.style.display = "none"
    delmodal.style.display = "flex"
})

nodel.addEventListener("click", function () {
    selecttodel = null
    delmodal.style.display = "none"
})

yesdel.addEventListener("click", function () {
    if (selecttodel) {
        selecttodel.remove()
        selecttodel = null
        show()
    }
    delmodal.style.display = "none"
})

function show() {
    message.classList.add("show")
    setTimeout(function () {
        message.classList.remove("show")
    }, 5000)
}
// end favorite

// start walletcard
walletcard.addEventListener("click", function () {
    cardbadge.style.display = "none"
    welcome.style.display = "none"
    wallet.style.display = "flex"
})

backwallet.addEventListener("click", function () {
    wallet.style.display = "none"
    cardbadge.style.display = "flex"
    welcome.style.display = "flex"
})

numwallet.forEach(function (btn) {
    btn.addEventListener("click", function () {
        inputwallet.value = btn.getAttribute("data-amount")
        cartnum.textContent = Number(btn.getAttribute("data-amount")).toLocaleString("en-US")
    })
})

inputwallet.addEventListener("input", function () {
    let value = this.value.replace(/,/g, "")

    if (value === "") {
        cartnum.textContent = "0"
        return
    }

    cartnum.textContent = Number(value).toLocaleString("en-US")
})

change.addEventListener("click", function () {
    inputwallet.value = ""
    wallet.style.display = "none"
    cardbadge.style.display = "flex"
    welcome.style.display = "flex"
})
// end walletcard

// start question
askcard.addEventListener("click", function () {
    cardbadge.style.display = "none"
    welcome.style.display = "none"
    question.style.display = "flex"
})
// end question

// start contact
contactcard.addEventListener("click", function () {
    cardbadge.style.display = "none"
    welcome.style.display = "none"
    contact.style.display = "flex"
})

function checkInputs() {
    let all = true

    inputs.forEach(function (input) {
        if (input.value.trim() == "") {
            all = false
            input.style.border = "1px solid #B3222D"
        }
        else {
            input.style.border = ""
        }
    })

    if (all) {
        subbtn.disabled = false
    }
    else {
        subbtn.disabled = true
    }
}

inputs.forEach(function (input) {
    input.addEventListener("input", checkInputs)
})

subbtn.addEventListener("click", function (e) {
    inputs.forEach(function (input) {
        input.value = ""
    })
    checkInputs()
})
// end contact

// start about
aboutcard.addEventListener("click", function () {
    cardbadge.style.display = "none"
    welcome.style.display = "none"
    about.style.display = "flex"
})
// end about

// start mytravel
travelcard.addEventListener("click", function () {
    cardbadge.style.display = "none"
    welcome.style.display = "none"
    mytravel.style.display = "flex"
})

let original = []
texttravel.forEach(function (text) {
    original.push(text.innerHTML)
})

function activenow() {
    nowbtn.style.border = "1px solid #0D7D96"
    nowbtn.style.color = "#0D7D96"
    beforbtn.style.border = ""
    beforbtn.style.color = ""

    texttravel.forEach(function (text, index) {
        text.innerHTML = original[index]
    })
}

function activebefor() {
    beforbtn.style.border = "1px solid #0D7D96"
    beforbtn.style.color = "#0D7D96"
    nowbtn.style.border = ""
    nowbtn.style.color = ""

    texttravel.forEach(function (text) {
        text.innerHTML = `<h3 style="color: #E63946;">اتمام مهلت پرداخت</h3>`
    })
}

nowbtn.addEventListener("click", activenow)
beforbtn.addEventListener("click", activebefor)

backtravel.addEventListener("click", function () {
    cardbadge.style.display = "flex"
    welcome.style.display = "flex"
    mytravel.style.display = "none"
})

texttravel.forEach(function (text) {
    text.addEventListener("click", function () {
        travelmodal.style.display = "flex"
    })
})

closetravel.addEventListener("click", function () {
    travelmodal.style.display = "none"
})
// end mytravel

// start responsive information
welcome.addEventListener("click", function () {
    if (!(window.matchMedia("(max-width:992px)")).matches) return

    information.style.display = "flex"
    cardbadge.style.display = "none"
    arrowicon.style.display = "block"
    resmenu.style.display = "none"
    welcome.style.borderBottom = "none"
    resopeninfo.style.setProperty("display", "none", "important")
})

reslogin.addEventListener("click", function () {
    if (!(window.matchMedia("(max-width:992px)")).matches) return

    information.style.display = "flex"
    cardbadge.style.display = "none"
    arrowicon.style.display = "block"
    resmenu.style.display = "none"
    welcome.style.borderBottom = "none"
    resopeninfo.style.setProperty("display", "none", "important")
})

arrowicon.addEventListener("click", function (e) {
    if (!(window.matchMedia("(max-width:992px)")).matches) return
    e.stopPropagation()

    information.style.display = "none"
    cardbadge.style.display = "flex"
    arrowicon.style.display = "none"
    resmenu.style.display = "flex"
    welcome.style.borderBottom = ""
    resopeninfo.style.display = "block"
})

genderclose.addEventListener("click", function () {
    backgender.style.display = "none"
})
// end responsive information

// start responsive wallet
walletcard.addEventListener("click", function () {
    resmenu.style.display = "none"
})

backwallet.addEventListener("click", function () {
    if (window.matchMedia("(max-width:992px)").matches) {
        resmenu.style.display = "flex"
    }
})
// end responsive wallet

// start responsive transaction
transcard.addEventListener("click", function () {
    resmenu.style.display = "none"
})

transback.addEventListener("click", function () {
    trans.style.display = "none"
    cardbadge.style.display = "flex"
    if (window.matchMedia("(max-width:992px)").matches) {
        resmenu.style.display = "flex"
    }
})
// end responsive transaction

// start responsive contact
contactcard.addEventListener("click", function () {
    resmenu.style.display = "none"
})

resbackcontact.addEventListener("click", function () {
    contact.style.display = "none"
    cardbadge.style.display = "flex"
    resmenu.style.display = "flex"
    welcome.style.display = "flex"
})
// end responsive contact

// start responsive about
aboutcard.addEventListener("click", function () {
    resmenu.style.display = "none"
})

resbackabout.addEventListener("click", function () {
    about.style.display = "none"
    cardbadge.style.display = "flex"
    resmenu.style.display = "flex"
    welcome.style.display = "flex"
})
// end responsive about

// start responsive logout
resbacklogout.addEventListener("click", function () {
    backlog.style.display = "none"
})
// end responsive logout

// start responsive favorite
resfav.addEventListener("click", function () {
    favorite.style.display = "flex"
    resfav.style.color = "#0D7D96"
    welcome.style.display = "none"
    cardbadge.style.display = "none"
    resmenu.style.zIndex = "11"
})

resbackadd.addEventListener("click", function () {
    addmodal.style.display = "none"
})

resbackedit.addEventListener("click", function () {
    addmodal.style.display = "none"
    editmodal.style.display = "none"
})

resbackdelet.addEventListener("click", function () {
    addmodal.style.display = "none"
    editmodal.style.display = "none"
    delmodal.style.display = "none"
})
// end responsive favorite

// start responsive travel
restravel.addEventListener("click", function () {
    mytravel.style.display = "flex"
    restravel.style.color = "#0D7D96"
    welcome.style.display = "none"
    cardbadge.style.display = "none"
    resmenu.style.zIndex = "11"
})

resbacktravel.addEventListener("click", function () {
    travelmodal.style.display = "none"
})
// end responsive travel

// start responsive menu
let tablet = window.matchMedia("(max-width: 992px)")
let section = {
    home: [cardbadge, welcome],
    fav: [favorite],
    travel: [mytravel],
    login: [information]
}

function showsection(name) {
    if (!section[name]) return
    Object.values(section).flat().forEach(el => {
        if (el) {
            el.style.display = "none"
        }
    })
        ;[wallet, trans, question, contact].forEach(el => {
            if (el) {
                el.style.display = "none"
            }
        })
    arrowicon.style.display = "none"
    welcome.style.borderBottom = ""
    resmenu.style.display = "flex"

    section[name].forEach(el => {
        if (el) {
            el.style.display = "flex"
        }
    })

    if (name == "login") {
        welcome.style.display = "flex"
        welcome.style.borderBottom = "none"
        arrowicon.style.display = "block"
        resopeninfo.style.setProperty("display", "none", "important")
    }
    else {
        resopeninfo.style.display = "block"
    }
}

document.querySelectorAll("div.resmenu>div").forEach(item => {
    item.addEventListener("click", function () {
        if (!tablet.matches) return
        if (item.classList.contains("home")) return
        showsection(item.dataset.target)
        document.querySelectorAll("div.resmenu>div").forEach(elem => elem.classList.remove("active"))
        item.classList.add("active")
    })
})

function backhome() {
    if (!tablet.matches) return
    showsection("home")
    document.querySelectorAll("div.resmenu>div").forEach(elem => elem.classList.remove("active"))
}

backwallet.addEventListener("click", backhome)
transback.addEventListener("click", backhome)
resbackcontact.addEventListener("click", backhome)

arrowicon.addEventListener("click", function (e) {
    e.stopPropagation()
    backhome()
})

tablet.addEventListener("change", function (e) {
    if (!e.matches) {
        ;[cardbadge, welcome, information, favorite, mytravel, resmenu, arrowicon].forEach(element => {
            if (element) {
                element.style.display = ""
            }
        })
        welcome.style.borderBottom = ""
    }
})

reshome.addEventListener("click", function () {
    if (!tablet.matches) return
    window.location.href = "proje2.html"
})
// end responsive menu

// start persiannum
function persianNumbers(text) {
    const numbers = {
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹"
    };

    return text.replace(/[0-9]/g, n => numbers[n]);
}

function convertNumbers(element) {
    if (
        element.classList.contains("datepicker-plot-area") ||
        element.closest(".datepicker-plot-area")
    ) {
        return;
    }

    element.childNodes.forEach(node => {

        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = persianNumbers(node.textContent);
        }

        else if (node.nodeType === Node.ELEMENT_NODE) {
            convertNumbers(node);
        }

    });
}

convertNumbers(document.body);
// end persiannum