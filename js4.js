// New Function

function ChangeMainHtml(){

    var main = document.querySelector('#main');

    var sentence1 = "Hello thank you for changing me!";
    var sentence2 = "oh Hello, I'm a different sentence !"; 

    if (main.innerHTML == sentence1){
        main.innerHTML = sentence2;
        main.style.padding = "50px";
    } else { 
        main.innerHTML = sentence1;
       main.style.padding = "0px"
    }
}