let metin = "Şuanda Yalova 'da JavaScript eğitimi almaktayım."

let harf = prompt("Harfi girin: ")

let sonuc = bul(harf);
alert("harf sayısı: " + sonuc)


function bul(harf) {
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i) == harf) {
            toplam += 1;
        }
    }
    return toplam;
}