class MyPromise{
    resolvedData;
    isResolved = false;

    constructor(executor){
        
        const resolve = (value) => {
            this.resolvedData =  value;
            this.isResolved = true;
        }

        executor(resolve)
    }

    then(fn){
        if(this.isResolved){
            fn(this.resolvedData)
        }
    }
}


new MyPromise((resolve)=>{
    resolve(10);
}).then((data)=>{
    console.log(data)
})