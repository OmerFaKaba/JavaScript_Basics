/*
let a = Math.floor(7.7)
console.log(a)
*/


let sayi = Number(prompt("Lütfen sayi girin: "))
let sonuc = true
for (let i = 2; i <= Math.floor(sayi / 2); i++) {
    if (sayi % i == 0) {
        //Asal değildir
        sonuc = false
        break;
    }
}
if (sonuc) {
    alert(sayi + " asaldir.")
} else {
    alert(sayi + " asal degildir.")
}