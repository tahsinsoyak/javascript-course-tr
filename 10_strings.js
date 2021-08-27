/* String Tanımlama */
var firstName = "Alan";
var lastName = "Turing";

/* Tırnak içine alma */
// ers slash işareti son karekter olmaktan çıkarıyor
var myStr = "I am a \"double quoted\" string inside \"double quotes\""
console.log(myStr);

//farklı bir yol olarak tek tırnak kullanılabilir
var myStr = 'I am a "double quoted" string inside "double quotes"'
console.log(myStr);

//farklı bir yol olarak ters tırnak
var myStr = `'"I am a "double quoted" string inside "double quotes"'`
console.log(myStr);

/* String İçi Değişkenler */
/*
\'  tek tırnak
\"  çift tırnak
\\  ters slash
\n  yeni satır
\r  satırbaşı
\t  tab boşluğu
\b  geri almak
\f  form feet
*/

/* Veri birleştirme */
var ourStr = "I come first. " +myStr+ "I come second.";
var myStr = " I come third.";
ourStr +=myStr;
console.log(ourStr,"\n------\n",myStr);