const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_.";

let interval = null;
let animationTriggered = false;

function hackerAnimation(target) {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        target.innerText = target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 28)];
            })
            .join("");

        if (iteration >= target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 5;
    }, 30);
}


// Delay the animation by 1000 milliseconds (1 second)
setTimeout(() => {
    hackerAnimation(document.querySelector("h1"));
}, 1000);