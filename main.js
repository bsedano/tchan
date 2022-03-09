const btn = document.getElementById("btn-tchan")
const tchan = document.getElementById("tchan")


let apelidos = ["pãozinho de coco, ", "meu benzinho, ", "xuxuzinho da minha horta, ", "coisinha linda, ", "razão da minha libido, ", "minha delícia, ", "minha gostosa, "]
let bomDias = ["Bonjour, ", "Bom dia, ", "Buenos dias, "]
let complemento = ["dormiu bem?", "gosto muito de você <3", "como vai?", "queria te encher de beijos!"]


function xuxu() {

    let randomApelidos = Math.floor(Math.random() * (apelidos.length))
    let randomBomDia = Math.floor(Math.random() * (bomDias.length))
    let randomComplemento = Math.floor(Math.random() * (complemento.length))
    return bomDias[randomBomDia] + apelidos[randomApelidos] + complemento[randomComplemento]
}


function append() {

    tchan.innerHTML = xuxu()


}


btn.addEventListener("click", append)
