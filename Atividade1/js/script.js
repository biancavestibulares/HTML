//Variáveis
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

//Funções para validar os dados do formulário
//Nome
function validaNome(){
    let txtNome = document.querySelector('#txtNome')

    //Não permite nomes com menos de três letras
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido :('
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido :)'
        txtNome.style.color = 'green'
        nomeOk = true //Validando se a informação está correta
    }
}

//Email
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    //Não permite emails sem o @
    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'Email Inválido :('
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido :)'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

//Assunto
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    //Limita número de caracteres
    if(assunto.value.length >= 150){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 150 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

//Validando todos os dados do formulário para envio
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente!')
    }
}

//Zoom do mapa
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}