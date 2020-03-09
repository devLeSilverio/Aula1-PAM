// This is a JavaScript file

// funcao anonima 

// se nao tem parametro jno val ele me retorna o que esta la 

$(document).on("click","#Somar",function(){
var valor1 =$("#n1").val();
var valor2 =$("#n2").val();

var calcular = parseFloat(valor1) + parseFloat(valor2);

$("#result").val(calcular);
});

$(document).on("click","#Subtrair",function(){
var valor1 =$("#n1").val();
var valor2 =$("#n2").val();

var calcular = parseFloat(valor1) - parseFloat(valor2);

$("#result").val(calcular);
});

$(document).on("click","#Multiplicar",function(){
var valor1 =$("#n1").val();
var valor2 =$("#n2").val();

var calcular = parseFloat(valor1) * parseFloat(valor2);

$("#result").val(calcular);
});

$(document).on("click","#Dividir",function(){
var valor1 =$("#n1").val();
var valor2 =$("#n2").val();

var calcular = parseFloat(valor1) /  parseFloat(valor2);

$("#result").val(calcular);
});