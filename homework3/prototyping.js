// Prototyping

function Customer (first,last,city,country,age){   
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}

var  someCustomer = new Customer("Koray","Kaya","Eskişehir","Turkey", 21);

Customer.prototype.email = "koray@gmail.com";
Customer.prototype.fullName = function(){
    return this.first + " " + this.last;
}

alert(someCustomer.city);
alert(someCustomer.email);
alert(someCustomer.fullName());

