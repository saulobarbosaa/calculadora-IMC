
# Calculadora de IMC

Esse projeto é consiste em ser uma simples calculadora de IMC (Índice de Massa Corporal)


## O que é IMC? 🤔

O índice de Massa Corporal consiste basicamente em um calculo que indica se a pessoa está dentro do seu peso ideal de acordo com a sua altura.
Ele é muito utilizado por nutricionistas e profissionais na área da saúde.

## Como calcular o IMC? 🧮

O cálculo é bem simples, basta dividir o seu peso atual pela a sua altura ao quadrado, simplificando em uma fórmula matemática:

Peso ÷ (altura x altura)

## Como saber se estou dentro do meu peso ideal? 💡

No próprio formlário, é colocada uma tabela simples comparando o seu resultado de IMC com as classificações de peso, elas variam entre "abaixo do peso" até "obesidade grau 3"

### Sobre o projeto: 👨‍💻

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript. A parte de HTML foi bem simples, 
basicamente ela foi utilizada somente para criar a tabela de comparação dos valores do IMC, o formulário e a parte de resultados.

Toda a estilização e centralização dos elementos foi com CSS. Detalhe,
o background foi criado utilizando uma plataforma a parte, chamada de SVG Backgrounds.

Com JavaScript, foi criada a calculadora em si, com uma simples função. Nela foi extraída todas as classes do documento HTML, e dentro dela foi criada outra função. 

Foram utilizados if e else, para que o resultado acompanhado de um texte estivesse de acordo com o IMC da pessoa.

Logo após isso, eu criei um addEventListener para que no momento em que a pessoa enviasse o formulário, o calculo fosse realizado e o resultado fosse exibido. Caso a pessoa clicasse em "Calcular" sem preencher todos os dados, um alert era exibido na tela 
mandando ela preencher tudo corretamente.

### Algumas observações:

Alguns detalhes ainda estão sendo finalizados, como a resposividade e a resetagem do formulário assim que a pessoa fizesse outro calculo.

