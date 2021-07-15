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

   
}