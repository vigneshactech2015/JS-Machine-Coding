//It is a function which takes one argument at a time and expects/return another function.
//It is an example of higher order function
//Pros:
//1.Reusable with fixed number of arguments
//2.TO make a pure function

//Example 1
function infiniteSum(a){
  return function(b){
    if(b) return infiniteSum(a+b)
    return a
  }
}

console.log(infiniteSum(5)(2)(7)(4)())


//Example 2
function execute(operation){
  return function(a){
    return function(b){
      if(operation === "sum") return a+b
      else if(operation === "multiply") return a*b
      else if(operation === "division") return a/b
      else return "Invalid operation"
    }
  }
}
//Fixed number of argument with reusablility
let mul = execute("multiply")
console.log(mul(1)(5))

//Example 3 --> DOM Manipulation

//html
<h1 id="heading">Hello World</h1>

//JS

function updateElementText(id){
  return function(content){
    document.querySelector("#"+id).textContent = content;
  }
}

const updateHeader = updateElementText("heading")

updateHeader("Hello World Updated")















