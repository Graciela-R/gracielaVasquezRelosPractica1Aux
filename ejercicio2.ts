//calcule la propina dependiendo del valor de la factura
//cree una variable tip para esto no esta permitido usar if/else
function Propina (numero2:number){
    return (numero2>=50 && numero2<=300);
}
let valor=100;
function calcTip(){
    while(Propina(valor)==true){
         let tip=valor*0.15;
        return tip;
    }
    return 0;
}
console.log("La factura es de "+valor+"es de: "+calcTip());
//2-Imprima una cadena en la consola que contenga el valor de la factura 
//la propina y el valor final
console.log("La factura es de "+valor+" La propina fue de "+calcTip()+" el valor total es "+ (valor+calcTip()));
//Cree un array de factursas que contenga los siguientes datos de prueba
let facturas=new Array();
let propinas=new Array();
let totales=new Array();
facturas=[22,295,176,440,37,105,10,1100,86,52];
let propina:number;
for(let i=0;i<facturas.length;i++){
    propina=calcTip2(facturas[i]);
    propinas[i]=propina;
    totales[i]=propinas[i]+facturas[i];

}
for(let j=0;j<totales.length;j++){
    console.log(totales[j]);
}
//Aqui le copie la misma funcion de calTip, nomas que 
//para que nose desordene
function calcTip2(n:number){
    while(Propina(n)==true){
         let tip=n*0.15;
        return tip;
    }
    return 0;
}

