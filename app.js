
(function(){
    const screen = document.querySelector(".screen");
    const btns = document.querySelectorAll(".btn");
    const btnRed = document.querySelector(".btn-clear");
    const btnGreen = document.querySelector(".btn-equal");
    
  
    btns.forEach(function(button){
        button.addEventListener("click", function(e){
            const value = e.target.dataset.num;
            screen.value += value;
    
        });
    });
    
    btnGreen.addEventListener("click", function(e){
    
        if (screen.value === "") {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    
    });

    btnRed.addEventListener("click", function(e){

        screen.value = ""



    });
})();