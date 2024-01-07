const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_.";
let interval = null;
let globalClientY =0;

const blob = document.getElementById("blob");
window.onpointermove = event => { 
  const { clientX, clientY } = event;

    globalClientY = clientY; 
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY+window.scrollY}px`
  }, { duration: 3000, fill: "forwards" });
}

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    blob.animate({
        top: `${globalClientY+window.scrollY}px`
      }, { duration: 3000, fill: "forwards" });
  });


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


// Delay the animation by (1 second)
setTimeout(() => {
    hackerAnimation(document.querySelector("h1"));
}, 1000);

