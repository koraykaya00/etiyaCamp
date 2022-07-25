// Interfaces

// nesnel programlama yapma acisindan onemli
//  Bagımlılıgın ortadan kalkması icin kullanilir.
//  Interfaces tek basina newlenemez.

function sendEmail(personInterface) {
  // müsteri,personel vb farkli ortamlara mail gonderebiliriz. 

  var to = personInterface.eMail; //newlendiginde constructor gibi calismaz.
  var name = personInterface.name; // email ve name ozelligi fonksiyonda uygulanmis olmasi lazim

  var send = function () {
    alert("Mail sent to: " + name + "/" + to);  // send vasitasiyla maili gonderelim.
  };
  send();
}
function Customer(name, eMail) {
  this.name = name;
  this.eMail = eMail;
}

function Employee(name, eMail, sadad) {
  //constructor, concrete(somut) sınıf
  this.name = name;
  this.eMail = eMail;    

  //herhangi bir ozellik de eklenebilir. yas, cinsiyet vs.


}
var someCustomer = new Customer("Koray", "koray@gmail.com");

var someEmployee = new Employee("Nuri", "nuri@gmail.com");

sendEmail(someCustomer);

sendEmail(someEmployee);
