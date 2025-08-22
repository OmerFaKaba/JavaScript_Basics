let sayi = prompt("Sayi giriniz: ")
let toplam = 0

for (let i = 0; i < sayi.length; i++) {
    let rakam = Number(sayi.charAt(i))
    toplam += rakam * rakam * rakam
}

if (Number(sayi) == toplam) {
    alert("Armstrong sayisidir.")
} else {
    alert("Armstrong ssayisi degildir.")
}