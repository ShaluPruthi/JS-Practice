const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target)   //from where event occur
        switch(event.target.id){
        case ("grey"):
            body.style.backgroundColor = 'grey'
            break;
        
        case("blue"):
            body.style.backgroundColor = 'blue'
            break;
        
        case ("yellow"):
            body.style.backgroundColor = 'yellow'
            break;
            
        case("white"):
            body.style.backgroundColor = 'white'
            break;
        
        case("purple"):
        body.style.backgroundColor = 'purple'
        break;
        }


        //if-else solution :~

        // if(event.target.id === "grey"){
        //     body.style.backgroundColor = 'grey'
        // }
        // if(event.target.id === "white") {
        //     body.style.backgroundColor = 'white'
        // }
        // if (event.target.id === "blue") {
        //     body.style.backgroundColor = 'blue'
        // }
        // if (event.target.id === "yellow"){
        //     body.style.backgroundColor = 'yellow'
        // }
        // if (event.target.id === "purple"){
        //     body.style.backgroundColor = 'purple'
        // }
    })
})

//EventListener on Events implement on buttons