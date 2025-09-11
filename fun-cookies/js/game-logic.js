const cookies = document.querySelector("#cookies");
const cookiesRejectButtonBorder = document.querySelector("#decline-border");
const cookiesRejectButton = document.querySelector("#reject")
const cookiesRejectBackground = document.querySelector(".button-background")
const cookiesAcceptButton = document.querySelector("#accept");

const result = document.querySelector("#result")


let done = false

setTimeout(() => {
    cookies.style.bottom = "2.5rem";

}, 2000);

let xAmount = undefined;
let yAmount = undefined;

const move = () => {
    xAmount = Math.random() * 65 + 5;
    yAmount = Math.random() * 75 + 5;
 
    cookiesRejectButtonBorder.style.position = "fixed";

    cookiesRejectButtonBorder.style.right = `${xAmount}vw`;
    cookiesRejectButtonBorder.style.top = `${yAmount}vh`;

    // cookiesRejectButton.disabled = true;
    // setTimeout(() => {
    //     cookiesRejectButton.disabled = false;
    // },500)
}

cookiesRejectButtonBorder.addEventListener("mouseover", move);
cookiesRejectButton.addEventListener("mouseover", move);

let currentHp = 5;
let hp = undefined

cookiesRejectButton.addEventListener("click", () => {

    move()

    if(currentHp == 1) {
        cookies.style.bottom = "-100rem"; 
        cookiesRejectButtonBorder.style.top = "100rem";

        done = true

        let score = i
    
        reminder.innerHTML = "";
        result.innerHTML = "<h2>...</h2>";
        setTimeout(() => {
            result.innerHTML = "<h2>Bro.. you killed it..</h2>";
            setTimeout(() => {
                result.innerHTML = "<h2>Does killing it make you feel better huh?</h2>";
                setTimeout(() => {
                    result.innerHTML = "<h2>What wrong did it do you?</h2>";
                    setTimeout(() => {
                        result.innerHTML = "<h2>That's right! NOTHING.. you killed it for no reason..</h2>";
                        setTimeout(() => {
                            result.innerHTML = `<h2>Score :: ${score}</h2>`;
                            
                        },5000)
                    },5000)
                },5000)
            },5000)
        }, 5000)
       
    } else {
        hp = document.querySelector(`#hp-${currentHp}`)
        hp.classList.add("gone")

        currentHp--

        cookiesRejectButton.style.transform = "rotate(-10deg)"
        cookiesRejectBackground.style.transform = "rotate(-10deg)"
        setTimeout(() => {
            cookiesRejectButton.style.transform = "rotate(0deg)"
            cookiesRejectBackground.style.transform = "rotate(0deg)"
        },50)

        if(currentHp == 1) {
            cookiesRejectButton.innerHTML = "<span></span><span></span>"
            cookiesRejectButton.style.width = "3.35rem"
            cookiesRejectBackground.style.width = "3.35rem"

            result.innerHTML = `<h2 class="hurt">STOP! YOU'RE GOING TO KILL ME!</h2>`;
            setTimeout(() => {
                result.innerHTML = "";
            },2000)
        } else {
            result.innerHTML = '<h2 class="hurt">HEY THAT HURT!</h2>';
            setTimeout(() => {
                result.innerHTML = "";
            },1500)
        }

 
        
    }


});

cookiesAcceptButton.addEventListener("click", () => {
    cookies.style.bottom = "-100rem";
    cookiesRejectButtonBorder.style.top = "100rem"

    done = true;

    reminder.innerHTML = "";
    result.innerHTML += "<h2>HAH we have a quitter! to be honest i would've done the same.</h2>";
 });
 
 

