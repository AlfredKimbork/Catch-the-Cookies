const reminder = document.querySelector("#reminder");






setTimeout(() => {
    if(done == false) { 
        reminder.innerHTML = "<h2>You know you can always just accept the cookies..</h2>";

        setTimeout(() =>{
            if(done == false) {
                reminder.innerHTML = "<h2>No? okay well that's fine.. you do you.</h2>";

                setTimeout(() =>{
                    if(done == false) {
                        reminder.innerHTML = "";   

                    }
                },60000);

            }
        },30000);
    }
}, 60000);


setTimeout(() =>{
    if(done == false) { 
        reminder.innerHTML = "<h2>Fun fact! I actually did it once.. tho i do think it's just random chance</h2>";

        setTimeout(() =>{
            if(done == false) { 
                reminder.innerHTML = ""; 

            }
        },60000);
    }
},240000);

setTimeout(() =>{
    if(done == false) { 
        reminder.innerHTML = "<h2>So tell me about your day, do you have any plans? i mean besides this..</h2>";

        setTimeout(() =>{
            if(done == false) { 
                reminder.innerHTML = "<h2>No? Not a single thing? You seriously don't have anything better to do?</h2>"; 

                setTimeout(() =>{
                    if(done == false) { 
                        reminder.innerHTML = "<h2>I guess i could've guessed so...</h2>"; 
                        
                        setTimeout(() => {
                            if(done == false) { 
                                reminder.innerHTML = "<h2>Well if you're stubborn enough you'll be sitting her for a loooong time</h2>";

                                setTimeout(() =>{
                                    if(done == false) { 
                                        reminder.innerHTML = "";      

                                    }
                                },60000);
                            }
                        }, 60000);
                    }
                },30000);
            }
        },60000);
    }
},960000);

setTimeout(() => {
    if(done == false) { 
        reminder.innerHTML = "<h2>you know what.. let me just-</h2>";

        setTimeout(() => {
            if(done == false) { 
                cookiesAcceptButton.style.left = "6.5rem";
                cookiesAcceptButton.style.transform = "scaleX(2)"

                setTimeout(() => {
                    if(done == false) { 
                        reminder.innerHTML = "<h2>There! Now it's a little bigger, i know it can be hard to notice a green button</h2>";

                        setTimeout(() => {
                            if(done == false) { 
                                reminder.innerHTML = "<h2>No? You don't want to... okay then I'll just do this</h2>";

                                setTimeout(() => {
                                    if(done == false) { 
                                        cookiesRejectButton.style.transform = "scaleX(.5)";

                                        setTimeout(() => {
                                            if(done == false) { 
                                                reminder.innerHTML = "<h2>Take that! Now just press Accept..</h2>";

                                                setTimeout(() => {
                                                    if(done == false) { 
                                                        reminder.innerHTML = "<h2>Still no? well that's your choice..</h2>";
                            
                                                        setTimeout(() =>{
                                                            if(done == false) { 
                                                                reminder.innerHTML = "";            
                                                            }
                                                        },60000);
                                                    }
                                                }, 24000);
                                            }
                                        }, 1000);
                                    }
                                }, 5000);
                            }
                        }, 30000)
                    }
                }, 1000);
            }
        }, 5000);          
    }
}, 1200000);