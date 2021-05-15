"use strict"


// Birinci Paragraf (Kullanıcı ismini yazdırma)
const askName=prompt("Lütfen isminizi giriniz: ");
document.querySelector("#name").textContent=askName;


// Zaman Satırı

function rightNow() {
    // saat : dakika : saniye
    let date = new Date();
    //console.log(date)
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
    
    // Gün

    if (day === 1) {
      day = "Pazartesi";
    } else if (day === 2) {
      day = "Salı";
    } else if (day === 3) {
      day = "Çarşamba";
    } else if (day === 4) {
      day = "Perşembe";
    } else if (day === 5) {
      day = "Cuma";
    } else if (day === 6) {
      day = "Cumartesi";
    } else if (day === 7) {
      day = "Pazar";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  
    let time = `${hour}:${minute}:${second} ${day}`
    document.querySelector(".date").innerText = time;
    //document.querySelector(".date").textContent = time;
    setTimeout(rightNow, 1000);
}

rightNow();



