// Sart Bloklari

// if

var date = new Date();      // tarih ve saati javascriptte bu sekilde alabiliriz.
var hour = date.getHours();

if (hour >= 5 && hour <= 11){
    alert("Good Morning !");
}
else if (hour > 11 && hour < 17){
    alert("Good afternoon !")
}
else {
    alert("Good night !");
}


// Switch 

var language = prompt ("What şs your language ?");

switch(language) {                     // dil fransizca ise 24 ve 25. satir calisir. 
    case "fr": alert("French");
    break;                             // break switch'i kirar ve program frenchi bulunca durur

    case "tr":                          
        alert("Turkish");
        break;
    
    default:
        alert("English");
        break;
}


