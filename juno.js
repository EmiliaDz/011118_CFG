var juno = document.getElementById("leftgear"),
    
window.addEventListener("scroll", function() {
    juno.style.transform = "rotate("+window.pageYOffset+"deg)";
});
