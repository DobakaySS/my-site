const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_.";

let globalClientY = 0;

const blob = document.getElementById("blob");
window.onpointermove = event => {
    const { clientX, clientY } = event;

    globalClientY = clientY;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY + window.scrollY}px`
    }, { duration: 3000, fill: "forwards" });
}

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    blob.animate({
        top: `${globalClientY + window.scrollY}px`
    }, { duration: 3000, fill: "forwards" });
});


function hackerAnimation(target) {
    // Verifica se o elemento foi fornecido e possui o atributo data-value
    if (!target || !target.tagName || target.tagName.toLowerCase() !== 'h1' || !target.dataset.value) {
        console.error('A função hackerAnimation requer um elemento <h1> válido com o atributo data-value.');
        return;
    }

    // Função para animar o elemento
    function animateElement() {
        let iteration = 0;

        let interval = null;

        interval = setInterval(() => {
            target.innerText = target.dataset.value
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iteration >= target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 5;
        }, 30);
    }

    // Cria um observador de interseção
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela, inicia a animação
            setTimeout(() => {
                if (entry.isIntersecting) {

                    animateElement();
                    // Desregistra o observador após a animação ser iniciada para não disparar novamente
                    //observer.unobserve(target);

                }
            }, 1000);
        });
    });

    // Registra o elemento para observar
    observer.observe(target);
}


// Seleciona todos os elementos h1 na página
var elementosH1 = document.querySelectorAll("h1");

// Itera sobre a lista de elementos h1 e aplica a animação a cada um
elementosH1.forEach(function (elemento) {
    hackerAnimation(elemento);
});

