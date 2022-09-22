// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }

let number_of_drums = document.querySelectorAll(".drum").length

for(let i=0;i<number_of_drums;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function() {
        
        let buttonInnerHTML = this.innerHTML;
        make_sound(buttonInnerHTML);
        button_animation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event){
    make_sound(event.key);
    button_animation(event.key);
});


function make_sound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            
            break;
    
        default: console.log(buttonInnerHTML)
            break;
    }
}

function button_animation(currentKey){
    let active_button = document.querySelector("."+currentKey);
    active_button.classList.add("pressed");

    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100); //önce class ekleip shadow verdik sonra timeout ile 0.1 saniye sonra class ı silince animasyon oldu.

}
