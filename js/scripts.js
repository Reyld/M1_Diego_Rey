var precio1 = 25;
var precio2 = 4;
var precio3 = 17;

function allrun(){
setInterval('allrun()',1);

    if ((document.getElementById("prod1").value)>5){
        ((document.getElementById("prod1").value)=5);
    }
    else if ((document.getElementById("prod1").value)<0){
        ((document.getElementById("prod1").value)=0);
    }
    else if ((document.getElementById("prod2").value)>2){
        ((document.getElementById("prod2").value)=8);
    }
    else if ((document.getElementById("prod2").value)<0){
        ((document.getElementById("prod2").value)=0);
    }
    else if ((document.getElementById("prod3").value)>2){
        ((document.getElementById("prod3").value)=2);
    }
    else if ((document.getElementById("prod3").value)<0){
        ((document.getElementById("prod3").value)=0);
    }
}





function calculo(){

    var total = parseInt(((document.getElementById("prod1").value)*precio1)+((document.getElementById("prod2").value)*precio2)+((document.getElementById("prod3").value)*precio3));

    document.getElementById("Resultado").innerHTML=total;

    /*

    if ((document.getElementById("prod1").value)>5){
        ((document.getElementById("prod1").value)=5);
    }
    else if ((document.getElementById("prod1").value)<0){
        ((document.getElementById("prod1").value)=0);
    }
    else if ((document.getElementById("prod2").value)>2){
        ((document.getElementById("prod2").value)=8);
    }
    else if ((document.getElementById("prod2").value)<0){
        ((document.getElementById("prod2").value)=0);
    }
    else if ((document.getElementById("prod3").value)>2){
        ((document.getElementById("prod3").value)=2);
    }
    else if ((document.getElementById("prod3").value)<0){
        ((document.getElementById("prod3").value)=0);
    }

    */


}

function togNav(){
    document.querySelector(".navbar").classList.toggle("navbar--open");
}

function pedir(){
    alert("No se ha detectado inicio de sesión. No se puede formalizar su compra.");
}

// Botón quitafilas
$(function () {

    $(".btn-danger").click(function () {
        if (confirm("El producto se eliminará. ¿Continuar?")) {
        //    $(this).parent().parent().hide();
            $(this).parent().parent().remove();     // Provisional
        }
        return false;
    });
}); 

