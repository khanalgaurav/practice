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
    if(window.pageYOffset>=20){
        console.log("hello....");
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
})