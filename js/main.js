let menuVisible = false;
//Función que oculta o muestra el menu
function showMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function select() {
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//Función que aplica las animaciones de las habilidades
function efectSkills() {
    let skills = document.getElementById("skills");
    let distSkills = window.innerHeight -skills.getBoundingClientRect().top;
    if(distSkills >= 300) {
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("vue");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("sap");
        habilidades[5].classList.add("node");
        habilidades[6].classList.add("docker");
        habilidades[7].classList.add("postman");
        habilidades[8].classList.add("english");
        habilidades[9].classList.add("comunication");
        habilidades[10].classList.add("teamwork");
        habilidades[11].classList.add("creativity");
        habilidades[12].classList.add("dedication");
        habilidades[13].classList.add("project");
    }
}

//Detecto el scrolling para aplicar la animación
window.onscroll = function() {
    efectSkills();
}
