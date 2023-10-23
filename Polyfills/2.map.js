Array.prototype.myMap = function(callback){
    let newArray = [];
    for(let item of this){
        //this points to arr
        newArray.push(callback(item))
    }
    return newArray;
}

const arr = [10,20,30,40];

const doubleArr = arr.myMap(currentValue => currentValue*2);
console.log(doubleArr);