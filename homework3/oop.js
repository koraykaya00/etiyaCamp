// Object Oriented Programing

// Constructor

var student = {
    firstName:"Koray",
    lastName:"Kaya",
    fullName:function(){
        return this.firstName + ' ' + this.lastName;    
    }
}

//nesne icerisinde kullanilan this keywordu nesnenin kendisidir.

alert(student.fullName());


// Object Constructor

function Customer (first,last,city,country,age){    // kullanicidan aldigimiz parametreler nesne degil.
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}
//olusturulan Customer nesnesinin first, last parametreleri ile this.first'un alakasi yok.

var  someCustomer = new Customer("Koray","Kaya","Eskişehir","Turkey", 21)

alert(someCustomer.country);