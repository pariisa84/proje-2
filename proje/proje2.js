let phone = document.querySelector("#num")
let button = document.querySelector("#button")
let modal = document.querySelector("div.overlay")
let modallogin = document.querySelector("div.overlay>div.login")
let close = document.querySelector("div.overlay>div.login>i#close")
let login = document.querySelector("div.header>div.login>span#login")
let shownum = document.querySelector("div.overlay>div.sms>span>p#shownum")
let editnum = document.querySelector("div.overlay>div.sms>span>a")
let sms = document.querySelector("div.overlay>div.sms")
let x = document.querySelector("div.overlay>div.sms>i#x")
let btn = document.querySelector("div.overlay>div.sms>button#btn")
let code = document.querySelectorAll("div.overlay>div.sms>div>div.code>input")
let correctcode = "12345"
let timeLeft = 90
let timerElement = document.querySelector("#timer")
let timerInterval = null
let modalpen = false
let search1 = document.querySelector("div.top>div.searchbar")
let search2 = document.querySelector("div.top>div.searchbar1")
let menu1 = document.querySelector("div.top>div.header>div.menu")
let height = document.querySelector("div.top")
let backdate = document.querySelector("div.top>div#back")
let datemodal = document.querySelector("div.top>div#back>div#datemodal")
let vrod = document.querySelector("input[data-jdp].vrod")
let btnvrod = document.querySelector("#btnvrod")
let khrog = document.querySelector("input[data-jdp].khrog")
let btnkhrog = document.querySelector("#btnkhrog")
let textvrod = document.querySelector("h4#datevrod1")
let textkhrog = document.querySelector("h4#datekhrog1")
let backpeople = document.querySelector("div.top>div.backpeople")
let peoplemodal = document.querySelector("div.top>div.backpeople>div.peoplemodal")
let months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]
let minadult = document.querySelector(".minad")
let maxadult = document.querySelector(".maxad")
let numadult = document.querySelector("span.numad")
let minkids = document.querySelector(".minkids")
let maxkids = document.querySelector(".maxkids")
let numkids = document.querySelector("span.numkids")
let minbaby = document.querySelector(".minbaby")
let maxbaby = document.querySelector(".maxbaby")
let numbaby = document.querySelector("span.numbaby")
let peopletext = document.querySelector("div.searchbar>div.peoplenum>a.num>h5")
let citymodal = document.querySelector("div.top>div#searchcity>div#citymodal")
let backcity = document.querySelector("div.top>div#searchcity")
let city1 = document.querySelector("div.top>div.searchbar>div.city>a.city2")
let date1 = document.querySelector("div.top>div.searchbar>div.date>a.tarikh")
let people1 = document.querySelector("div.top>div.searchbar>div.peoplenum>a.num")
let city2 = document.querySelector("div.top>div.searchbar1>div.maghsad>a.city1")
let date2 = document.querySelector("div.top>div.searchbar1>div.date>a.forcemenu")
let people2 = document.querySelector("div.top>div.searchbar1>div.peoplenum>a.num1")
let editing = document.querySelector(".editing")
let backvrod = document.querySelector("div.backvrod")
let vrodmodal = document.querySelector("div.backvrod>div.vrodmodal")
let vrodnum = document.querySelector("div.backvrod>div.vrodmodal>input#vrodnum")
let bastn = document.querySelector("div.backvrod>div.vrodmodal>div.btn>button.bastn")
let edame = document.querySelector("div.backvrod>div.vrodmodal>div.btn>button.edame")
let filterbutton = document.querySelector("div.filter>div.filterbutton")
let filtertape = document.querySelector("div.filter.dastebar")
let backfilter = document.querySelector("div.backfilter")
let filtermodal = document.querySelector("div.backfilter>div.filtermodal")
let closefilter = document.querySelector("div.backfilter>div.filtermodal>div.left>i")
let plusroom = document.querySelector("div.backfilter>div.filtermodal>div.right>div.one>div.left>i.max")
let minroom = document.querySelector("div.backfilter>div.filtermodal>div.right>div.one>div.left>i.min")
let numroom = document.querySelector("div.backfilter>div.filtermodal>div.right>div.one>div.left>span.num")
let filternumone = document.querySelector("div.backfilter>div.filtermodal>div.left>div.all>div.one>div.btns>div.one")
let filternumtwo = document.querySelector("div.backfilter>div.filtermodal>div.left>div.all>div.one>div.btns>div.two")
let filternumthree = document.querySelector("div.backfilter>div.filtermodal>div.left>div.all>div.one>div.btns>div.three")
let filternumfour = document.querySelector("div.backfilter>div.filtermodal>div.left>div.all>div.one>div.btns>div.four")
let backalert = document.querySelector("div.backalert")
let closealertbtn = document.querySelector("div.backalert>div.alert>div.top>i")
let alertbtn = document.querySelector("div.backalert>div.alert>div.btn>button")
let backfav = document.querySelector("div.backfav")
let favmodal = document.querySelector("div.backfav>div.fav")
let closefav = document.querySelector("div.backfav>div.fav>div.top>i")
let listbox = document.querySelector("div.backfav>div.fav>div.list")
let addfav = document.querySelector("div.backfav>div.fav>div.add")
let backcreat = document.querySelector("div.backcreate")
let createmodal = document.querySelector("div.backcreate>div.create")
let closecreate = document.querySelector("div.backcreate>div.create>div.top>i")
let createinput = document.querySelector("div.backcreate>div.create>input")
let createbtn = document.querySelector("div.backcreate>div.create>button")
let modalheight = 296
let filtercount = document.querySelector("div.filter>div.filterbutton>span.filtercount")
let scoreselect = false
let mahsol = document.querySelector("div.mahsol")
let cardcontaner = document.querySelector("div.cardcontaner")
let showmore = document.querySelector("div.showmore")
let filters = document.querySelector("div.filter")
let clickedcard = false
let img = document.querySelector("div.top>div.header>div.logo>img")
let resbackmahsol = document.querySelector("div.mahsol>div.swipers>i")
let topmahsol = document.querySelector("div.mahsol>div.top")
let sharemahsol = document.querySelector("div.mahsol>div.top>div.share")
let imgmahsol = document.querySelector("div.mahsol>div.swipers")
let rezervcard = document.querySelector("div.mahsol>div.bottom>div.left")
let vrodbtn = document.querySelector("div.mahsol>div.bottom>div.right>div.six>div.date>button.vrod")
let khrogbtn = document.querySelector("div.mahsol>div.bottom>div.right>div.six>div.date>button.khrog")
let vrodinput = document.querySelector("div.mahsol>div.bottom>div.right>div.six>div.date>input[data-jdp]#vrod")
let khroginput = document.querySelector("div.mahsol>div.bottom>div.right>div.six>div.date>input[data-jdp]#khrog")
let showvrod = document.querySelector("div.mahsol>div.bottom>div.right>div.six>div.showdate>div.vrod>h4#datevrod1")
let showkhrog = document.querySelector("div.mahsol>div.bottom>div.right>div.six>div.showdate>div.khrog>h4#datekhrog1")
let plus = document.querySelector("div.mahsol>div.bottom>div.left>div.rezervcard>div.two>div.bottom>div.left>i.fa-square-plus")
let min = document.querySelector("div.mahsol>div.bottom>div.left>div.rezervcard>div.two>div.bottom>div.left>i.fa-square-minus")
let number = document.querySelector("div.mahsol>div.bottom>div.left>div.rezervcard>div.two>div.bottom>div.left>h2#num")
let rezervbtn = document.querySelector("div.mahsol>div.bottom>div.left>div.rezervcard>div.three>button")
let rezerv = document.querySelector("div.rezervvilla")
let firstname = document.querySelector("div.rezervvilla>div.left>div.four>div.inputs>input.fname")
let lastname = document.querySelector("div.rezervvilla>div.left>div.four>div.inputs>input.lname")
let phonenuminput = document.querySelector("div.rezervvilla>div.left>div.four>div.inputs>input.phonenum")
let error = document.querySelector("div.rezervvilla>div.left>div.four>h4")
let subbtn = document.querySelector("div.rezervvilla>div.right>div.card>div.bottom>button.one")
let enserafbtn = document.querySelector("div.rezervvilla>div.right>div.card>div.bottom>button.two")
let sabt = document.querySelector("div.rezervvilla>div.left")
let pay = document.querySelector("div.rezervvilla>div.pay")
let call = document.querySelector("div.rezervvilla>div.right>div.call")
let sec = document.querySelector("div.rezervvilla>div.pay>div.two>div.timer>span.sec")
let minet = document.querySelector("div.rezervvilla>div.pay>div.two>div.timer>span.min")
let hour = document.querySelector("div.rezervvilla>div.pay>div.two>div.timer>span.hour")
let timeout = document.querySelector("div.rezervvilla>div.timeout")
let cardrezerv = document.querySelector("div.rezervvilla>div.right>div.card")
let flname = document.querySelector("div.rezervvilla>div.pay>div.five>div.info>h4.name")
let phonenumber = document.querySelector("div.rezervvilla>div.pay>div.five>div.info>h4.num")
let discounticon = document.querySelector("div.rezervvilla>div.pay>div.six")
let discountmodal = document.querySelector("div.discountmodal")
let discountclose = document.querySelector("div.discountmodal>div.modal>div.one>i")
let discountinput = document.querySelector("div.discountmodal>div.modal>input")
let discountbtn = document.querySelector("div.discountmodal>div.modal>button")
let discountcode = "parisa1234"
let resmenu = document.querySelector("div.resmenu")
let reslogin = document.querySelector("div.resmenu>div.login")
let restextlogin = document.querySelector("div.resmenu>div.login>h4")
let ressearch = document.querySelector("div.ressearch")
let ressearchinput = document.querySelector("div.restop>input")
let restop = document.querySelector("div.restop")
let resbacksearch = document.querySelector("div.ressearch>div.searchbox>i")
let resinput = document.querySelector("div.ressearch>div.searchbox>input")
let resdaste = document.querySelector("div.ressearch>div.daste")
let resrezerv = document.querySelector("div.ressearch>div.rezerv")
let citymodale = document.querySelector("div.top>div#searchcity>div#citymodal")
let resdateedame = document.querySelector("div.top>div#back>div#datemodal>div.date>div.buttons>button.edame")
let resdateclear = document.querySelector("div.top>div#back>div#datemodal>div.date>div.buttons>button.clear")
let resbackdate = document.querySelector("div.top>div#back>div#datemodal>div.text>i")
let ressearchbutton = document.querySelector("div.backpeople>div.peoplemodal>button")
let resbackpeople = document.querySelector("div.backpeople>div.peoplemodal>div.text>i")
let resall = document.querySelector("div.resall")
let ressearchtape = document.querySelector("div.ressearchtape")
let ressearchtapeinput = document.querySelector("div.ressearchtape>input")
let ressearchtapeback = document.querySelector("div.ressearchtape>i")
let resbackfilter = document.querySelector("div.backfilter>div.filtermodal>div.right>div.text>i")
let resbackfav = document.querySelector("div.backfav>div.fav>hr")
let resbackcreate = document.querySelector("div.backcreate>div.create>hr")
let resbackrezerv = document.querySelector("div.mahsol>div.swipers>i")

// start manu
let menu = [
    { title: "پشتیبانی" },
    { title: "سوالات متداول" },
    { title: "درباره ما" },
    { title: "تماس با ما" }
]

menu.forEach((elem) => {
    document.querySelector("div.header>div.menu>nav>ul").innerHTML += `
        <li class="list-unstyled"><a href="" class="w-25 text-decoration-none">${elem.title}</a></li>
    `
})
// end manu

// start card
let card = [
    { imgSrc: "../assets/picture/8c9910e6b14dd934dd03d284f32e37245c140bc0.png", title: "ویلا استخردار آبگرم", about: "استان البرز،کردان، 2 اتاق، 4 نفر پایه + 2 نفر اضافه", price: "1.770.000 تومان", star: "4.6", comment: "(58 نظر ثبت شده)", discount: "تا 7 درصد تخفیف" },
    { imgSrc: "../assets/picture/d8f3b6d4ef81bec711616e269a6ac58783e7808c.png", title: "اجاره کلبه یک خوابه جنگلی لفور - واحد انجیلی شیرگاه", about: "استان مازندران، شیرگاه، 1 اتاق. دو نفر پایه + 2 نفر اضافه", price: "3.000,000 تومان", star: "5", comment: "(5 نظر ثبت شده)", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/62ff7127a66f95977aa2b7c9b2a8c1f062f1af08.png", title: "کلبه چوبی در مازندران", about: "استان مازندران، رامسر، 1 اتاق. دو نفر پایه + 2 نفر اضافه", price: "2,960,000 تومان", star: "4.6", comment: "(58 نظر ثبت شده)", discount: "تا 3 درصد تخفیف", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/c09ccc80fcc2b71587a75c2c451f79cee2a54519.png", title: "اجاره کلبه چوبی ورگانو کلاردشت", about: "استان مازندران، کلاردشت، 4 نفر", price: "1.380.000تومان", star: "3.9", comment: "(88 نظر ثبت شده)", discount: "تا 6 درصد تخفیف", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/4b66f02b966e602dcc7b6a5b3bd37f7a86b04ca8.png", title: "اجاره کلبه فلت فیروزجایی 3 شیرگاه", about: "استان مازندران، شیرگاه، 3نفر +1 نفر", price: "950.000 تومان", star: "4", comment: "(128 نظر ثبت شده)", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/36e64395cc894b37a0e890c3f1bd701925516f89.png", title: "اجاره بوم گردی جیزرو (مریخی) - واحد P1 قشم", about: "استان هرمزگان، قشم، 2 نفر پایه + 2 نفر اضافه", price: "5.000.000 تومان", star: "5", comment: "(25 نظر ثبت شده)", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/d57da1b5d0ac7504bbb10376bec93e17be2f275a.png", title: "اقامتگاه سنتی آب - واحد کچا", about: "استان گیلان، رشت، 5 نفر", price: "1.750.000 تومان", star: "4.2", comment: "(21 نظر ثبت شده)" },
    { imgSrc: "../assets/picture/80e96e213ad2f01ef3894628ea0b162eb5c8f267.png", title: "اجاره بوم گردی عمارت خلفان - واحد VIP قشم", about: "استان هرمزگان، قشم، هر واحد 3 نفر ظرفیت 2 واحد- 6 نفر مجموع ظرفیت", price: "5.310.000 تومان", star: "5", comment: "(8 نظر ثبت شده)", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/4d444f2096b5816d6e9cb2dd718bac53e0cdbe93.png", title: "اجاره بوم گردی عمارت خلفان - واحد VIP قشم", about: "استان گیلان، ماسال، هفت اتاق، 23 نفر اضافه", price: "2,000,000 تومان", star: "5", comment: "(512 نظر ثبت شده)", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/f9b92db1337aa748c87112b4e1c88818cc124302.png", title: "اجاره ویلا دوخوابه استخردار آبگرم لوتوس 2 کردان", about: "استان البرز، کردان، 4 نفر + 2نفر", price: "2,925,000 تومان", star: "4.4", comment: "(78 نظر ثبت شده)", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/4da679898d9dbd7100e9279a33e47ae320e4ef03.png", title: "اجاره بوم گردی کیمه - واحد دوبلکس", about: "مازندران، سواد کوه، 8 نفر پایه + 1 نفر", price: "2,925,000 تومان", star: "3.7", comment: "(274 نظر ثبت شده)", discount: "تا 2 درصد تخفیف", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" },
    { imgSrc: "../assets/picture/3ac440847c2d1637eae0cd58cef970bec21046fb.png", title: "رزرو ویلا سه خوابه استخردار آبگرم شاهان 2", about: "استان مازندران، سرخرود، سه اتاق 2 نفر + 2نفر", price: "5.000.000 تومان", star: "4.9", comment: "(248 نظر ثبت شده)", discount: "تا 9 درصد تخفیف", rezerv: "رزروآی و قطعی", gheymat: "قیمت رقابتی" }
]

card.forEach((elem) => {
    document.querySelector("div.cardcontaner").innerHTML += `
        <div class="card d-flex justify-content-center align-items-center">
            <img src="${elem.imgSrc}" alt="no image" />
            <i class="fa-duotone fa-regular fa-heart"></i>
            <div class="description w-100 d-flex flex-column justify-content-evenly align-items-end" >
                <span class="comment w-100">
                    <span class="star"><i class="fa-solid fa-star"></i>${elem.star}</span>
                    <span class="text">${elem.comment}</span>
                </span>
                <h2>${elem.title}</h2>
            ${elem.discount ? `
                    <div class="discount d-flex">
                        <i class="fa-sharp fa-light fa-badge-percent"></i>
                        <h6>${elem.discount}</h6>
                    </div>
                `: ""}
                <h4>${elem.about}</h4>
                <span class="price w-100 d-flex flex-row">
                    <h4>شروع قیمت:</h4>
                    <h4 class="num">${elem.price}</h4>
                    <h4>/هر شب</h4>
                </span>
            </div>
            ${(elem.rezerv || elem.gheymat) ? `
                <div class="regh d-flex">
                    ${elem.rezerv ? `
                        <div class="rez d-flex">
                            <i class="fa-sharp fa-thin fa-bolt"></i>
                            <h6>${elem.rezerv}</h6>
                        </div>
                    ` : ""}

                    ${elem.gheymat ? `
                        <div class="ghey d-flex">
                            <i class="fa-thin fa-badge-dollar"></i>
                            <h6>${elem.gheymat}</h6>
                        </div>
                    ` : ""}
                </div>
            ` : ""}
        </div>
    `
})
// end card

// start loginalert
let islogin = function () {
    return !!document.querySelector("div.top>div.header>div.login .editing")
}

document.querySelector("div.cardcontaner").addEventListener("click", function (e) {
    let heart = e.target.closest(".fa-heart")
    if (!heart) return
    if (!islogin()) {
        backalert.classList.add("show")
        return
    }

    if (heart.classList.contains("fa-solid")) {
        heart.classList.remove("fa-solid")
        heart.classList.add("fa-regular")
    }
    else {
        currentheart = heart
        backfav.classList.add("show")
    }
})

closealertbtn.addEventListener("click", function () {
    backalert.classList.remove("show")
})

alertbtn.addEventListener("click", function () {
    backalert.classList.remove("show")
    if (window.innerWidth <= 992) {
        document.body.appendChild(modal)
        modal.classList.add("showmodal")
        sms.style.setProperty("display", "none", "important")
        modallogin.style.setProperty("display", "flex", "important")
    }
    else {
        modal.style.display = "flex"
        modallogin.style.display = "flex"
        sms.style.display = "none"
    }

})

backalert.addEventListener("click", function (e) {
    if (e.target.classList.contains("backalert")) {
        e.target.classList.remove("show")
    }
})
// end loginalert

// start createmodal
addfav.addEventListener("click", function () {
    backcreat.classList.add("show")
    backfav.classList.remove("show")
})

closecreate.addEventListener("click", function () {
    backcreat.classList.remove("show")
})

let resfavheight = 421
let resfavtop = 425

backcreat.addEventListener("click", function () {
    let creatname = createinput.value.trim()
    if (!creatname) return

    favlist.push({ title: creatname, img: "../assets/picture/5a7569b000e93ab69079bd53885f2cfcd9143ad0.jpg" })
    contaner()

    modalheight += 70
    favmodal.style.height = modalheight + "px"

    resfavheight += 50
    resfavtop -= 50

    favmodal.style.height = resfavheight + "px"
    favmodal.style.top = resfavtop + "px"

    createinput.value = ""
    backcreat.classList.remove("show")
})
// end createmodal

// start phone number
button.disabled = true

phone.addEventListener("input", function () {

    if (phone.value.length === 11) {
        button.disabled = false
    } else {
        button.disabled = true
    }
})
// end phone number

// start close icon
close.addEventListener("click", function () {
    modal.style.display = "none"
    phone.value = ""
})

x.addEventListener("click", function () {
    sms.style.display = "none"
    clearInterval(timerInterval)
})
// end close icon

// start editnum
editnum.addEventListener("click", function (event) {
    event.stopPropagation()
    event.preventDefault()
    sms.style.display = "none"
    modal.style.display = "flex"
    modal.style.display = ""
    setTimeout(function () {
        modal.style.display = "flex"
    }, 50)
})
// end editnum

// start login modal
button.addEventListener("click", function () {
    shownum.textContent = phone.value
    login.style.display = "none"
    sms.style.display = "flex"
    startTimer()
})
// end login modal

// start sms code
code.forEach((inp, i) => {
    inp.addEventListener("input", function () {
        inp.value = inp.value.replace(/\D/g, "")
        if (inp.value && i < 4) code[i + 1].focus()
    })

    inp.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !inp.value && i > 0) {
            code[i - 1].focus()
        }
    })
})
// end sms code

login.addEventListener("click", function () {
    if (document.querySelector(".editing")) {
        backvrod.style.display = "flex"
        return
    }
    modal.style.display = "flex"
    login.style.display = "flex"
    sms.style.display = "none"
})

// start correctcode
code.forEach(function (input) {
    input.addEventListener("input", function () {
        let user = ""
        code.forEach(function (inp) {
            user += inp.value
        })
        if (user.length === 5) {
            if (user === correctcode) {
                code.forEach(function (inp) {
                    inp.style.border = "1px solid #32B55F"
                    inp.style.color = "#32B55F"
                })
                btn.disabled = false
                btn.style.cursor = "pointer"
            } else {
                code.forEach(function (inp) {
                    inp.style.border = "1px solid #E63946"
                    inp.style.color = "#E63946"
                })
                btn.disabled = true
                btn.style.cursor = "default"
            }
        } else {
            code.forEach(function (inp) {
                inp.style.border = "1px solid #000000"
                inp.style.color = "#000000"
            })
            btn.disabled = true
            btn.style.cursor = "default"
        }
    })
})
// end correctcode

// start timer
function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval)
    }
    timeLeft = 90
    timerInterval = setInterval(function () {
        let min = Math.floor(timeLeft / 60)
        let sec = timeLeft % 60
        if (timerElement) {
            timerElement.textContent = `
        ${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}
    `
        }
        timeLeft--
        if (timeLeft < 0) {
            clearInterval(timerInterval)
            if (timerElement) {
                timerElement.textContent = "ارسال مجدد کد"
                timerElement.style.color = "#288CFF"
                timerElement.style.cursor = "pointer"
            }
            document.querySelector(".text").style.display = "none"
        }
    }, 1000)
}
timerElement.onclick = function () {
    clearInterval(timerInterval)
    startTimer()
}
// end timer

// start entering
btn.addEventListener("click", function () {
    let usercode = ""
    code.forEach(function (input) {
        usercode += input.value
    })
    if (usercode === correctcode) {
        modal.style.display = "none"
        clearInterval(timerInterval)
        timeLeft = 90
        timerElement.textContent = "1:30"
        login.style.border = "none"
        login.innerHTML = `
            <span class="editing me-auto d-flex justify-content-evenly align-items-center">
                <span class="one d-flex align-items-center justify-content-center"><i class="fa-thin fa-circle-user d-flex align-items-center justify-content-center"></i></span>
                <span class="two d-flex align-items-center justify-content-center"><i class="fa-solid fa-bars"></i></span>
            </span>
        `
        height.style.padding = "0"
    }
})
// end entering

// start responsive phonenumber
reslogin.addEventListener("click", function () {
    document.body.appendChild(modal)
    modal.classList.add("showmodal")
    sms.style.setProperty("display", "none", "important")
    modallogin.style.setProperty("display", "flex", "important")
})

close.addEventListener("click", function () {
    modal.classList.remove("showmodal")
})

x.addEventListener("click", function () {
    modal.classList.remove("showmodal")
    sms.style.setProperty("display", "none", "important")
    modallogin.style.setProperty("display", "flex", "important")
})

button.addEventListener("click", function () {
    sms.style.setProperty("display", "flex", "important")
    modallogin.style.setProperty("display", "none", "important")
})

btn.addEventListener("click", function () {
    restextlogin.textContent = "اطلاعات کاربری"
    reslogin.style.width = "85px"
    modal.classList.remove("showmodal")
})

reslogin.addEventListener("click", function () {
    if (restextlogin.textContent === "اطلاعات کاربری") {
        window.location.href = "profile.html"
    }
})
// end responsive phonenumber

// start scroll
if (search1) {
    search1.style.transition = "opacity 0.3s ease, visibility 0s linear 0.3s"
}
if (menu1) {
    menu1.style.transition = "opacity 0.3s ease, max-height 0.3s ease, padding 0.3s ease, margin 0.3s ease"
}
if (search2) {
    search2.style.opacity = "0"
    search2.style.visibility = "hidden"
    search2.style.transition = "opacity 0.3s ease, top 0.3s ease"
}

function showMenu1State() {
    if (height) {
        height.style.height = "181px"
        height.style.transition = "height 0.3s ease"
    }

    if (backdate) {
        backdate.style.top = "180px"
        backdate.style.height = "calc(100vh - 180px)"
    }

    if (search1) {
        search1.style.opacity = "1"
        search1.style.visibility = "visible"
        search1.style.pointerEvents = "all"
    }

    if (menu1) {
        menu1.style.opacity = "1"
        menu1.style.visibility = "visible"
        menu1.style.height = "auto"
        menu1.style.padding = ""
        menu1.style.margin = ""
    }

    if (search2) {
        search2.style.opacity = "0"
        search2.style.visibility = "hidden"
        search2.style.position = "sticky"
        search2.style.top = ""
        search2.style.left = ""
        search2.style.transform = ""
        search2.style.marginTop = ""
        search2.classList.remove("active")
    }
}

function updateheaderonscroll() {
    if (modalpen || clickedcard) return

    if (window.scrollY > 100) {
        height.style.height = "120px"
        height.style.transition = "height 0.3s ease"
        backdate.style.top = "120px"
        backdate.style.height = "calc(100vh - 120px)"
        backcity.style.top = "180px"
        backcity.style.height = "calc(100vh - 180px)"
        backpeople.style.top = "180px"
        backpeople.style.height = "calc(100vh - 180px)"

        if (search1) {
            search1.style.opacity = "0"
            search1.style.visibility = "hidden"
            search1.style.pointerEvents = "none"
        }

        if (menu1) {
            menu1.style.opacity = "0"
            menu1.style.visibility = "hidden"
            menu1.style.height = "0"
            menu1.style.overflow = "hidden"
            menu1.style.padding = "0"
            menu1.style.margin = "0"
        }

        if (search2) {
            search2.style.opacity = "1"
            search2.style.visibility = "visible"
            search2.style.position = "fixed"
            search2.style.top = "50px"
            search2.style.left = "50%"
            search2.style.transform = "translateX(-50%)"
        }
    }
    else {
        showMenu1State()
    }

}

window.addEventListener("scroll", updateheaderonscroll)
updateheaderonscroll()
// end scroll

// start datemodal
document.querySelectorAll(".tarikh").forEach(items => {
    items.addEventListener("click", function (e) {
        e.preventDefault()
        this.classList.toggle("active")

        if (this.classList.contains("forcemenu")) {
            showMenu1State()
        }

        if (datemodal.style.display == "block") {
            datemodal.style.display = "none"
            backdate.style.display = "none"
            modalpen = false
            updateheaderonscroll()
        } else {
            datemodal.style.display = "block"
            backdate.style.display = "block"
            modalpen = true
            updateheaderonscroll()
        }
    })
})

backdate.addEventListener("click", function (e) {
    if (e.target === backdate) {
        datemodal.style.display = "none"
        backdate.style.display = "none"
        modalpen = false
        closesearch()
        updateheaderonscroll()
    }
})

vrod.addEventListener("click", function (e) {
    e.stopPropagation()
})

khrog.addEventListener("click", function (e) {
    e.stopPropagation()
})
// end datemodal

// srart calendar
btnvrod.addEventListener("click", function () {
    vrod.focus()
    vrod.click()
})

btnkhrog.addEventListener("click", function () {
    khrog.focus()
    khrog.click()
})

vrod.addEventListener("change", function () {
    let value = this.value.replaceAll("-", "/")
    let [year, month, day] = value.split("/")
    textvrod.innerHTML = `
        ${parseInt(day)} ${months[parseInt(month) - 1]}
    `
})

khrog.addEventListener("change", function () {
    let value = this.value.replaceAll("-", "/")
    let [year, month, day] = value.split("/")
    textkhrog.innerHTML = `
        ${parseInt(day)} ${months[parseInt(month) - 1]}
    `
})
// end calendar

// start peoplenum modal
document.querySelectorAll(".num").forEach(items => {
    items.addEventListener("click", function (e) {
        e.preventDefault()
        this.classList.toggle("active")

        if (this.classList.contains("num1")) {
            showMenu1State()
        }

        if (peoplemodal.style.display == "block") {
            peoplemodal.style.display = "none"
            backpeople.style.display = "none"
            modalpen = false
            updateheaderonscroll()
        } else {
            peoplemodal.style.display = "block"
            backpeople.style.display = "block"
            modalpen = true
            updateheaderonscroll()
        }
    })
})

backpeople.addEventListener("click", function (e) {
    if (e.target === backpeople) {
        peoplemodal.style.display = "none"
        backpeople.style.display = "none"
        modalpen = false
        closesearch()
        updateheaderonscroll()
    }
})

function toEnglishNumber(text) {
    return text
        .replaceAll("۰", "0")
        .replaceAll("۱", "1")
        .replaceAll("۲", "2")
        .replaceAll("۳", "3")
        .replaceAll("۴", "4")
        .replaceAll("۵", "5")
        .replaceAll("۶", "6")
        .replaceAll("۷", "7")
        .replaceAll("۸", "8")
        .replaceAll("۹", "9")
}


maxadult.addEventListener("click", function () {

    let value = Number(toEnglishNumber(numadult.innerText))

    value++

    numadult.innerText = persianNumbers(String(value))

    updatePeopleText()
})


minadult.addEventListener("click", function () {

    let value = Number(toEnglishNumber(numadult.innerText))

    if (value > 0) {
        value--
        numadult.innerText = persianNumbers(String(value))
    }

    updatePeopleText()
})


maxkids.addEventListener("click", function () {

    let value = Number(toEnglishNumber(numkids.innerText))

    value++

    numkids.innerText = persianNumbers(String(value))

    updatePeopleText()
})


minkids.addEventListener("click", function () {

    let value = Number(toEnglishNumber(numkids.innerText))

    if (value > 0) {
        value--
        numkids.innerText = persianNumbers(String(value))
    }

    updatePeopleText()
})


maxbaby.addEventListener("click", function () {

    let value = Number(toEnglishNumber(numbaby.innerText))

    value++

    numbaby.innerText = persianNumbers(String(value))

    updatePeopleText()
})


minbaby.addEventListener("click", function () {

    let value = Number(toEnglishNumber(numbaby.innerText))

    if (value > 0) {
        value--
        numbaby.innerText = persianNumbers(String(value))
    }

    updatePeopleText()
})


function updatePeopleText() {

    let adult = Number(toEnglishNumber(numadult.innerText))
    let kids = Number(toEnglishNumber(numkids.innerText))
    let baby = Number(toEnglishNumber(numbaby.innerText))


    let text = persianNumbers(String(adult)) + " نفر بزرگسال"


    if (kids > 0) {
        text += " " + persianNumbers(String(kids)) + " نفر کودک"
    }


    if (baby > 0) {
        text += " " + persianNumbers(String(baby)) + " نفر نوزاد"
    }


    peopletext.innerText = text
}
// end peoplenum modal

// start searchcity modal
document.querySelectorAll(".city2").forEach(items => {
    items.addEventListener("click", function (e) {
        e.preventDefault()
        this.classList.toggle("active")

        if (this.classList.contains("city1")) {
            showMenu1State()
        }

        if (citymodal.style.display == "block") {
            citymodal.style.display = "none"
            backcity.style.display = "none"
            modalpen = false
            updateheaderonscroll()
        } else {
            citymodal.style.display = "block"
            backcity.style.display = "block"
            modalpen = true
            updateheaderonscroll()
        }
    })
})

backcity.addEventListener("click", function (e) {
    if (e.target === backcity) {
        citymodal.style.display = "none"
        backcity.style.display = "none"
        modalpen = false
        closesearch()
        updateheaderonscroll()
    }
})
// end searchcity modal

// start search
let openmenu = null
let search2width = search2.offsetWidth

function openstyle(menu) {
    let a = menu.querySelector("div.search>a")
    let i = menu.querySelector("div.search>a>i")
    let span = menu.querySelector("div.search>a>span")

    menu.style.width = "869px"
    menu.style.transition = "width 0.3s ease"

    if (a) {
        a.style.backgroundColor = "#0D7D96"
        a.style.width = "108px"
        a.style.height = "48px"
        a.style.borderRadius = "999px"
    }

    if (i) {
        i.style.color = "#F8F9FA"
        i.style.width = "48px"
        i.style.height = "48px"
        i.style.fontSize = "25px"
    }

    if (span) {
        span.style.color = "#FFFFFF"
        span.style.fontSize = "14px"
        span.style.fontWeight = "400"
        span.style.display = "inline"
    }
}

function closestyle(menu) {
    let a = menu.querySelector("div.search>a")
    let i = menu.querySelector("div.search>a>i")
    let span = menu.querySelector("div.search>a>span")

    menu.style.width = "800px"
    menu.style.transition = "width 0.3s ease"

    if (a) {
        a.style.backgroundColor = ""
        a.style.width = ""
        a.style.height = ""
        a.style.borderRadius = ""
    }

    if (i) {
        i.style.color = ""
        i.style.width = ""
        i.style.height = ""
        i.style.fontSize = ""
    }

    if (span) {
        span.style.color = ""
        span.style.fontSize = ""
        span.style.fontWeight = ""
        span.style.display = ""
    }
}

function opensearch1(e) {
    if (e) {
        e.preventDefault()
        e.stopPropagation()
    }

    if (openmenu === search1) {
        closestyle(search1)
        search2.style.width = search2width + "px"
        openmenu = null
    }
    else {
        search2.style.width = search2width + "px"
        openstyle(search1)
        openmenu = search1
    }
}

if (city1) {
    city1.addEventListener("click", function (e) {
        opensearch1(e)
    })
}

if (date1) {
    date1.addEventListener("click", function (e) {
        opensearch1(e)
    })
}

if (people1) {
    people1.addEventListener("click", function (e) {
        opensearch1(e)
    })
}

if (city2) {
    city2.addEventListener("click", function (e) {
        opensearch1(e)
    })
}

if (date2) {
    date2.addEventListener("click", function (e) {
        opensearch1(e)
    })
}

if (people2) {
    people2.addEventListener("click", function (e) {
        opensearch1(e)
    })
}

search1.addEventListener("click", function (e) {
    if (
        e.target.closest(".city") ||
        e.target.closest(".date") ||
        e.target.closest(".peoplenum")
    ) {
        return
    }
    opensearch1(e)
})

search2.addEventListener("click", function (e) {
    e.stopPropagation()
})
// end search

// start vrod modal
bastn.addEventListener("click", function () {
    backvrod.style.display = "none"
})

edame.addEventListener("click", function () {
    if (vrodnum.value == phone.value) {
        backvrod.style.display = "none"
        window.open("profile.html", "_blank")
    }
})
// end vrod modal

// start filtermodal
filterbutton.addEventListener("click", function () {
    backfilter.style.display = "flex"
    backfilter.style.alignItems = "flex-start"
    backfilter.style.overflowY = "auto"
    backfilter.style.paddingTop = "64px"
    backfilter.style.paddingBottom = "64px"
    document.body.style.overflow = "hidden"
})

filtermodal.addEventListener("wheel", function (e) {
    e.preventDefault()
    backfilter.scrollBy({
        top: e.deltaY * 1,
        behavior: "smooth"
    })
}, { passive: false })

backfilter.addEventListener("click", function (e) {
    if (e.target == backfilter) {
        backfilter.style.display = "none"
        document.body.style.overflow = "auto"
    }
})

filtermodal.style.overflowY = "auto"
filtermodal.style.overflowX = "hidden"

closefilter.addEventListener("click", function () {
    backfilter.style.display = "none"
    document.body.style.overflow = "auto"
})

let minlimit = 0
let maxlimit = 10
let count = parseInt(numroom.textContent)

function updatenumber() {
    numroom.textContent = count
}

plusroom.addEventListener("click", function () {
    if (count < maxlimit) {
        count = count + 1
        updatenumber()
        filtercounts()
    }
})

minroom.addEventListener("click", function () {
    if (count > minlimit) {
        count = count - 1
        updatenumber()
        filtercounts()
    }
})

let filterbtn = [filternumone, filternumtwo, filternumthree, filternumfour]

function notactivfilters() {
    filterbtn.forEach(btn => {
        btn.style.border = ""
        btn.style.color = ""
        btn.style.backgroundColor = ""
    })
}

function activfilters(btn) {
    notactivfilters()
    btn.style.border = "1px solid #0D7D96"
    btn.style.color = "#0D7D96"
    btn.style.backgroundColor = "#ECFFFF"
}

filternumone.addEventListener("click", function () {
    activfilters(filternumone)
    scoreselect = true
    filtercounts()
})

filternumtwo.addEventListener("click", function () {
    activfilters(filternumtwo)
    scoreselect = true
    filtercounts()
})

filternumthree.addEventListener("click", function () {
    activfilters(filternumthree)
    scoreselect = true
    filtercounts()
})

filternumfour.addEventListener("click", function () {
    activfilters(filternumfour)
    scoreselect = true
    filtercounts()
})

function filtercounts() {
    let full = 0
    let checkinputs = filtermodal.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked')
    full += checkinputs.length

    if (scoreselect) {
        full += 1
    }

    if (count > 0) {
        full += 1
    }

    filtercount.textContent = persianNumbers(full.toString())
    filtercount.style.display = full > 0 ? "flex" : "none"
}

let allinputs = filtermodal.querySelectorAll('input[type="checkbox"], input[type="radio"]')
allinputs.forEach(function (input) {
    input.addEventListener("change", filtercounts)
})
// end filtermodal

// start mahsol
cardcontaner.addEventListener("click", function (e) {
    if (e.target.closest("div.cardcontaner>div.card>i")) {
        return
    }

    let clicked = e.target.closest(".card")

    if (!clicked || !document.querySelector(".editing")) {
        return
    }

    clickedcard = true
    menu1.style.display = "none"
    mahsol.style.display = "flex"
    mahsol.style.position = "static"
    mahsol.style.top = "auto"
    search1.style.display = "none"
    search2.style.display = "flex"
    search2.style.opacity = "1"
    search2.style.visibility = "visible"
    search2.style.marginTop = "-60px"
    search2.style.position = "static"
    search2.style.top = "initial"
    search2.style.left = "initial"
    search2.style.transform = "none"
    cardcontaner.style.display = "none"
    filters.style.display = "none"
    showmore.style.display = "none"
    height.style.height = "120px"
    height.style.position = "static"
    height.style.top = "auto"
    height.style.zIndex = "1"
    filtertape.style.display = "none"
    restop.style.display = "none"
    resmenu.style.display = "none"

    window.removeEventListener("scroll", updateheaderonscroll)

    document.body.style.overflow = "auto"
    document.body.style.height = "auto"
    document.documentElement.style.overflow = "auto"
})

img.addEventListener("click", function () {
    clickedcard = false
    menu1.style.display = "flex"
    mahsol.style.display = "none"
    search1.style.display = "flex"
    search1.style.opacity = "1"
    search1.style.visibility = "visible"
    search1.style.pointerEvents = "all"
    cardcontaner.style.display = "flex"
    filters.style.display = "flex"
    showmore.style.display = "flex"
    height.style.height = "181px"
    height.style.position = "sticky"
    height.style.top = "0"
    height.style.zIndex = "99"

    if (search2) {
        search2.style.opacity = "0"
        search2.style.visibility = "hidden"
        search2.style.marginTop = ""
        search2.style.position = "sticky"
        search2.style.top = ""
        search2.style.left = ""
        search2.style.transform = ""
        search2.style.display = ""
    }

    window.scrollTo({ top: 0, behavior: "smooth" })

    document.body.style.overflow = "visible"
    document.documentElement.style.overflow = "visible"

    window.addEventListener("scroll", updateheaderonscroll)
})

vrodbtn.addEventListener("click", function () {
    vrodinput.focus()
    vrodinput.click()
})

khrogbtn.addEventListener("click", function () {
    khroginput.focus()
    khroginput.click()
})

vrodinput.addEventListener("change", function () {
    let value = this.value.replaceAll("-", "/")
    let [year, month, day] = value.split("/")
    showvrod.innerHTML = `
        ${parseInt(day)} ${months[parseInt(month) - 1]}
    `
})

khroginput.addEventListener("change", function () {
    let value = this.value.replaceAll("-", "/")
    let [year, month, day] = value.split("/")
    showkhrog.innerHTML = `
        ${parseInt(day)} ${months[parseInt(month) - 1]}
    `
})

let countnum = parseInt(number.textContent) || 1
number.textContent = persianNumbers(countnum.toString())

plus.addEventListener("click", function () {
    countnum = countnum + 1
    number.textContent = persianNumbers(countnum.toString())
})

min.addEventListener("click", function () {
    if (countnum > 1) {
        countnum = countnum - 1
        number.textContent = persianNumbers(countnum.toString())
    }
})
// end mahsol

// start favmodal
let favlist = [
    { title: "کلبه های شمال", img: "../assets/picture/40c7e3d00d2feac14a60daba6fed490da2a91f95.jpg" },
    { title: "کلبه های جنوب", img: "../assets/picture/5a7569b000e93ab69079bd53885f2cfcd9143ad0.jpg" }
]

function contaner() {
    listbox.innerHTML = ""
    favlist.forEach((item) => {
        listbox.innerHTML += `
            <div class="items d-flex align-items-center">
                <img src=${item.img} alt="no image" />
                <h4>${item.title}</h4>
            </div>
        `
    })
}

contaner()

let currentheart = null

listbox.addEventListener("click", function (e) {
    let item = e.target.closest(".items")
    if (!item) return

    if (currentheart) {
        currentheart.classList.remove("fa-regular")
        currentheart.classList.add("fa-solid")
    }
    backfav.classList.remove("show")
})

backfav.addEventListener("click", function (e) {
    if (e.target.classList.contains("backfav")) {
        e.target.classList.remove("show")
    }
})

closefav.addEventListener("click", function () {
    backfav.classList.remove("show")
})

resbackfav.addEventListener("click", function () {
    backfav.style.display = "none"
})

resbackcreate.addEventListener("click", function () {
    backfav.style.display = "none"
    backcreat.style.display = "none"
})
// end favmodal

// start rezerv
rezervbtn.addEventListener("click", function () {
    mahsol.style.display = "none"
    search2.style.display = "none"
    rezerv.style.display = "flex"
    filtertape.style.display = "none"
    sabt.style.setProperty("display", "flex", "important")
    pay.style.display = "none"
    timeout.style.display = "none"
    subbtn.textContent = "مشاهده صورت و  پرداخت"
    enserafbtn.textContent = "انصراف"
    subbtn.style.display = "flex"
    cardrezerv.style.removeProperty("height")
})

function checkname() {
    let savefname = localStorage.getItem("fname")
    let savelname = localStorage.getItem("lname")

    if (!savefname || !savelname) {
        error.style.color = "#E63946"
        error.textContent = "لطفا ابتدا نام و نام خانوادگی را در بخش حساب کاربری وارد کنید"
        firstname.style.border = "1px solid #B3222D"
        lastname.style.border = "1px solid #B3222D"
        return false
    }

    let typefname = firstname.value.trim()
    let typelname = lastname.value.trim()

    if (typefname == savefname && typelname == savelname) {
        error.style.color = "#32B55F"
        error.textContent = "نام و نام خانوادگی تایید شد"
        firstname.style.border = "1px solid #000"
        lastname.style.border = "1px solid #000"
        return true
    }
    else {
        error.style.color = "#E63946"
        error.textContent = "نام و نام خانوادگی را دقیقا مطابق با کارت شناسایی وارد کنید."
        firstname.style.border = "1px solid #B3222D"
        lastname.style.border = "1px solid #B3222D"
        return false
    }
}

firstname.addEventListener("input", checkname)
lastname.addEventListener("input", checkname)

subbtn.addEventListener("click", function () {
    sabt.style.setProperty("display", "none", "important")
    pay.style.display = "flex"
    call.style.display = "flex"
    subbtn.textContent = "پرداخت"
    enserafbtn.textContent = "ویرایش یا لغو"
    flname.textContent = firstname.value.trim() + " " + lastname.value.trim()
    phonenumber.textContent = persianNumbers(phonenuminput.value.trim())
    starttime(1 * 60)
})

function starttime(seconds) {
    count = setInterval(function () {
        let h = Math.floor(seconds / 3600)
        let m = Math.floor((seconds % 3600) / 60)
        let s = seconds % 60

        hour.textContent = persianNumbers(String(h).padStart(2, "0"))
        minet.textContent = persianNumbers(String(m).padStart(2, "0"))
        sec.textContent = persianNumbers(String(s).padStart(2, "0"))

        if (seconds <= 0) {
            clearInterval(count)
            pay.style.display = "none"
            timeout.style.display = "flex"
            subbtn.style.setProperty("display", "none", "important")
            enserafbtn.textContent = "مهلت شما برای پرداخت به اتمام رسید"
            cardrezerv.style.setProperty("height", "500px", "important")
        }
        seconds--
    }, 1000)
}

enserafbtn.addEventListener("click", function () {
    rezerv.style.display = "none"
    mahsol.style.display = "flex"
    mahsol.style.position = "static"
    mahsol.style.top = "auto"
    search1.style.display = "none"
    search2.style.display = "flex"
    search2.style.opacity = "1"
    search2.style.visibility = "visible"
    search2.style.marginTop = "-60px"
    search2.style.position = "static"
    search2.style.top = "initial"
    search2.style.left = "initial"
    search2.style.transform = "none"
    cardcontaner.style.display = "none"
    filters.style.display = "none"
    showmore.style.display = "none"
    height.style.height = "120px"
    height.style.position = "static"
    height.style.top = "auto"
    height.style.zIndex = "1"
    filtertape.style.display = "flex"
})

resbackrezerv.addEventListener("click", function () {
    mahsol.style.display = "none"
    cardcontaner.style.display = "flex"
    restop.style.display = "flex"
    resmenu.style.display = "flex"
    filtertape.style.display = "flex"
})
// end rezerv

// start discountmodal
discounticon.addEventListener("click", function () {
    discountmodal.style.display = "flex"
})

discountclose.addEventListener("click", function () {
    discountmodal.style.display = "none"
})

discountbtn.disabled = true

discountinput.addEventListener("input", function () {
    if (discountinput.value.trim() == discountcode) {
        discountbtn.disabled = false
        discountbtn.style.backgroundColor = "#0D7D96"
        discountbtn.style.color = "#FFFFFF"
    }
    else {
        discountbtn.disabled = true
        discountbtn.style.backgroundColor = "#D6DCE1"
        discountbtn.style.color = "#889BA8"
    }
})

discountbtn.addEventListener("click", function () {
    discountmodal.style.display = "none"
    discountinput.value = ""
    discountbtn.disabled = true
    discountbtn.style.backgroundColor = "#D6DCE1"
    discountbtn.style.color = "#889BA8"
})
// end discountmodal

// start responsive searchpage
document.addEventListener("click", function (e) {
    if (ressearchinput && e.target == ressearchinput) {
        document.body.appendChild(ressearch)
        ressearch.classList.add("show")
        resinput.focus()
    }
    if (resbacksearch && resbacksearch.contains(e.target)) {
        ressearch.classList.remove("show")
        citymodale.classList.remove("show")
        resinput.value = ""
        resdaste.style.display = "flex"
        resrezerv.style.display = "flex"
    }
})

resinput.addEventListener("input", function () {
    if (this.value.trim() != "") {
        resdaste.style.display = "none"
        resrezerv.style.display = "none"
        document.body.appendChild(citymodale)
        citymodale.classList.add("show")
    }
    else {
        resdaste.style.display = "flex"
        resrezerv.style.display = "flex"
        citymodale.classList.remove("show")
    }
})

citymodale.addEventListener("click", function (e) {
    if (window.innerHTML > 768) return
    if (e.target.closest("div.all")) {
        citymodale.classList.remove("show")
        document.body.appendChild(backdate)
        backdate.classList.add("show")
        datemodal.classList.add("show")
    }
})

resbackdate.addEventListener("click", function () {
    backdate.classList.remove("show")
    datemodal.classList.remove("show")
    citymodale.classList.add("show")
})

btnvrod.addEventListener("click", function () {
    vrod.focus()
})

btnkhrog.addEventListener("click", function () {
    khrog.focus()
})

resdateclear.addEventListener("click", function () {
    vrod.value = ""
    textvrod.textContent = "انتخاب کنید"
    khrog.value = ""
    textkhrog.textContent = "انتخاب کنید"
})

resdateedame.addEventListener("click", function () {
    if (window.innerHTML > 768) return
    backdate.classList.remove("show")
    datemodal.classList.remove("show")
    document.body.appendChild(backpeople)
    backpeople.classList.add("show")
})

resbackpeople.addEventListener("click", function () {
    backpeople.classList.remove("show")
    document.body.appendChild(backdate)
    backdate.classList.add("show")
    datemodal.classList.add("show")
})

ressearchbutton.addEventListener("click", function () {
    backdate.classList.remove("show")
    datemodal.classList.remove("show")
    backpeople.classList.remove("show")
    citymodale.classList.remove("show")
    ressearch.classList.remove("show")
    document.body.style.overflow = ""
    filtertape.style.setProperty("display", "none", "important")
    resall.classList.add("show")
    window.scrollTo({ top: 0, behavior: "smooth" })
    cardcontaner.style.setProperty("display", "flex", "important")
    document.querySelector("div.restop").style.setProperty("display", "none", "important")
    ressearchtape.classList.add("show")
    ressearchtape.appendChild(filterbutton)
    filterbutton.style.setProperty("display", "flex", "important")
    filterbutton.style.setProperty("width", "34px", "important")
    filterbutton.style.setProperty("height", "34px", "important")
    filterbutton.style.setProperty("border", "1px solid #D6DCE1", "important")
    filterbutton.style.setProperty("border-radius", "8px", "important")
    filterbutton.style.setProperty("align-items", "center", "important")
    filterbutton.style.setProperty("justify-content", "center", "important")
    filterbutton.style.setProperty("margin-top", "6px", "important")
    filterbutton.querySelector("h6").style.setProperty("display", "none", "important")
})
// end responsive searchpage

// start responsive searchtape
ressearchtapeinput.addEventListener("input", function () {
    document.body.appendChild(ressearch)
    ressearch.classList.add("show")
    document.body.style.overflow = "hidden"
    resinput.focus()
})

ressearchtapeback.addEventListener("click", function () {
    document.body.appendChild(backpeople)
    backpeople.classList.add("show")
})
// end responsive searchtape

// start responsive filter
function resfilter() {
    let select = 0

    select += filtermodal.querySelectorAll("input[type='checkbox']:checked").length

    if (Number(filternumone.textContent) > 0) select++

    [filternumtwo, filternumthree, filternumfour].forEach(function (b) {
        if (b && b.classList.contains("active")) select++
    })
    filtercount.textContent = select
    filtercount.classList.toggle("show", select > 0)
}

filtermodal.addEventListener("click", function () {
    setTimeout(resfilter, 0)
})

filtermodal.addEventListener("input", resfilter)
filtermodal.addEventListener("change", resfilter)

filterbutton.addEventListener("click", function () {
    backfilter.classList.add("show")
})

resbackfilter.addEventListener("click", function () {
    backfilter.classList.remove("show")
    document.body.style.overflow = ""
})
// end responsive filter

// start responsive rezerv
resbackmahsol.addEventListener("click", function () {
    mahsol.style.display = "none"
    cardcontaner.style.display = "flex"
})
// end responsive rezerv

// start responsive backvrod
let tablet = window.matchMedia("(max-width: 768px)")

function checklogin() {
    return localStorage.getItem("login") == true
}

reslogin.addEventListener("click", function (e) {
    if (!tablet.matches) return
    if (checklogin()) {
        e.preventDefault()
        e.stopImmediatePropagation()
        window.location.href = "profile.html"
    }
})
// end responsive backvrod

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