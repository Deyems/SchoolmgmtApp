let hd_btn1 = document.querySelector(".hd_btn1");
let hd_btn2 = document.querySelector(".hd_btn2");

hd_btn1.addEventListener("mouseover",changeSecbtn);
hd_btn1.addEventListener("mouseout",changeSecback);

/*FOR THE FIRST HEADER BUTTON */
function changeSecbtn(){
    hd_btn2.style.backgroundColor = "rgba(255, 255, 255, 0.774)";
    hd_btn2.style.color = "rgb(131, 43, 3)";
    hd_btn2.style.transition = "ease-in 0.5s";

    hd_btn1.style.backgroundColor = "rgb(131, 43, 3)"; 
    hd_btn1.style.color = "rgba(255, 255, 255, 0.774)";
    hd_btn1.style.transition = "ease-in 0.5s";
}

function changeSecback(){
    hd_btn2.style.backgroundColor = "rgb(131, 43, 3)";
    hd_btn2.style.color = "rgba(255, 255, 255, 0.774)";
    hd_btn2.style.transition = "ease-in 0.5s";

    hd_btn1.style.backgroundColor = "rgba(255, 255, 255, 0.774)";
    hd_btn1.style.color = "rgb(131, 43, 3)";
    hd_btn1.style.transition = "ease-in 0.5s";
}

hd_btn2.addEventListener("mouseover",changeFirbtn);
hd_btn2.addEventListener("mouseout",changeFirback);
/*FOR THE 2ND HEADER BUTTON */
function changeFirbtn(){
    hd_btn1.style.backgroundColor = "rgb(131, 43, 3)"; 
    hd_btn1.style.color = "rgba(255, 255, 255, 0.774)";
    hd_btn1.style.transition = "ease-in 0.5s";

    hd_btn2.style.backgroundColor = "rgba(255, 255, 255, 0.774)";
    hd_btn2.style.color = "rgb(131, 43, 3)";
    hd_btn2.style.transition = "ease-in 0.5s";
}

function changeFirback(){
    hd_btn1.style.backgroundColor = "rgba(255, 255, 255, 0.774)";
    hd_btn1.style.color = "rgb(131, 43, 3)";
    hd_btn1.style.transition = "ease-in 0.5s";

    hd_btn2.style.backgroundColor = "rgb(131, 43, 3)";
    hd_btn2.style.color = "rgba(255, 255, 255, 0.774)";
    hd_btn2.style.transition = "ease-in 0.5s";
}

