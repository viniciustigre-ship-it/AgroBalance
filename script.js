
// ======================================
// AGROBALANCE - JAVASCRIPT
// ======================================

// ======================================
// CALCULADORA DE CONSUMO DE ÁGUA
// ======================================

// Botão calcular
const btnCalcular = document.getElementById("calcular");

// Área onde o resultado será exibido
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {

```
// Obtém os valores digitados
const area = Number(document.getElementById("area").value);

const cultivo =
    document.getElementById("cultivo").value;

// Verifica se o usuário digitou uma área válida
if(area <= 0){

    resultado.innerHTML =
    "Digite uma área válida.";

    return;
}

// Consumo médio anual estimado
// Valores fictícios para fins educativos
let consumoPorHectare = 0;

switch(cultivo){

    case "soja":
        consumoPorHectare = 500000;
        break;

    case "milho":
        consumoPorHectare = 600000;
        break;

    case "trigo":
        consumoPorHectare = 400000;
        break;

    case "feijao":
        consumoPorHectare = 550000;
        break;
}

// Consumo total
const consumoTotal =
    area * consumoPorHectare;

// Economia de 30%
const economia =
    consumoTotal * 0.30;

// Exibe resultado
resultado.innerHTML =

`
<p>
Consumo estimado:
<strong>
${consumoTotal.toLocaleString("pt-BR")}
litros/ano
</strong>
</p>

<br>

<p>
Economia possível:
<strong>
${economia.toLocaleString("pt-BR")}
litros/ano
</strong>
</p>

<br>

<p>
🌱 Com irrigação inteligente você poderia economizar aproximadamente
<strong>
${economia.toLocaleString("pt-BR")}
litros de água por ano.
</strong>
</p>
`;
```

});

// ======================================
// QUIZ AMBIENTAL
// ======================================

const btnQuiz =
document.getElementById("corrigirQuiz");

const resultadoQuiz =
document.getElementById("resultadoQuiz");

btnQuiz.addEventListener("click", () => {

```
let pontos = 0;

// Percorre as 5 perguntas
for(let i = 1; i <= 5; i++){

    const resposta =
    document.querySelector(
    `input[name="q${i}"]:checked`
    );

    if(resposta &&
       resposta.value === "certo"){

        pontos++;
    }
}

let mensagem = "";

// Mensagem de desempenho
if(pontos === 5){

    mensagem =
    "Excelente! Você domina o tema da sustentabilidade. 🌎";

}else if(pontos >= 3){

    mensagem =
    "Muito bem! Você possui bons conhecimentos ambientais. 🌱";

}else{

    mensagem =
    "Continue estudando sobre sustentabilidade e preservação da água. 💧";
}

resultadoQuiz.innerHTML =

`
<p>
Pontuação:
<strong>${pontos}/5</strong>
</p>

<br>

<p>${mensagem}</p>
`;
```

});

// ======================================
// ACESSIBILIDADE
// ======================================

let tamanhoFonte = 16;

// Botões
const aumentarFonte =
document.getElementById("aumentarFonte");

const diminuirFonte =
document.getElementById("diminuirFonte");

const contraste =
document.getElementById("contraste");

// ======================================
// AUMENTAR FONTE
// ======================================

aumentarFonte.addEventListener("click", () => {

```
tamanhoFonte += 2;

document.body.style.fontSize =
tamanhoFonte + "px";
```

});

// ======================================
// DIMINUIR FONTE
// ======================================

diminuirFonte.addEventListener("click", () => {

```
if(tamanhoFonte > 10){

    tamanhoFonte -= 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";
}
```

});

// ======================================
// ALTO CONTRASTE
// ======================================

contraste.addEventListener("click", () => {

```
document.body.classList.toggle(
"contraste"
);
```

});

// ======================================
// ANIMAÇÃO DE ENTRADA DOS CARDS
// ======================================

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver((entries) => {

```
entries.forEach(entry => {

    if(entry.isIntersecting){

        entry.target.style.opacity = "1";

        entry.target.style.transform =
        "translateY(0)";
    }
});
```

});

cards.forEach(card => {

```
card.style.opacity = "0";

card.style.transform =
"translateY(30px)";

card.style.transition =
"all 0.8s ease";

observer.observe(card);
```

});

// ======================================
// FIM DO SCRIPT
// ======================================
