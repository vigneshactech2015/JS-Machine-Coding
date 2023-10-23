function sum(a,b){
    return a+b;
}

Array.prototype.myReduce = function(callback,initialValue) {
    
    if(this === null || this === undefined){
        throw new TypeError("reduce called on null or undefined")
    }
    
    if(!callback || typeof callback !== 'function'){
        throw new TypeError('callback is not a function')
    }

   
    if(!this.length){
         //reduce on empty array and no initial value
        if(arguments.length<2){
            throw new TypeError('reduce on empty array and with no initial value')
        }
        //reduce on empty array and with initial value
        else if(arguments.length === 2){
            return initialValue
        }
    }

    let k = 0;
    let acc = arguments.length < 2 ? this[k++] :initialValue;
    //this points to array that is executing this method
    while(k<this.length){
        acc = callback(acc,this[k]);
        k++;
    }
    return acc;
}

console.log([10,20,30,40].myReduce(sum,0))