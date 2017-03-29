function init() {
    $('[data-toggle="tooltip"]').tooltip({
        title:"carrocomp! La nueva forma de moverte en la ciudad. Con carrocomp! puedes compartir tu viaje con amigos y cobrar el costo equivalente.",
        content: "<img src='../img/logo-peach.jpg' alt=''>",
        animation: true}
    );
    
    $(".buscar").click(validarBusqueda);
}

function validarBusqueda() {
    var origen = $("#origen");
    var destino = $("#destino");
    
    if($("#origen").val() == ""){
        swal("Por favor, ingrese su origen");
    }
    else if($("#destino").val() == ""){
        swal("Por favor, ingrese su destino");
    }
    else if($("#origen").val() == $("#destino").val()){
        swal("Por favor, ingrese un destino diferente");
    }
    else {
        enviarLugar(origen.val(), destino.val());
        $("#info").fadeIn("slow");
        
    }
}

var costoBencina = 673;

function enviarLugar(_origen, _destino) {
    for(var i in ciudades){
        if(ciudades[i].name == _origen){
            console.log(ciudades[i].name);
            var distanciaOrigen = ciudades[i].distance;
            
        }
        if(ciudades[i].name == _destino){
            console.log(ciudades[i].name);
            var distanciaDestino = ciudades[i].distance;
        }
    }
    calcularCostos(distanciaOrigen, distanciaDestino);
}

function calcularCostos(_distanciaOrigen, _distanciaDestino) {
    var distanciaTotal = _distanciaOrigen + _distanciaDestino;
    
    var litrosMoto = distanciaTotal / carros[0].consumo;
    var costoMoto = Math.round(litrosMoto*costoBencina);
    var litrosAuto = distanciaTotal / carros[1].consumo;
    var costoAuto = Math.round(litrosAuto*costoBencina);
    var litrosMinivan = distanciaTotal / carros[2].consumo;
    var costoMinivan = Math.round(litrosMinivan*costoBencina);
    var litrosCamion = distanciaTotal / carros[3].consumo;
    var costoCamion = Math.round(litrosCamion*costoBencina);
    
    $(".money-moto").html(costoMoto);
    $(".money-auto").html(costoAuto);
    $(".money-minivan").html(costoMinivan);
    $(".money-camion").html(costoCamion);
    
    $(".compartir").click(validarSeleccion);
}

function validarSeleccion() {
    if ($('.vehiculo').is(':checked')) {
        var vehiculoElegido = $( ".vehiculo:checked" ).val();
        for(var i in carros){
            if(carros[i].tipo == vehiculoElegido){
                var numPasajeros = carros[i].pasajeros;
                var imgVehiculo = carros[i].imgURL;
                var tipoVehiculo = carros[i].tipo;
            }
        }
        validarPasajeros(numPasajeros, imgVehiculo, tipoVehiculo);
        
    } else {
        sweetAlert("Por favor, seleccione un tipo de vehículo");
    }
}

function validarPasajeros(_numPasajeros, _imgAuto, _tipoAuto) {
    if($("#pasajeros").val() == ""){
        sweetAlert("Ingrese número de pasajeros");
    }
    else if($("#pasajeros").val() % 1 != 0) {
        sweetAlert("Por favor, ingrese un número entero");
    }
    else if ($("#pasajeros").val()>_numPasajeros){
        sweetAlert("Número de pasajeros no permitido"+_numPasajeros)
    }
    else{
        var monto = $(".money-"+_tipoAuto).text();
        var costoIndividual = monto/_numPasajeros;
        modalFunction(_imgAuto, costoIndividual);
    }
}

function SoloNumeros(evt){
    if(window.event){//asignamos el valor de la tecla a keynum
        keynum = evt.keyCode; //IE
    }
    else{
        keynum = evt.which; //FF
    } 
    //comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
    if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){
        return true;
    }
    else{
        return false;
    }
}

function modalFunction(_URLimg, _costo) {
    swal(
    {
        
        html:
        '<img src="src/img/logo-peach.jpg" alt="" class="logo-peach"><h1>carrocomp!</h1> ',
        imageUrl: _URLimg,
        title: "Costo por persona:",
        text: _costo
    });
}
