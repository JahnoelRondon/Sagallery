let options = document.getElementsByClassName("options");
let options2 = document.getElementsByClassName("options2");

let elmnt0 = document.getElementById("britianID");
let elmnt1 = document.getElementById("chinaID");
let elmnt2 = document.getElementById("spainID");

let headerHeight = 120;

const run = (event) => {
    
    switch(event.target.innerText) {

        case "Britian":
            window.scroll({top: elmnt0.offsetTop - headerHeight, behavior: `smooth`});
            break;   
        case "China":
            window.scroll({top: elmnt1.offsetTop - headerHeight, behavior: `smooth`});
            break;  
        case "Spain":
            window.scroll({top: elmnt2.offsetTop - headerHeight, behavior: `smooth`});
            break;

    }
    
}

// for drop down lists
options[0].addEventListener("click", run);
options[1].addEventListener("click", run);
options[2].addEventListener("click", run);

// for single div elements
options2[0].addEventListener("click", run);
options2[1].addEventListener("click", run);
options2[2].addEventListener("click", run);