function enviar() {
    var nome = document.getElementById('nome').value
    var lnome = document.getElementById('lnome').value
    var email = document.getElementById('email').value
    var pw = document.getElementById('pw').value
    
    var txt1 = document.querySelector('.txt1')
    var txt2 = document.querySelector('.txt2')
    var txt3 = document.querySelector('.txt3')
    var txt4 = document.querySelector('.txt4')
    
    var icon = 'images/icon-error.svg'

    if (nome.length == 0) {
        txt1.innerHTML = `<img src="${icon}"> First Name cannot be empty`
    } else {
        txt1.innerHTML = ''
    } if (lnome.length == 0) {
        txt2.innerHTML = `<img src="${icon}"> Last Name cannot be empty`
    } else {
        txt2.innerHTML = ''
    } if (email == 0) {
        txt3.innerHTML = `<img src="${icon}"> looks like this is not an email`
    } else {
        txt3.innerHTML = ''
    } if (pw == 0) {
        txt4.innerHTML = `<img src="${icon}"> Password cannot be empty`
    } else {
        txt4.innerHTML = ''
    }
}