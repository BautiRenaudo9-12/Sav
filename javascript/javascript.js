function main(){
    //variables generales
    let iconUp=document.getElementById("icon-circle-up");
    let iconDown=document.getElementById("icon-circle-down");
    let header2Nav=document.getElementById("header2Nav");

    let  iconThree=document.getElementById("icon-three");
    let  iconMail=document.getElementById("icon-mail");
    let  iconInstagram=document.getElementById("icon-instagram-circle");
    let  i=true;

    //eventos
    //ABRIR Y CERRAR MENU
    iconDown.onclick=function d(){
        header2Nav.style.cssText="transform: translateY(0%);";
        iconUp.style.cssText="visibility: visible;";
        iconDown.style.cssText="visibility: hidden;";
    }
    iconUp.onclick=function u(){
        header2Nav.style.cssText="transform: translateY(-100%);";
        iconUp.style.cssText="visibility: hidden;";
        iconDown.style.cssText="visibility: vissble;";
    }

 
    //ABRIR Y CERRAR MENU DE REDES

    //abrir y cerrar menu
    iconThree.onclick=function(){
        if(i==true){
            iconThree.style.cssText="";
            
            iconMail.style.cssText="margin-bottom:100px;";
            iconInstagram.style.cssText="margin-bottom:190px;"; 
            i=false;         
        }else{
            
            
            iconMail.style.cssText="margin-bottom:0;";
            iconInstagram.style.cssText="margin-bottom:0;";
            i=true;
        }
    }  
    
    //redireccionar a redes sociales
    iconMail.onclick = function(){
        window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRtswFhsHXwqGgWCtqbvxfHQjSBlPdjqqtkTJktxBTbqKBCgLKRNSwWKpLXrqGFLqzTHZBb");
    }
    iconInstagram.onclick=function(){ 
        window.open("https://www.instagram.com/savretratos/");
    }
   
}