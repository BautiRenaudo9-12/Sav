function main(){
    //variables
    let iconUp=document.getElementById("icon-circle-up");
    let iconDown=document.getElementById("icon-circle-down");
    let header2Nav=document.getElementById("header2Nav");

    //eventos
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