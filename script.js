const input=document.getElementById("txt");
const button=document.getElementById("btn");
const liste=document.getElementById("list");

button.addEventListener("click",function(){
const text=input.value;
const li=document.createElement("li");
li.textContent=text;
liste.appendChild(li);
input.value="";
});