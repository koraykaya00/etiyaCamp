// Donguler

// For

// birbirine benzeyen isleri ardi ardina belirli bir sart dahilinde calismamizi saglar.
// bir baslangic ve bir bitis noktamiz vardir. sayac mevcutsa kac kac artacagini belirledigimiz sayac vardir.
for (var i = 0; i <= 10; i++){
    alert(i)
}

// break & continue

// break ilgili dongu blogunu orada bitirmeye yarar.
// yani asagidaki ornekte i 5 oldugunda donguyu kir.
// continue belirli bir sart saglandiginda dongunun basina doner.
// asagidaki ornekte continue kismi devreye girdiginde 5 i ekrana yazdirmadan 6 dan saymaya devam eder.

for (var i = 0; i <= 10; i++){
    if (i ==5) {
        break;
        // continue;
    }
    alert(i)
}


// While

// bir sart saglandigi iken donguyu calistir.
// asagidaki ornekte sayi 10 dan kucuk oldugu surece yazdir.

var number = 1 ;

while (number < 10) {
    alert(number);
    number = number + 1;
}

// Do While 

// whileden farkli olarak while saglandigi surece sart devam edecek ancak do kisminda sart saglansa da 
// saglanmasa da calisacaktir.

var age = prompt("your age ?"); // kullanicinin yasini soralim
var result = "";

do{
    result += age;              // string ifadeleri toplar
    result += "-";              // araya cizgi cekip geri saymaya devam eder
    age--;                      // yasi geriye dogru saydiralim
}
while(age > 0);
alert(result);