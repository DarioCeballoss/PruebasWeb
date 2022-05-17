window.onload = function(){
  progresCircule("canvas1234" , "procent1234" , 60 )
  progresCirculeAnimated("canvas2" , "procent2" , 30 )
  progresCirculeAnimated("canvas123" , "procent123" , 50 )
}
//window.onload = ;


//Creando codigo que yo entienda


function progresCircule(idCirculo , idPorcentaje , valPorcentaje){
    const can = document.getElementById(idCirculo),
        nProcent = document.getElementById(idPorcentaje),
        c = can.getContext('2d');

  // POSICION DEL CIRCULO
  let posX = can.width / 2, 
      posY = can.height / 2,
      fps = 1000 / 200, //velocidad de progreso
      procent = valPorcentaje,     // valor del porcentaje en el medio TEXTO
      oneProcent = 360 / 100, //transforma el perimetro en porcentaje
      result = oneProcent * procent;// porcentaje de progreso 


 nProcent.innerHTML = procent;
      
      c.clearRect( 0, 0, can.width, can.height );

      c.beginPath();
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );  // Circulo de abajo
      c.strokeStyle = '#b1b1b3'; // color del anterior
      c.lineWidth = '10';// espesor del anterior
      c.stroke();

      c.beginPath();
      c.strokeStyle = 'red'; // Color del circulo de porcentaje
      c.lineWidth = '10';// espesor del principal
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + result) );
      c.stroke();
  
}




function progresCirculeAnimated(idCirculo , idPorcentaje , valPorcentaje){
    const can = document.getElementById(idCirculo),
        nProcent = document.getElementById(idPorcentaje),
        c = can.getContext('2d');
 
  // POSICION DEL CIRCULO
  let posX = can.width / 2, 
      posY = can.height / 2,
      fps = 1000 / 200, //velocidad de progreso
      procent = valPorcentaje,     // valor del porcentaje en el medio TEXTO
      oneProcent = 360 / 100, //transforma el perimetro en porcentaje
      result = oneProcent * procent;// porcentaje de progreso 



  c.lineCap = 'round';
  arcMove();
  
  function arcMove(){
    var deegres = 0;// desde que porcentaje o parte del perimetro arranca la animacion
    var acrInterval = setInterval (function() {
      deegres += 1;
      c.clearRect( 0, 0, can.width, can.height );
      procent = deegres / oneProcent; //Calcula el porcentaje que va a ir en el medio

      nProcent.innerHTML = procent.toFixed(); // Plasma en el HTML el texto

      c.beginPath();
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );  // Circulo de abajo
      c.strokeStyle = '#b1b1b3'; // color del anterior
      c.lineWidth = '10';// espesor del anterior
      c.stroke();

      c.beginPath();
      c.strokeStyle = 'red'; // Color del circulo de porcentaje
      c.lineWidth = '10';// espesor del principal
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
      c.stroke();
      if( deegres >= result ) clearInterval(acrInterval); // detiene el progreso al alcanzar el valor seleccionado
    }, fps);
    
  }
  
}

