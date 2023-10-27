//Time Optimization using closure

//before closure
function find(){
  let a = []
  for(let i=0 ; i<1000000; i++){
  a[i] = i * 1;
  }

  console.log(a[index])
}

console.time("6")
find(6)
console.timeEnd("6")
console.time("12")
find(12)
console.timeEnd("12")

//after closure

function find(){
  let a = []
  for(let i=0 ; i<1000000; i++){
  a[i] = i * 1;
  }

  return function(index){
    console.log(a[index])
  }
}

const closure = find()
console.time("6")
closure(6)
console.timeEnd("6")
console.time("50")
closure(50)
console.timeEnd("50")

//Example 2

for(var i = 0; i<3 ; i++){
  setTimeout(function log(){
    console.log(i)  
},i*1000)
}

output --> 3 3 3
because var is a function scope and not a block scope 
hence it has reference to i

for(let i = 0; i<3 ; i++){
  setTimeout(function log(){
    console.log(i)  
},i*1000)
}

output --> 0 1 2
because let is a block scope hence it has reference to block scope

//to get 0 1 2 in var itself we can make use of closures

for(var i = 0; i<3 ; i++){

  function inner(i){
    setTimeout(function log(){
      console.log(i)  
    },i*1000)
  }

  inner(i)
  
}
