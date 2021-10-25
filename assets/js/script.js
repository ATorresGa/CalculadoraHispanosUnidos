$(document).ready(function(){
    //botones de las energias
    var sumar= document.getElementById("sumar")
    var restar= document.getElementById("restar")
    var reiniciar= document.getElementById("reiniciar")
    var siguiente= document.getElementById("siguiente")
    //botones de la tabla
    var sumarBoca1= document.getElementById("boton-sumar-boca-ax1")
    var sumarBoca2= document.getElementById("boton-sumar-boca-ax2")
    var sumarBoca3= document.getElementById("boton-sumar-boca-ax3")
    var restarBoca1= document.getElementById("boton-restar-boca-ax1")
    var restarBoca2= document.getElementById("boton-restar-boca-ax2")
    var restarBoca3= document.getElementById("boton-restar-boca-ax3")
    var sumarCola1= document.getElementById("boton-sumar-cola-ax1")
    var sumarCola2= document.getElementById("boton-sumar-cola-ax2")
    var sumarCola3= document.getElementById("boton-sumar-cola-ax3")
    var restarCola1= document.getElementById("boton-restar-cola-ax1")
    var restarCola2= document.getElementById("boton-restar-cola-ax2")
    var restarCola3= document.getElementById("boton-restar-cola-ax3")
    var sumarEspalda1= document.getElementById("boton-sumar-espalda-ax1")
    var sumarEspalda2= document.getElementById("boton-sumar-espalda-ax2")
    var sumarEspalda3= document.getElementById("boton-sumar-espalda-ax3")
    var restarEspalda1= document.getElementById("boton-restar-espalda-ax1")
    var restarEspalda2= document.getElementById("boton-restar-espalda-ax2")
    var restarEspalda3= document.getElementById("boton-restar-espalda-ax3")
    var sumarCuerno1= document.getElementById("boton-sumar-cuerno-ax1")
    var sumarCuerno2= document.getElementById("boton-sumar-cuerno-ax2")
    var sumarCuerno3= document.getElementById("boton-sumar-cuerno-ax3")
    var restarCuerno1= document.getElementById("boton-restar-cuerno-ax1")
    var restarCuerno2= document.getElementById("boton-restar-cuerno-ax2")
    var restarCuerno3= document.getElementById("boton-restar-cuerno-ax3")
    //botones para restar las energias de los axies muertos
    var killAx1= document.getElementById("kill-ax1");
    var killAx2= document.getElementById("kill-ax2");
    var killAx3= document.getElementById("kill-ax3");

    //metodos para para funciones de las energias
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
        let textoEnergias=$("#energias").text("3/10");
        let textoRondas=$("#rondas").text("1/10")
    })

    siguiente.addEventListener("click",function(){
        let suma=$("#energias").text();
        suma=suma.split("/")
        resultado=parseInt(suma[0])+2;
        sumarRondas();
        if (resultado>10) {
            resultado=10;
            $("#energias").text(resultado+"/10")
        }else{
            $("#energias").text(resultado+"/10")
        }
        
    })
    function sumarRondas(){
        let rondas=$("#rondas").text()
        rondas= rondas.split("/")
        sumaRondas= parseInt(rondas[0])+1
        if (sumaRondas>10) {
            sumaRondas=10;
            $("#rondas").text(sumaRondas+"/10")
        } else {
            $("#rondas").text(sumaRondas+"/10")
        }
    }

    //funcion botones ultima fila eliminar axies
     killAx1.addEventListener("click",function(){
         let sumaCartas=2;
         $("#boca-ax1").text(sumaCartas)
         $("#cola-ax1").text(sumaCartas)
         $("#espalda-ax1").text(sumaCartas)
         $("#cuerno-ax1").text(sumaCartas)
         let sumaTotal= parseInt($("#total_cartas").text())-8
        $("#total_cartas").text(sumaTotal)
     })
     killAx2.addEventListener("click",function(){
        let sumaCartas=2;
        $("#boca-ax2").text(sumaCartas)
        $("#cola-ax2").text(sumaCartas)
        $("#espalda-ax2").text(sumaCartas)
        $("#cuerno-ax2").text(sumaCartas)
        let sumaTotal= parseInt($("#total_cartas").text())-8
       $("#total_cartas").text(sumaTotal)
    })
    killAx3.addEventListener("click",function(){
        let sumaCartas=2;
        $("#boca-ax3").text(sumaCartas)
        $("#cola-ax3").text(sumaCartas)
        $("#espalda-ax3").text(sumaCartas)
        $("#cuerno-ax3").text(sumaCartas)
        let sumaTotal= parseInt($("#total_cartas").text())-8
       $("#total_cartas").text(sumaTotal)
    })
    //funcion de los botones de la tabla primera fila (Boca)
    sumarBoca1.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumaBoca=$("#boca-ax1").text()
        sumaBoca=parseInt(sumaBoca)+1
        if (sumaBoca>2) {
            $("#boca-ax1").text("2")
        }else{
            $("#boca-ax1").text(sumaBoca)
            $("#total_cartas").text(resultado)
        }
    })
    restarBoca1.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumaBoca=$("#boca-ax1").text()
        sumaBoca=parseInt(sumaBoca)-1
        if (sumaBoca<0) {
            $("#boca-ax1").text("0")
        }else{
            $("#boca-ax1").text(sumaBoca)
            $("#total_cartas").text(resultado)
        }
    })
    sumarBoca2.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumaBoca=$("#boca-ax2").text()
        sumaBoca=parseInt(sumaBoca)+1
        if (sumaBoca>2) {
            $("#boca-ax2").text("2")
        }else{
            $("#boca-ax2").text(sumaBoca)
            $("#total_cartas").text(resultado)
        }
    })
    restarBoca2.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumaBoca=$("#boca-ax2").text()
        sumaBoca=parseInt(sumaBoca)-1
        if (sumaBoca<0) {
            $("#boca-ax2").text("0")
        }else{
            $("#boca-ax2").text(sumaBoca)
            $("#total_cartas").text(resultado)
        }
    })
    sumarBoca3.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumaBoca=$("#boca-ax3").text()
        sumaBoca=parseInt(sumaBoca)+1
        if (sumaBoca>2) {
            $("#boca-ax3").text("2")
        }else{
            $("#boca-ax3").text(sumaBoca)
            $("#total_cartas").text(resultado)
        }
    })
    restarBoca3.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumaBoca=$("#boca-ax3").text()
        sumaBoca=parseInt(sumaBoca)-1
        if (sumaBoca<0) {
            $("#boca-ax3").text("0")
        }else{
            $("#boca-ax3").text(sumaBoca)
            $("#total_cartas").text(resultado)
        }
    })
    //suma y resta del segundo item de la tabla de cartas (Cola)
    sumarCola1.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarCola=$("#cola-ax1").text()
        sumarCola=parseInt(sumarCola)+1
        if (sumarCola>2) {
            $("#cola-ax1").text("2")
        }else{
            $("#cola-ax1").text(sumarCola)
            $("#total_cartas").text(resultado)
        }
    })
    restarCola1.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarCola=$("#cola-ax1").text()
        sumarCola=parseInt(sumarCola)-1
        if (sumarCola<0) {
            $("#cola-ax1").text("0")
        }else{
            $("#cola-ax1").text(sumarCola)
            $("#total_cartas").text(resultado)
        }
    })
    sumarCola2.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarCola=$("#cola-ax2").text()
        sumarCola=parseInt(sumarCola)+1
        if (sumarCola>2) {
            $("#cola-ax2").text("2")
        }else{
            $("#cola-ax2").text(sumarCola)
            $("#total_cartas").text(resultado)
        }
    })
    restarCola2.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarCola=$("#cola-ax2").text()
        sumarCola=parseInt(sumarCola)-1
        if (sumarCola<0) {
            $("#cola-ax2").text("0")
        }else{
            $("#cola-ax2").text(sumarCola)
            $("#total_cartas").text(resultado)
        }
    })
    sumarCola3.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarCola=$("#cola-ax3").text()
        sumarCola=parseInt(sumarCola)+1
        if (sumarCola>2) {
            $("#cola-ax3").text("2")
        }else{
            $("#cola-ax3").text(sumarCola)
            $("#total_cartas").text(resultado)
        }
    })
    restarCola3.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarCola=$("#cola-ax3").text()
        sumarCola=parseInt(sumarCola)-1
        if (sumarCola<0) {
            $("#cola-ax3").text("0")
        }else{
            $("#cola-ax3").text(sumarCola)
            $("#total_cartas").text(resultado)
        }
    })
    //suma y resta del item 3 de la tabla (Espalda)
    sumarEspalda1.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarEspalda=$("#espalda-ax1").text()
        sumarEspalda=parseInt(sumarEspalda)+1
        if (sumarEspalda>2) {
            $("#espalda-ax1").text("2")
        }else{
            $("#espalda-ax1").text(sumarEspalda)
            $("#total_cartas").text(resultado)
        }
    })
    restarEspalda1.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarEspalda=$("#espalda-ax1").text()
        sumarEspalda=parseInt(sumarEspalda)-1
        if (sumarEspalda<0) {
            $("#espalda-ax1").text("0")
        }else{
            $("#espalda-ax1").text(sumarEspalda)
            $("#total_cartas").text(resultado)
        }
    })
    sumarEspalda2.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarEspalda=$("#espalda-ax2").text()
        sumarEspalda=parseInt(sumarEspalda)+1
        if (sumarEspalda>2) {
            $("#espalda-ax2").text("2")
        }else{
            $("#espalda-ax2").text(sumarEspalda)
            $("#total_cartas").text(resultado)
        }
    })
    restarEspalda2.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarEspalda=$("#espalda-ax2").text()
        sumarEspalda=parseInt(sumarEspalda)-1
        if (sumarEspalda<0) {
            $("#espalda-ax2").text("0")
        }else{
            $("#espalda-ax2").text(sumarEspalda)
            $("#total_cartas").text(resultado)
        }
    })
    sumarEspalda3.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarEspalda=$("#espalda-ax3").text()
        sumarEspalda=parseInt(sumarEspalda)+1
        if (sumarEspalda>2) {
            $("#espalda-ax3").text("2")
        }else{
            $("#espalda-ax3").text(sumarEspalda)
            $("#total_cartas").text(resultado)
        }
    })
    restarEspalda3.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarEspalda=$("#espalda-ax3").text()
        sumarEspalda=parseInt(sumarEspalda)-1
        if (sumarEspalda<0) {
            $("#espalda-ax3").text("0")
        }else{
            $("#espalda-ax3").text(sumarEspalda)
            $("#total_cartas").text(resultado)
        }
    })
    //sumar y restar de la ultima fila de botones (cuerno)
    sumarCuerno1.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarCuerno=$("#cuerno-ax1").text()
        sumarCuerno=parseInt(sumarCuerno)+1
        if (sumarCuerno>2) {
            $("#cuerno-ax1").text("2")
        }else{
            $("#cuerno-ax1").text(sumarCuerno)
            $("#total_cartas").text(resultado)
        }
    })
    restarCuerno1.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarCuerno=$("#cuerno-ax1").text()
        sumarCuerno=parseInt(sumarCuerno)-1
        if (sumarCuerno<0) {
            $("#cuerno-ax1").text("0")
        }else{
            $("#cuerno-ax1").text(sumarCuerno)
            $("#total_cartas").text(resultado)
        }
    })
    sumarCuerno2.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarCuerno=$("#cuerno-ax2").text()
        sumarCuerno=parseInt(sumarCuerno)+1
        if (sumarCuerno>2) {
            $("#cuerno-ax2").text("2")
        }else{
            $("#cuerno-ax2").text(sumarCuerno)
            $("#total_cartas").text(resultado)
        }
    })
    restarCuerno2.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarCuerno=$("#cuerno-ax2").text()
        sumarCuerno=parseInt(sumarCuerno)-1
        if (sumarCuerno<0) {
            $("#cuerno-ax2").text("0")
        }else{
            $("#cuerno-ax2").text(sumarCuerno)
            $("#total_cartas").text(resultado)
        }
    })
    sumarCuerno3.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)-1
        sumarCuerno=$("#cuerno-ax3").text()
        sumarCuerno=parseInt(sumarCuerno)+1
        if (sumarCuerno>2) {
            $("#cuerno-ax3").text("2")
        }else{
            $("#cuerno-ax3").text(sumarCuerno)
            $("#total_cartas").text(resultado)
        }
    })
    restarCuerno3.addEventListener("click",function(){
        let suma=$("#total_cartas").text();
        resultado= parseInt(suma)+1
        sumarCuerno=$("#cuerno-ax3").text()
        sumarCuerno=parseInt(sumarCuerno)-1
        if (sumarCuerno<0) {
            $("#cuerno-ax3").text("0")
        }else{
            $("#cuerno-ax3").text(sumarCuerno)
            $("#total_cartas").text(resultado)
        }
    })
})
