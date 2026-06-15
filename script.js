



// ======================================
// CONTADORES ANIMADOS
// ======================================

const contadores =
document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const atualizar = () => {

        const alvo =
        +contador.getAttribute("data-target");

        const atual =
        +contador.innerText;

        const incremento =
        alvo / 100;

        if(atual < alvo){

            contador.innerText =
            Math.ceil(atual + incremento);

            setTimeout(atualizar,20);

        }else{

            contador.innerText =
            alvo + "%";
        }
    };

    atualizar();

});



// ======================================
// ANIMAÇÕES AO ROLAR
// ======================================

const elementos =
document.querySelectorAll(".reveal");

function revelar(){

    const alturaTela =
    window.innerHeight;

    elementos.forEach(elemento => {

        const topo =
        elemento.getBoundingClientRect().top;

        if(topo < alturaTela - 100){

            elemento.classList.add("active");
        }

    });

}

window.addEventListener(
"scroll",
revelar
);

revelar();



// ======================================
// ACESSIBILIDADE
// ======================================

let tamanhoFonte = 16;

const aumentarFonte =
document.getElementById(
"aumentarFonte"
);

const diminuirFonte =
document.getElementById(
"diminuirFonte"
);

const contraste =
document.getElementById(
"contraste"
);



// AUMENTAR

aumentarFonte.addEventListener(
"click",
() => {

    tamanhoFonte += 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";

}
);



// DIMINUIR

diminuirFonte.addEventListener(
"click",
() => {

    if(tamanhoFonte > 10){

        tamanhoFonte -= 2;

        document.body.style.fontSize =
        tamanhoFonte + "px";
    }

}
);



// ALTO CONTRASTE

contraste.addEventListener(
"click",
() => {

    document.body.classList.toggle(
    "contraste"
    );

}
);

        
// ======================================
// CALCULADORA DE CONSUMO DE ÁGUA
// ======================================

const btnCalcular =
document.getElementById(
"calcular"
);

const resultado =
document.getElementById(
"resultado"
);

btnCalcular.addEventListener(
"click",
() => {

    const area =
    Number(
    document.getElementById(
    "area"
    ).value
    );

    const cultivo =
    document.getElementById(
    "cultivo"
    ).value;

    if(area <= 0){

        resultado.innerHTML =

        `
        <p>
        ⚠️ Digite uma área válida.
        </p>
        `;

        return;
    }

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

    const consumoTotal =
    area * consumoPorHectare;

    const economia =
    consumoTotal * 0.30;

    let mensagem = "";

    if(economia > 1000000){

        mensagem =

        "🌎 Excelente! Sua propriedade possui grande potencial para economizar água com tecnologias sustentáveis.";

    }else if(economia > 300000){

        mensagem =

        "💧 Uma irrigação inteligente pode gerar uma economia significativa de recursos.";

    }else{

        mensagem =

        "🌱 Mesmo pequenas economias fazem diferença para o meio ambiente.";
    }

    resultado.innerHTML =

    `
    <div style="
    background:white;
    padding:25px;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    ">

    <h3>
    Resultado da Simulação
    </h3>

    <br>

    <p>

    Consumo anual estimado:

    <strong>

    ${consumoTotal.toLocaleString("pt-BR")}

    litros

    </strong>

    </p>

    <br>

    <p>

    Economia possível:

    <strong>

    ${economia.toLocaleString("pt-BR")}

    litros

    </strong>

    </p>

    <br>

    <p>

    ${mensagem}

    </p>

    </div>
    `;

}
);


// ======================================
// QUIZ AMBIENTAL
// ======================================

const btnQuiz =
document.getElementById(
"corrigirQuiz"
);

const resultadoQuiz =
document.getElementById(
"resultadoQuiz"
);

const barraQuiz =
document.getElementById(
"barraQuiz"
);

btnQuiz.addEventListener(
"click",
() => {

    let pontos = 0;

    for(let i = 1; i <= 5; i++){

        const resposta =
        document.querySelector(
        `input[name="q${i}"]:checked`
        );

        if(
            resposta &&
            resposta.value === "certo"
        ){
            pontos++;
        }
    }

    const porcentagem =
    (pontos / 5) * 100;

    barraQuiz.style.width =
    porcentagem + "%";

    let mensagem = "";

    if(pontos === 5){

        mensagem =

        "🏆 Excelente! Você domina os conceitos de sustentabilidade e uso consciente da água.";

    }

    else if(pontos >= 4){

        mensagem =

        "🌱 Muito bem! Você possui ótimos conhecimentos ambientais.";

    }

    else if(pontos >= 3){

        mensagem =

        "💧 Bom resultado! Continue aprendendo sobre preservação dos recursos naturais.";

    }

    else{

        mensagem =

        "📚 Continue estudando. Pequenos aprendizados ajudam a construir um futuro sustentável.";

    }

    resultadoQuiz.innerHTML =

    `
    <div style="
    background:white;
    padding:25px;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    margin-top:20px;
    ">

    <h3>

    Resultado Final

    </h3>

    <br>

    <p>

    Você acertou

    <strong>

    ${pontos} de 5

    </strong>

    perguntas.

    </p>

    <br>

    <p>

    Aproveitamento:

    <strong>

    ${porcentagem}%

    </strong>

    </p>

    <br>

    <p>

    ${mensagem}

    </p>

    </div>
    `;

}
);



// ======================================
// EFEITO SUAVE NO MENU
// ======================================

document
.querySelectorAll(
'.nav-links a'
)
.forEach(link => {

    link.addEventListener(
    'click',
    function(e){

        e.preventDefault();

        const destino =
        document.querySelector(
        this.getAttribute('href')
        );

        destino.scrollIntoView({

            behavior:'smooth'

        });

    });

});



// ======================================
// SOMBRA DINÂMICA NO MENU
// ======================================

window.addEventListener(
"scroll",
() => {

    const navbar =
    document.querySelector(
    ".navbar"
    );

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.25)";

    }else{

        navbar.style.boxShadow =
        "none";
    }

}
);



// ======================================
// MENSAGEM DE BOAS-VINDAS
// ======================================

window.addEventListener(
"load",
() => {

    console.log(

    "🌱 AgroBalance carregado com sucesso!"

    );

}
);






    




