const counter = document.querySelector("#counter")

i=0
document.addEventListener("click", () => {
    i++
    counter.innerHTML = `<h2 class="fast">${i} Clicks</h2>`;

})