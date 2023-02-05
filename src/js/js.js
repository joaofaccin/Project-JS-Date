
function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var date = new Date()
    var hora = date.getHours()
   
   
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = './src/img/manha.png';
        document.body.style.background = '#ffe287'

    }else if(hora >= 12 && hora < 18){
       img.src = './src/img/tarde.png'
       document.body.style.background = '#ffaf14'

    }else{
        img.src = './src/img/noite.png'
        document.body.style.background = '#030068'
    }
}
