// var navLinks= document.getElementById("navLinks");
        function hidemenu(){
            document.getElementById("navLinks").style.right="-200px";
        }
        function showmenu(){
            document.getElementById("navLinks").style.right="0px";
        }

// alert("The file is working");
window.addEventListener("scroll",function(){
    let navbar=document.getElementById("holdnav");
    if(pageYOffset>=10){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
})