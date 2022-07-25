// Dynamic Typing

var customer = {
    id: 1,
    contactName:"Koray Kaya"
}

// herhangi bir noktada baska herhangi bir ozellik tanimlayabiliriz.
customer.country = "Turkey";

customer.sayHello = function(){          // sinifa bir de sayHello isimli metod tanimladigimiz kisim
    alert("Hello " + this.contactName)   //this bu fonksiyonu barindiran nesnedir.
}
customer.sayHello();