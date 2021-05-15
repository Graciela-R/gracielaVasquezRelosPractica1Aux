//calcule la propina dependiendo del valor de la factura
//cree una variable tip para esto no esta permitido usar if/else
function Propina(numero2) {
    return (numero2 >= 50 && numero2 <= 300);
}
var valor = 100;
function calcTip() {
    while (Propina(valor) == true) {
        var tip = valor * 0.15;
        return tip;
    }
    return 0;
}
console.log("La factura es de " + valor + "es de: " + calcTip());
//2-Imprima una cadena en la consola que contenga el valor de la factura 
//la propina y el valor final
console.log("La factura es de " + valor + " La propina fue de " + calcTip() + " el valor total es " + (valor + calcTip()));
//Cree un array de factursas que contenga los siguientes datos de prueba
var facturas = new Array();
var propinas = new Array();
var totales = new Array();
facturas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var propina;
for (var i = 0; i < facturas.length; i++) {
    console.log("lll");
    propina = calcTip2(facturas[i]);
    propinas[i] = propina;
    totales[i] = propinas[i] + facturas[i];
}
for (var j = 0; j < totales.length; j++) {
    console.log(totales[j]);
}
function calcTip2(n) {
    while (Propina(n) == true) {
        var tip = n * 0.15;
        return tip;
    }
    return 0;
}
/*
function Propina2 (numero2:number){
    return (numero2>=50 && numero2<=300);
}
function calcTip2(i:number, n:number){
    let tip=0;
     switch(n){
        case 1:
           while(Propina2(n)==true){
             tip=n*0.15;
             propinas[i]=tip;
             totales[i]=n+propinas[i];
             break;
           }
        default:
                propinas[i]=tip;
                totales[i]=n+propinas[i];
                break;
     }
}
for(let j=0;j<facturas.length;j++){
    calcTip2(j,facturas[j]);
}
for(let k=0;k<totales.length;k++){
    console.log(totales[k]);
}
//console.log(totales[0]);*/
