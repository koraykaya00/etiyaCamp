// Closures

// function add(){
//     var counter = 0;
//     counter +=1;
//     return counter;
// }

// function someOtherFunction(){
//     counter += 10;
// }

var add = (function(){
    var counter = 0;
    return function(){
        return counter += 1;
    }
})()