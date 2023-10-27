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













co
