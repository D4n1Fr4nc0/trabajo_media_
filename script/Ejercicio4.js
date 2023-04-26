let placa1, pasajeros1, pasaje1, precio1;
let placa2, pasajeros2, pasaje2, precio2;

placa1 = prompt('ingresar la placa del bus 1')
pasajeros1 = Number(prompt('ingresar el numero de pasajeros transportados 1'))
pasaje1 =Number(prompt('ingresar el valor de pasaje 1'))

placa2 = prompt('ingresar la placa del bus 2')
pasajeros2 = Number(prompt('ingresar el numero de pasajeros transportados 2'))
pasaje2 =Number(prompt('ingresar el valor de pasaje 2'))

placa1 = (pasajeros1*pasaje1)
placa2 = (pasajeros2*pasaje2)

if(placa1>placa2){
    alert('placa1 ha recojido mas dinero')
}else{
    alert('placa2 ha recojido mas dinero')
}