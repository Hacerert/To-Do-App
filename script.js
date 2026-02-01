let tasks = JSON.parse(localStorage.getItem("tasks"))|| [];//veriyi başlatıyoruız
const input=document.getElementById("txt");
const button=document.getElementById("btn");//html ile tanış
const liste=document.getElementById("list");

function ekranaBas(){//ekrana bas fonsk
    liste.innerHTML="";//ekranı temizle
    tasks.forEach(function(gorev,index){//dizi dolaş
        const li=document.createElement("li");//görev için satır
        const span=document.createElement("span");//yazıyı tutacak span
        span.textContent=gorev;
        const deleteBtn=document.createElement("button");//sil butonu
        deleteBtn.textContent="Sil";
        deleteBtn.addEventListener("click",function(){//silme işi
            tasks.splice(index,1);//sildi
             localStorage.setItem("tasks", JSON.stringify(tasks));//güncelle
             ekranaBas();//ekrana bir daha yaz
    });
    li.appendChild(span);
        li.appendChild(deleteBtn);//elemanları birleştir
        liste.appendChild(li);
        });
}
button.addEventListener("click",function(){//ekle butonu
    const text=input.value.trim();
    if(text===""){//boş mu kontrol
        return;
    }
    tasks.push(text);//diziye ekle
     localStorage.setItem("tasks", JSON.stringify(tasks));//depoya yaz
     ekranaBas();//yeniden bas
     input.value="";//input temizle
});
input.addEventListener("keydown",function(event){
if(event.key==="Enter"){//entera basınca ekliyor
    button.click();
}
});
ekranaBas();//sayfa açılııncaa
