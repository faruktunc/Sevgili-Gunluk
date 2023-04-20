const gunlukList = document.getElementById("day-list")
const gunluk = document.querySelector(".gunluk");
const gunlukKapat = document.getElementById("gunluk-kapat");
const gunYazisiBTN = document.getElementById("gun-yazisiBTN");
const gunlugeEkleBTN = document.getElementById("gunlugeEkle")
gunYazisiBTN.addEventListener("click", () => {
    gunluk.style.display = "flex";
})
gunlukKapat.addEventListener("click", () => {
    gunbasligi.value = "";
    gunyazisi.value = "";
    gunlugeEkleBTN.textContent="Ekle";
    gunlugeEkleBTN.classList="btn btn-outline-primary"
    gunluk.style.display = "none";
})

var gunlukler=new Map();
let TestDay=new Diary("Böyle Günün Anasını","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id turpis nunc. Ut eleifend est eu libero auctor, vitae tempor orci ultricies. Vivamus eget sem libero. Nunc porttitor, est a suscipit vulputate, augue nunc vulputate turpis, ac pulvinar nisl arcu vitae diam. Duis tempor risus lectus, a hendrerit massa consectetur eget. Maecenas sollicitudin neque sed eleifend euismod. Suspendisse dictum enim ullamcorper tortor vulputate, a dictum mi fermentum. Aenean molestie id leo vel cursus. Sed et orci nec massa egestas efficitur. Donec metus elit, pellentesque ut egestas sit amet, tempor nec ligula. Praesent consectetur rhoncus est, non bibendum leo. Phasellus fermentum iaculis eros, ut euismod elit euismod in. Morbi pellentesque felis neque, ac fermentum magna sollicitudin sit amet.","20/04/2023");
gunlukler.set(TestDay.createID(),TestDay);
const gunyazisi = document.getElementById("guntext");
const gunbasligi = document.getElementById("gunbaslik");

gunlugeEkleBTN.addEventListener("click", () => {
    addDay(gunlugeEkleBTN.textContent);
})

if (localStorage.getItem("gunlukler") !== null) {
    var storedData = JSON.parse(localStorage.getItem("gunlukler"));
    gunlukler = new Map(storedData.map(([key, value]) => [key, new Diary(value._title, value._text,value.date)]));
  }




displayGunlukler();