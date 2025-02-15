var menu=document.getElementById("menubar");
var nav=document.getElementById("side") ;
var close=document.getElementById("close");
menu.addEventListener("click",function(){
    nav.style.right=0;
})
close.addEventListener("click",function(){
    nav.style.right="-50%";
})
// product search 
var container=document.getElementById("container")
    var input=document.getElementById("search")
    var list=container.querySelectorAll("div");
    console.log(list)
    console.log(list[0].textContent)
    input.addEventListener("keyup",function(){
        var ev=event.target.value.toUpperCase()
        
        for(i=0;i<list.length;i++){
            var pname=list[i].querySelector("p").textContent;
            if(pname.toUpperCase().indexOf(ev)<0){
                list[i].style.display="none"
           }
           else{
            list[i].style.display="block"
           }
       }
    })