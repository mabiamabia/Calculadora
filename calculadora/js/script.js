
var inputHorasPorDia = document.querySelector("#horas-dia");
var inputGanhoPorMes = document.querySelector("#ganho-mes");

var spanHoraFinal = document.querySelector(".secao__rodape .secao__rodape__valor span");var spanHoraFinal = document.querySelector(".secao__rodape .secao__rodape__valor span");

function calcularValorHora () {
    //faça o que está escrito aqui dentro
    console.log("Hello World <3");
    console.log("Input de horas por dia", inputHorasPorDia.value);
    console.log("valor", inputHorasPorDia.value);

    var qtdTotalHoras = inputHorasPorDia.valueAsNumber * 22;
    console.log("Total de horas:", qtdTotalHoras);
    
    var valorHora = (inputGanhoPorMes.valueAsNumber / qtdTotalHoras).toFixed(2);
    console.log("Valor da hora:", valorHora); 

    spanHoraFinal.textContent = "R$" + valorHora;


};

