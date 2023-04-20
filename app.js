function displayGunlukler(){
gunlukList.innerHTML="";
console.log(gunlukler);
if (gunlukler.size==0) {
    gunlukList.innerHTML="<p class='p-4 m-2'><i>Henüz Bir Günlük Yazmadınız. YAZ LAN!</i></p>"
}
   for (let [anektar,gunluk] of gunlukler) {
    console.log(anektar);
    let gunLi=`                            
    <li class="day list-group-item">
        <div class="d-grid gap-2">
            <button class="btn block" type="button" data-bs-toggle="collapse"
                data-bs-target="#${anektar}" aria-expanded="false" aria-controls="collapseExample">
                ${gunluk.getDiary()}
            </button>
        </div>
        <div class="collapse" id="${anektar}">
            <div class="card card-body">
                <div class="baslik">
                    <h3>${gunluk._title}</h3>
                    <h6>${gunluk.date}</h6>
                </div>
                <p>${gunluk._text}</p>
            </div>
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a onclick="deleteDay(${anektar})" class="dropdown-item" href="#"><i
                                class="fa-regular fa-trash-can"></i> Sil</a></li>
                    <li><a onclick="editDay(${anektar})" class="dropdown-item" href="#"><i
                                class="fa-sharp fa-solid fa-pen"></i> Düzenle</a></li>
                </ul>
            </div>
        </div>
    </li>`
    
    gunlukList.insertAdjacentHTML("beforeend",gunLi);
   }
}


function deleteDay(key){
    
    console.log(key.id);
    let sonuc=gunlukler.delete(key.id);
    console.log(sonuc);  
      displayGunlukler();
      localStorage.setItem("gunlukler",JSON.stringify(Array.from(gunlukler.entries())));
}




let targetEditID=0;
let targetDay=null;
function addDay(type){
    if(type=="Ekle"){
        console.log(gunbasligi.value);

        gunlukler.set((new Diary(gunbasligi.value, gunyazisi.value,null)).createID(),new Diary(gunbasligi.value, gunyazisi.value,null));
        gunbasligi.value = "";
        gunyazisi.value = "";
        gunlukKapat.click();
        displayGunlukler();
    }
    if(type=="Kaydet"){
        targetDay._title=gunbasligi.value;
        targetDay._text=gunyazisi.value;
    }
    
    gunlukKapat.click();
    displayGunlukler();
   localStorage.setItem("gunlukler",JSON.stringify(Array.from(gunlukler.entries())));
    
}
function editDay(dayID){
    gunYazisiBTN.click();
    targetEditID=dayID.id;
    targetDay=gunlukler.get(dayID.id);

    gunbasligi.value = targetDay._title;
    gunyazisi.value = targetDay._text;
    gunlugeEkleBTN.textContent="Kaydet";
    gunlugeEkleBTN.classList="btn btn-outline-success"
    
}

