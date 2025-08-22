/*
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Ali"];


console.log(nums[10])
nums[10] = "Mehmet"
console.log(nums[10])
console.log(nums[nums.length - 1])

let dizi = [];
let dizi2 = new Array()

dizi1[0] = "1";
dizi2[0] = "2";
*/
//foreach


/*
let names = ["Enes", "Yakup", "Bilal", "Ayşenur"];

names.forEach(function (name) {
    console.log(name);
});
*/

// Array Methods

/*

push       : dizinin sonuna eleman ekler , ayrıca uzunluğunu döner
unshift    : dizinin başına eleman ekler , eleman sayısını geri döner

pop         : dizinin sonunda eleman siler , eleman sayısını döner
shift       : dizinin başından eleman siler , eleman sayısını döner

splice(index,incdex)  :eleman eklemek ve silme için kullanılır.

toString    : diziyi stringe çevirenilirisiniz
join        : diziyi stringe çevirir .Farkı ise araya elamn ekleyebilirisiniz

concat      : dizileri birleştirmek için kullanılır.
slice       : diziui istenilen yerden bölüp yeni bir dizi oluşturur.
length      : dizinin uzunluğunu veiri
reverse     : dizinin elemanalarını ters çevirir
split       : belirli bir ifadeye göre bölüp diziye çevirmek
indexOf     : elemanın index numarasını veeiri.
includes    : verilen eleman içeriyor mu ona bakar


*/

let cars = ["bmw", "toyota", "reanult", "mercedes", "porsche"];

cars.push("tofaş");

cars.unshift("fiat");
console.log(cars);