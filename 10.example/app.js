//benzin istasyonu

/*
    1- Dizel  : 24.53
    2- Benzin : 22.25
    3- LPG    : 11.1


    Gelen müşteriden alacağımız bilgiler;
    1- Yakıt tipi
    2- Yaktı miktarı

*/


let diesel_price   = 24.51;
let gasoline_price = 22.25;
let lpg_price      = 11.1;

let total_price;
const yeni_satir = "\r\n";

let fuel_type = prompt("Hoşgeldiniz!" + yeni_satir +
                        "Hangi yakıtı almak istersiniz?" + yeni_satir +
                        "1-Dizel" + yeni_satir +
                        "2-Benzin" + yeni_satir +
                        "3-LPG" + yeni_satir +
                        "(Lütfen almak istediğiniz yakıtın ismini yazın)");

let fuel_amount = Number(prompt("Kaç litre almak istiyorsunuz?"));


if (fuel_type === "Dizel") {
    total_price = diesel_price * fuel_amount;
    console.log("Toplam borcunuz : " + total_price + " TL");
} else if (fuel_type === "Benzin") {
    total_price = gasoline_price * fuel_amount;
    console.log("Toplam borcunuz : " + total_price + " TL");
} else if (fuel_type === "Lpg") {
    total_price = lpg_price * fuel_amount;
    console.log("Toplam borcunuz : " + total_price + " TL");
} else {
    console.log("Geçersiz yakıt türü girdiniz.");
}

console.log("İyi yolculuklar!");
