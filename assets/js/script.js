$(document).ready(function(){
    var sumar= document.getElementById("sumar")
    var restar= document.getElementById("restar")
    var reiniciar= document.getElementById("reiniciar")
    var siguiente= document.getElementById("siguiente")
    
    sumar.addEventListener("click",function(){
        let suma=$("#energias").text();
        suma=suma.split("/")
        resultado=parseInt(suma[0])+1;
        if (resultado>10) {
            resultado=10;
            $("#energias").text(resultado+"/10")
        }else{
            $("#energias").text(resultado+"/10")
        }
        
    })
    
    restar.addEventListener("click",function(){
        let suma=$("#energias").text();
        suma=suma.split("/")
        resultado=parseInt(suma[0])-1;
        if (resultado<0) {
            resultado=0;
            $("#energias").text(resultado+"/10")
        }else{
            $("#energias").text(resultado+"/10")
        }
        
    })
    
    reiniciar.addEventListener("click",function(){
        let suma=$("#energias").text("3/10");
    })

    siguiente.addEventListener("click",function(){
        let suma=$("#energias").text();
        suma=suma.split("/")
        resultado=parseInt(suma[0])+2;
        if (resultado>10) {
            resultado=10;
            $("#energias").text(resultado+"/10")
        }else{
            $("#energias").text(resultado+"/10")
        }
        
    })
})
