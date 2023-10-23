const test = {
    a:123,
    b:456
}

function tester(a,b){
    return `a: ${this.a} and b: ${this.b} | other a : ${a} and b : ${b}`
}

//bind returns a function
const bindExecutor = tester.bind(test,80,90)
console.log(bindExecutor)

//call
console.log(tester.call(test,80,90))

//apply
console.log(tester.apply(test,[80,90]))

//polyfill for bind
Function.prototype.myBind = function(scope,...args){
    //dynamically creating _this property inside test object and assign value to this
    scope._this = this;
    //since bind returns a function
    return function () {
        return scope._this(...args);
    }
}

//polyfill for call
Function.prototype.myCall = function(scope,...args){
    scope._this = this;
    return scope._this(...args)
}

//polyfill for apply -> when args is parameter don't put ...
Function.prototype.myApply = function(scope,args){
    scope._this = this;
    return scope._this(...args)
}
