class MyPromise{
    resolvedData;
    thenFunc;
    isResolved = false;

    constructor(executor){
        
        const resolve = (value) => {
            this.resolvedData =  value;
            this.isResolved = true;
            if(typeof this.thenFunc === 'function'){
                this.thenFunc(this.resolvedData)
            }
            
        }

        executor(resolve)
    }

    then(fn){
        this.thenFunc = fn;
        if(this.isResolved){
            this.thenFunc(this.resolvedData)
        }
    }
}


new MyPromise((resolve)=>{
    setTimeout(()=>{
        resolve(10)
    },1000)
}).then((data)=>console.log(data));