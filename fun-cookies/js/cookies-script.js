const cookies = document.querySelector("#cookies");
const cookiesRejectButton = document.querySelector("#reject");
const cookiesAcceptButton = document.querySelector("#accept");
const result = document.querySelector("#result")
let done =false

setTimeout(() => {
    cookies.style.bottom = "2.5rem";

}, 2000);

let xAmount = "";
let yAmount = "";

cookiesRejectButton.addEventListener("mouseover", () => {

    xAmount = Math.random() * 65 + 5;
    yAmount = Math.random() * 75 + 5;
 

    cookiesRejectButton.style.position = "fixed"

    cookiesRejectButton.style.right = `${xAmount}vw`;
    cookiesRejectButton.style.top = `${yAmount}vh`;
   
 });

 cookiesRejectButton.addEventListener("click", () => {
    cookies.style.bottom = "-100rem";
    cookiesRejectButton.style.top = "100rem";

    done = true

    reminder.innerHTML = "";
    result.innerHTML = "<h2>oh wow.. you actually succeeded...</h2>";
    setTimeout(() => {
        result.innerHTML = "<h2>was it worth the time tho?</h2>";
    },5000)

});

cookiesAcceptButton.addEventListener("click", () => {
    cookies.style.bottom = "-100rem";
    cookiesRejectButton.style.top = "100rem"

    done = true;

    reminder.innerHTML = "";
    result.innerHTML += "<h2>HAH we have a quitter! to be honest i would've done the same.</h2>";
 });
 
 

