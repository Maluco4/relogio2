function relogio() {
    const elementoRelogio =  document.querySelector(".relogio");
    const horaAtual = new Date();

    var img = document.querySelector("#image");


    const horas = horaAtual.getHours();
    const minutos =  horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();
    const formatoHoras = horas.toString().padStart(2,"0");
    const formatoMinutos = minutos.toString().padStart(2,"0");
    const formatoSegundos = segundos;toString().padStart(2,"0");

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
   
    const frase = document.querySelector('.frase');
    dia = new Array ('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');
    mes =  new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Dezembro');
    
    hoje = new Date 
   
    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}` 
   
    if(formatoHoras >= 0 && formatoHoras <12){
        document.body.style.backgroundImage = "url(https://img.kalunga.com.br/fotosdeprodutos/661138z.jpg )"
        img.src = "acorda"
        //document.body.style.background =


    }else if (formatoHoras >=12 && formatoHoras < 18){
        document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/1336104105/pt/foto/upset-young-man-in-headphones-sitting-in-front-of-computer-and-holding-hair-while-losing-game.jpg?s=1024x1024&w=is&k=20&c=JZsoYEmZ7N_IdsryoCTsZ3mBMfzMylrakf_1xKits7s= )"
        img.src = "file:///D:/PROGRAM%C3%87%C3%83O%20WEB/relogio2/img/N3c_Qf1NtiCfZjjepvgXzf_v19OWjxUWqEqueyMpSpA.webp"
    }else {
        document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/1336104105/pt/foto/upset-young-man-in-headphones-sitting-in-front-of-computer-and-holding-hair-while-losing-game.jpg?s=1024x1024&w=is&k=20&c=JZsoYEmZ7N_IdsryoCTsZ3mBMfzMylrakf_1xKits7s= )"
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHc75JkuXaGWKkNAq2baPC-Ph5qVAmRPJBQ&usqp=CAU"
    }



      

}
setInterval(relogio, 1000);
