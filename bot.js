const tanya = document.getElementById("tanya")
const jawab = document.getElementById("jawab")
const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return[
        "halo, perkenalkan nama saya azbot?",
        `Halo ${data?.nama}, Berapa usia kamu?`,
        `ohhhh ${data?.usia}, Hobi kamu apa ya?`,
        `wow sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `ohhh ${data?.pacar}, ya udah kalau. gitu udahan ya?`,
    ]
}

tanya.innerHTML = botSay() [0]

let userData = []

function botStart() {
    if(jawab.value.length < 1 ) return alert("SILAKAN ISI JAWABAN DULU")
    init ++
    if (init === 1 ) {
        botDelay({ nama: jawab.value})
    }else if(init === 2){
        botDelay({ usia: jawab.value})
    }else if(init === 3){
        botDelay({ hobi: jawab.value})
    }else if(init === 4) {
        botDelay({ pacar: jawab.value})
    }else if(init === 5 ) {
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabUser) {
    loading.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        tanya.innerHTML = botSay(jawabUser)[init]
        loading.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    userData.push(jawab.value)
    jawab.value = ""
}

function finishing() {
    tanya.innerHTML = `Thank u ${userData[0]} ya udah main ke sini, kali-kali kita main ${userData[2]} bareng ya`
    jawab.value = "Siap thank juga"
}

function botEnd() {
    alert(`Terimakasih ${userData[0]}sudah berkunjung, Anda akan diarah kehalaman utama `)
    window.location.reload()
}