var input = document.getElementById("myinput");

input.addEventListener('keyup',Savedata);

input.value = localStorage.getItem("typedData")

function Savedata(){

   var inputVal = input.value;
   console.log(inputVal);
   localStorage.setItem("typedData",inputVal);   

}
Savedata()

window.addEventListener('load', loadFunc)
function loadFunc(){
   
    input.value = localStorage.getItem("typedData");
 
}

