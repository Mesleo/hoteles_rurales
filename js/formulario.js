/**
 * Created by anonimo1 on 16/01/2016.
 */

function aumentarPersonas(span){
    var n = Number(span.textContent);
    if(n <= 11){
        span.innerHTML = n+1+"+";
    }
    if(n < 10){
        n += 1;
        span.innerHTML = n;
    }
}

function decrementarPersonas(span){
    var n = Number(span.textContent);
    if(isNaN(n)){
        n = Number(11);
    }
    if(n > 1){
        n -= 1;
        span.innerHTML = n;
    }
}

window.addEventListener('load', function(){
    var menos = document.getElementById('menos');
    var mas = document.getElementById('mas');
    var spanNumeroPersonas = document.getElementById('mostrar_numero_personas');
    menos.addEventListener('click', function(){
        decrementarPersonas(spanNumeroPersonas)
    });
    mas.addEventListener('click', function(){
        aumentarPersonas(spanNumeroPersonas)
    });
    var atras = document.getElementById('atras_reserva');
    atras.addEventListener('click', function(){
        history.back();
    });
    if(alturaPantalla > 480 && alturaPantalla < 568){
        principal.style.fontSize = "15px";
    }
});