var roleta = document.querySelector(".roleta")
var rolamento = document.querySelector(".rolamento")
var apostar = document.querySelector("#apostar")
var anterior =document.querySelector(".anterior")
var carta = document.querySelector(".carta")
var valorInput = document.querySelector("#valor-input")
var saldoValor = document.querySelector("#saldo-valor")
var btnVermelho = document.querySelector("#btn-vermelho")
var btnVerde = document.querySelector("#btn-verde")
var btnPreto = document.querySelector("#btn-preto")
var saldoZerado = document.querySelector(".saldo-zerado")
var jorgarNovamente =document.querySelector("#jogar-novamente")
var apostaVermelho=0.00, apostaPreto=0.00, apostaVerde=0.00
var valor=100.00

function iniciarRoleta(){
   
   saldoValor.innerHTML=valor.toFixed(2)
   

   var conteudo="";

   conteudo+=" <div class='vermelho'> <div class='circulo'>1</div> </div>"
   conteudo+=" <div class='preto'> <div class='circulo'>14</div> </div>"
   conteudo+=" <div class='vermelho'> <div class='circulo'>2</div> </div>"
   conteudo+=" <div class='preto'> <div class='circulo'>13</div> </div>"
   conteudo+=" <div class='vermelho'> <div class='circulo'>3</div> </div>"
   conteudo+=" <div class='preto'> <div class='circulo'>12</div> </div>"
   conteudo+=" <div class='vermelho'> <div class='circulo'>4</div> </div>"
   conteudo+=" <div class='verde'> <div class='circulo'>0</div> </div>"
   conteudo+=" <div class='preto'> <div class='circulo'>11</div> </div>"
   conteudo+=" <div class='vermelho'> <div class='circulo'>5</div> </div>"
   conteudo+=" <div class='preto'> <div class='circulo'>10</div> </div>"
   conteudo+=" <div class='vermelho'> <div class='circulo'>6</div> </div>"
   conteudo+=" <div class='preto'> <div class='circulo'>9</div> </div>"
   conteudo+=" <div class='vermelho'> <div class='circulo'>7</div> </div>"
   conteudo+=" <div class='preto'> <div class='circulo'>8</div> </div>"
   
   
   
   for(var x=0; x<=29;x++){   
      carta.innerHTML+=conteudo; 
   }
}

function valorValido(){
   if(valorInput.value<0){
      valorInput.value = Math.floor(valorInput.value.replace(/[\d]/,0))
   }
}

function selecionarCor(){ 
  
   var selecionarCor = [...document.querySelectorAll(".selecionarCor")]

   selecionarCor.map((el)=>{
      el.addEventListener("click",(evento)=>{
         let cor = evento.target.id
         
         if(cor=="btn-vermelho"){
            btnVermelho.classList.add("btn-clicado")
            btnVerde.classList.remove("btn-clicado")
            btnPreto.classList.remove("btn-clicado")
         }else if(cor=="btn-preto"){
            btnPreto.classList.add("btn-clicado")
            btnVermelho.classList.remove("btn-clicado")
            btnVerde.classList.remove("btn-clicado")
         }else{
            btnVerde.classList.add("btn-clicado")
            btnPreto.classList.remove("btn-clicado")
            btnVermelho.classList.remove("btn-clicado")            
         }
      })      
   })
   let btnValorInput = [...document.querySelectorAll(".btn-valorinput")]

   btnValorInput.map((el)=>{
      el.addEventListener("click",(evento)=>{
         if(evento.target.id=="tudo"){valorInput.value = parseFloat(saldoValor.innerHTML).toFixed(2)}
         else if(evento.target.id=="x2"){valorInput.value = parseFloat(valorInput.value*2.0).toFixed(2)}
         else if(evento.target.id=="metade"){valorInput.value = parseFloat(valorInput.value/2.0).toFixed(2)}
      })
   })
}

function apostarBtn(){   

   apostar.addEventListener("click",()=>{      
      apostar.classList.add("apostar-click")
      setTimeout(()=>{apostar.classList.remove("apostar-click")},250)
           
      if( btnVermelho.classList.contains("btn-clicado") && valorInput.vlaue !=0 && valorInput.value <= valor && saldoValor!=0){ 
         apostaVermelho+=parseFloat(valorInput.value)
         valor-=valorInput.value
         saldoValor.innerHTML=valor.toFixed(2)
         console.log("valor apostado no vermelho: "+apostaVermelho)

      }else if(btnPreto.classList.contains("btn-clicado") && valorInput.vlaue !=0 && valorInput.value <= valor && saldoValor!=0){ 
         apostaPreto+=parseFloat(valorInput.value)
         valor-=valorInput.value
         saldoValor.innerHTML=valor.toFixed(2)
         console.log("valor apostado no Preto: "+apostaPreto)

      }else if( btnVerde.classList.contains("btn-clicado") && valorInput.vlaue !=0 && valorInput.value <= valor && saldoValor!=0){ 
         apostaVerde+=parseFloat(valorInput.value)
         valor-=valorInput.value
         saldoValor.innerHTML=valor.toFixed(2)
         console.log("valor apostado no verde: "+apostaVerde)
      }     
   })
   
}

function controle(lista,pos){   
   
   if(lista[pos]==1 | lista[pos]==2 | lista[pos]==3 | lista[pos]==4 | lista[pos]==5 | lista[pos]==6 | lista[pos]==7){
      valor+=apostaVermelho*2
      saldoValor.innerHTML=valor.toFixed(2)

  }else if(lista[pos]==14 | lista[pos]==13 | lista[pos]==12 | lista[pos]==11 | lista[pos]==10 | lista[pos]==9 | lista[pos]==8){
      valor+=apostaPreto*2
      saldoValor.innerHTML=valor.toFixed(2) 

   }else if(lista[pos]==0){
      valor+=apostaVerde*14
      saldoValor.innerHTML=valor.toFixed(2)
   
   }else{
      saldoValor.innerHTML=valor.toFixed(2)
   }     
   
   if(valor<=0 ){      
      saldoZerado.style.display="block"    
   }else if(valor<0.1){
      valor=Math.floor(valor)
      saldoValor.innerHTML=parseFloat(valor).toFixed(2)
   }
}


function rodarRoleta(duracao){   
   
   var ordem=[0,11,5,10,6,9,7,8,1,14,2,13,3,12,4],
   voltas = parseInt(Math.random()*25),
   posicao= ordem.indexOf(parseInt((Math.random()*14))),    
   random =Math.floor(Math.random()*80)  
   
   var object={
      x: Math.random()*70/100,
      y: Math.random()*30/100
   }
   
   if(voltas<18){
      voltas=18
   }
   
   var cartaSorteada =(90*posicao+40)+(15*90*voltas) - random

      rolamento.style.transitionDuration=duracao+"s"
      rolamento.style.transitionTimingFunction="cubic-bezier(0,"+object.x+","+object.y+",1)"      
      rolamento.style.transform="translate(-"+cartaSorteada+"px,0)"      
          
      apostar.style.backgroundColor="rgb(240, 132, 159)"
      apostar.disabled = true
      btnVermelho.disabled=true
      btnPreto.disabled=true
      btnVerde.disabled=true


      setTimeout(()=>{
         rolamento.style.transitionDuration="2s"
         rolamento.style.transform="translate(0px,0)" 
         
         if(ordem[posicao]==1 | ordem[posicao]==2 | ordem[posicao]==3 | ordem[posicao]==4 | ordem[posicao]==5 | ordem[posicao]==6 | ordem[posicao]==7){
            anterior.innerHTML+="<div class= anterior-vermelho><div class = circulo-anterior>"+ordem[posicao]+"</div></div>"           
                        
         }else if(ordem[posicao]==14 | ordem[posicao]==13 | ordem[posicao]==12 | ordem[posicao]==11 | ordem[posicao]==10 | ordem[posicao]==9 | ordem[posicao]==8) {
            anterior.innerHTML+="<div class= anterior-preto><div class = circulo-anterior>"+ordem[posicao]+"</div></div>"            
         }else{
               anterior.innerHTML+="<div class= anterior-verde><div class = circulo-anterior>"+ordem[posicao]+"</div></div>"
         }     
         
         controle(ordem,posicao)

         apostaPreto=0.00,apostaVermelho=0.00,apostaVerde=0.00

         }, (duracao+1) * 1000)
         
         setTimeout(()=>{
            apostar.classList.remove("apostar-click")
            apostar.style.backgroundColor="rgb(206, 10, 59)"
            apostar.disabled = false
            btnVermelho.disabled=false
            btnPreto.disabled=false
            btnVerde.disabled=false
         },(duracao+3)*1000)

      }


function timer(){
   var slider = document.querySelector(".slider")
   var time = document.querySelector(".time")
   var duracao = parseInt((Math.random()*10))
   var segundos=12   

   if(duracao<6){
   duracao = 6
   }
 
   time.innerHTML=segundos

   var cronometro = setInterval(()=>{
      time.innerHTML=segundos
      segundos--      
      slider.style.transitionDuration="12s"
      slider.style.transitionTimingFunction="linear"
      slider.style.marginRight="100%"
      
      if(segundos<0){
         segundos =0
         time.innerHTML=segundos
         clearInterval(cronometro)

         rodarRoleta(duracao)
         
         setTimeout(()=>{
            slider.style.transitionDuration="0.2s"
            slider.style.transitionTimingFunction="easy-out"
            slider.style.marginRight="0%"

            timer()

         },(duracao+4)*1000)//espera a roleta rolar e resetar
      }
   },1000)   
   
}

function info(){
   
}


window.addEventListener("load", selecionarCor(), iniciarRoleta(),valorValido(),timer(),apostarBtn(), saldoZerado.style.display="none")


jorgarNovamente.addEventListener("click",()=>{saldoZerado.style.display="none"; valor=100.00;  saldoValor.innerHTML=valor.toFixed(2); anterior.innerHTML=""})