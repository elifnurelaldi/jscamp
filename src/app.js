console.log("Merhaba Kodlama.io")

var dolarDun = 9.20
dolarDun ="Ankara" //js de değişkenini belli etsen bile sonradan değişrirebiliyosun(JS TypeSafe değildir.)
var dolarBugun = 9.30

console.log(dolarDun) //output Ankara olucak

// var yerine let de kullanabiliriz, genelde let kullanılıyor. Artık let kullan.

// const değişkeni typesafe dir ama ona başka bişey atayamazsın.

//array - isimlendirme yaparken çoğul kullan(camelCasing-ilk harf küçük sonra büyük)
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) 
{
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
console.log(konutKredileri)

