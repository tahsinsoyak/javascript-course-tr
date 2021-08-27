/* String Fonksiyonları */

var firstName = "Suntheo"
var firstNameLength = 0;

//veri uzunluğu fonksiyonunu kullanarak sayı değişkenine ekliyoruz
firstNameLength = firstName.length;
console.log(firstNameLength);
//index numarasındaki harfi yazdırdık
console.log(firstName[0]);
//son harfi bulmak için uzunluğundan bir düşüyoruz [0'lı index değeri için]
console.log(firstName[firstName.length - 1]);