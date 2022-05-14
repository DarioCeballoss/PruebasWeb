
window.onload = function circuloDeProgreso() {
  var can = document.getElementById('canvas'),
      spanProcent = document.getElementById('procent'),
       c = can.getContext('2d');
 
  // POSICION DEL CIRCULO
  var posX = can.width / 2, 
      posY = can.height / 2,
      fps = 1000 / 200, //velocidad de progreso
      procent = 50,     // valor del porcentaje en el medio TEXTO
      oneProcent = 360 / 100, //transforma el perimetro en porcentaje
      result = oneProcent * 45;// porcentaje de progreso 
  
  c.lineCap = 'round';
  arcMove();
  
  function arcMove(){
    var deegres = 0;// desde que porcentaje o parte del perimetro arranca la animacion
    var acrInterval = setInterval (function() {
      deegres += 1;
      c.clearRect( 0, 0, can.width, can.height );
      procent = deegres / oneProcent; //Calcula el porcentaje que va a ir en el medio

      spanProcent.innerHTML = procent.toFixed(); // Plasma en el HTML el texto

      c.beginPath();
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );  // Circulo de abajo
      c.strokeStyle = '#b1b1b3'; // color del anterior
      c.lineWidth = '10';// espesor del anterior
      c.stroke();

      c.beginPath();
      c.strokeStyle = '#3949AB'; // Color del circulo de porcentaje
      c.lineWidth = '10';// espesor del principal
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
      c.stroke();
      if( deegres >= result ) clearInterval(acrInterval);
    }, fps);
    
  }
  
  
}