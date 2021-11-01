var menuIcon = document.querySelector(".menu-icon");
var leftSidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    leftSidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}



