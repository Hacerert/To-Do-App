const input=document.getElementById("txt");
const button=document.getElementById("btn");
const liste=document.getElementById("list");

button.addEventListener("click",function(){
const text=input.value.trim();//trim boşluk saymasın demek
if(text===""){
    return;
}
const li=document.createElement("li");
const span=document.createElement("span");
const deleteBtn=document.createElement("button");
span.textContent=text;
deleteBtn.textContent="Sil"
deleteBtn.addEventListener("click",function(){
li.remove();
});
li.appendChild(span);
li.appendChild(deleteBtn);
liste.appendChild(li);
input.value="";
});