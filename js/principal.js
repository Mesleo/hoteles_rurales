
/**
 * Created by anonimo1 on 15/01/2016.
 */
 window.addEventListener('load', function(){
     var entrar = document.getElementById('entrarCasasRurales');
     var html = document.getElementsByTagName('html');
     var alturaPantalla = screen.height;
     var imagenPrincipal = document.getElementById('imagen_principal');
     var principal = document.getElementById('cuerpo');
     imagenPrincipal.style.height = alturaPantalla;
     html.style.height = alturaPantalla;
     entrar.location = 'casas_rurales.html';
 });