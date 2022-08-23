fetch('http://localhost:5000/products/fruits')

.then(function (response) {
    return response.json();
})
.then(function (data) {
console.log(data);

let fruitList = document.getElementById('fruList');
data.forEach(i=>{
    let fruit = document.createElement('li');
    fruit.innerText=`${i.name}`
    fruitList.appendChild(fruit)
})
})
.catch(function (error) {
console.log('error', error);

});

fetch('http://localhost:5000/products/vegetables')
.then(function (response) {
    return response.json();
})
.then(function (data) {
console.log(data);

let productList= document.getElementById('vegList');
data.forEach(i=>{
    let product = document.createElement('li');
    product.innerText= `${i.name}`
    productList.appendChild(product)
    
})
})
.catch(function (error) {
console.log('error', error);
    
});
