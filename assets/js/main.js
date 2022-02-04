const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const resultado = document.querySelector('.resultado');
const submit = document.querySelector('.submit');

function calculaIMC() {
    const altura = document.querySelector('.altura');
    const peso = document.querySelector('.peso');
    const resultado = document.querySelector('.resultado');
    let situacao = "";
    let valorIMC = peso.value / (altura.value * altura.value);

    if (altura.value == '' || peso.value == '') {
        alert("Dados incorretos");
    }
    else {



        if (valorIMC < 18.5)
            situacao = "abaixo do peso";
        else
            if (valorIMC >= 18.5 && valorIMC <= 25)
                situacao = "peso normal";
            else
                if (valorIMC >= 25 && valorIMC <= 29.9)
                    situacao = "sobrepeso"
                else   
                    if (valorIMC >= 30 && valorIMC <= 34.9)
                        situacao = "obesidade grau 1"
                    else
                        if (valorIMC >= 35 && valorIMC <= 39.9)
                            situacao = "obesidade grau 2"
                        else
                            if (valorIMC >= 40)
                                situacao = "obesidade grau 3"

    }

    resultado.innerHTML = `O valor do seu IMC é de ${valorIMC.toFixed(2)} e a sua situação é: ${situacao}`
}

function recarregaPagina() {

    const reset = document.querySelector('.reset');

    location.reload();
}
