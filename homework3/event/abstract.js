// Abstract Classes

//Newlenemez

//İcerisinde tamamlanmis ve tamamlanmamis operasyonları icerir. Tamamlanmamislari miras alan sinif olarak uygular.

var Person = {
    name: "None",
    email: "None",
    semdEmail: function(){
        alert ("Mail sent to :" + this.name + "/" + this.email);
    }
}

function Customer(name,email){  //tamamlanmamislari set ettigimiz kisim
    this.name = name;
    this.email = email;
}

function Employee (name,email) {
    this.name = name;
    this.email = email;
}

Customer.prototype = Person;    //inherite
var someCustomer = new Customer ("Koray","koray@gmail.com");
someCustomer.sendEmail();

// inherite edip customer, employee nesnesi olustur.

Employee.prototype = Person     //inherite
var someEmployee = new Employee("Nuri","nuri@gmail.com")
someEmployee.sendEmail();