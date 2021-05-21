function main(){
    
    let  iconThree=document.getElementById("icon-three");
    let  iconMail=document.getElementById("icon-mail");
    let  iconInstagram=document.getElementById("icon-instagram-circle");
    let  i=true;
    
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
      
    
    //redireccionar a redes sociales
    iconMail.onclick = function(){
        window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZcRqTCQxZnzFPMlpnDtVkVDHbkKZFCQnFzfVrfGRFHjSwlkfkqPHCbGCSGCFKvzJfdJQq");
    }
    iconInstagram.onclick=function(){ 
        window.open("https://www.instagram.com/savretratos/");
    }
}
}