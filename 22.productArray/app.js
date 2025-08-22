let product1 = {
    isim: "Acer Swift",
    kategori: "Teknoji",
    fiyat: 6219
}

let product2 = {
    isim: "Acer Nitro 5 ",
    kategori: "Teknoji",
    fiyat: 15.475
}

let product3 = {
    isim: "Acer Gaming",
    kategori: "Teknoji",
    fiyat: 13.999
}

let product4 = {
    isim: "Lenova V15",
    kategori: "Teknoji",
    fiyat: 4.399
}

let product5 = {
    isim: "Lenova V14",
    kategori: "Teknoji",
    fiyat: 4.399
}

let product6 = {
    isim: "Lenova Idepad",
    kategori: "Teknoji",
    fiyat: 4.510
}

let products = [product1, product2, product3, product4, product5, product6]
let productFilter = []

let kullaniciUrunIsmi = prompt("Ürün giriniz:")

function getFilterProduct(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            productFilter.push(urun);
        }
    });
}


function writeProduct(urunler) {
    urunler.forEach(function (urun) {
        console.log("------------------------------------------------")
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori)
    })
}


getFilterProduct(products)
writeProduct(productFilter)