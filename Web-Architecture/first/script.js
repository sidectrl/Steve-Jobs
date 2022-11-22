let x = 2;
let y = 3;
let z = sum(x, y)

console.log(z);
function sum(a, b) {
    return a + b;
}

(() => { //funzione anonima
    console.log("dio cane");
})()

let user = {
    name: 'carlo',
    surname: 'esposito',
    address: {
        street: 'via del monte',
        number: 5,
    },
    age: 69,
}

console.log(user)
$.ajax({
    url: "https://jsonplaceholder.typicode.com/comments/1",
    success: function (result) {
        console.log(result);
        document.getElementById("paragraph1").innerHTML = result.body;
    }
});