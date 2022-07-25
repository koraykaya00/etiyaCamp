// Function Signature

function functionName(parameter1,parameter2) {  // fonksiyon ismi ve parametreleri veririz.
    // Do Something
    return parameter1 * parameter2;             // return zorunlu degildir. 
}

alert(functionName(2,3));                       // output : 6

// Function without return

function functionWithOutReturn(parameter1,parameter2) {
    alert("This is a function without 'return' statement"); // string bir ifade yazdirmak icin kullanilan kisim
}
    // parametreleri gonderdik ama kullanmak zorunda degiliz. Asagidaki ornektede kullanmadik.

functionWithOutReturn();

// Parameter Defaults

function functionName2(x, y) {  // ayni dosyada ayni isimli fonksiyon isimleri hata vermez ama yanlis outputa sonuc olabilir.
    if(y === undefined) {       // y nin parametresine deger verilmemisse
        y = 0;                  // y degerini sifir al
    }
}

// The Arguments Object

x = findMax (1,123, 500, 115, 44, 88);

function findMax() {
    var i, max = 0;
    for (i = 0; i < arguments.length; i++){    // ozel kelimedir. arguments olarak degisken tanimlayamayiz.
        if ( arguments[i] > max) {
            max = arguments [i];
        }
    }
    return max;
}

// gonderdigimiz fonksiyonlar arguman olarak tutulur.

function koray(params) {
    console.log("Merhaba")
    
}