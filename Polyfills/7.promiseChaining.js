class MyPromise{
    resolvedData;
    rejectedData;
    resolveChain = [];
    rejectChain = [];
    isResolved = false;
    isRejected = false;

    //MyPromise.all([Promise.resolve(10),Promise.resolve(20),Promise.resolve(30)]).then((result)=>console.log(result))
    //[10,20,30] --> same order la execute pannum
    static all(promises){
        const fulfilled = [];
        const results = [];

        return new MyPromise((resolve,reject)=>{
            promises.forEach((promise,index)=>{
                promise.then((data)=>{
                  fulfilled.push(true)
                  results[index] = data;
                  
                  if(fulfilled.length === promises.length){
                    resolve(results)
                  }
                }).catch(error=>{
                    reject(error)
                })
            })
        })
    }

    //this is similar to 
    //MyPromise.resolve(10).then((data)=>console.log(data))
    static resolve(value){
        return new MyPromise(resolve=>resolve(value))
    }

     //this is similar to 
    //MyPromise.reject('something went wrong').catch((err)=>console.log(err))
    static reject(value){
        return new MyPromise((_resolve,reject)=>reject(value))
    }

    constructor(executor){
        
        const resolve = (value) => {
            this.resolvedData =  value;
            this.isResolved = true;
            if(this.resolveChain.length){
                this.resolveChain.reduce((acc,fn)=>{
                    return fn(acc)
                },this.resolvedData)
            }
            
        }

        const reject = (value) => {
            this.rejectedData =  value;
            this.isRejected = true;
            if(this.rejectChain.length){
                this.rejectChain.reduce((acc,fn)=>{
                    return fn(acc)
                },this.rejectedData)
            }
        }

        executor(resolve,reject)
    }

    then(fn){
        this.resolveChain.push(fn);
        if(this.isResolved){
            this.resolveChain.reduce((acc,fn)=>{
                return fn(acc)
            },this.resolvedData)
        }

        return this;
    }

    catch(fn){
        this.rejectChain.push(fn);
        if(this.isRejected){
            this.rejectChain.reduce((acc,fn)=>{
                return fn(acc)
            },this.rejectedData)
        }

        return this;
    }

    finally(fn){
        this.resolveChain.push(fn);
        this.rejectChain.push(fn);
        if(this.isResolved){
            this.resolveChain.reduce((acc,fn)=>{
                return fn(acc)
            },this.resolvedData)
        }
        if(this.isRejected){
            this.rejectChain.reduce((acc,fn)=>{
                return fn(acc)
            },this.rejectedData)
        }
    }
}


new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },1000)
}).then((data)=>data*2).then((data)=>console.log(data));

new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        reject("That is what she said")
    },1000)
}).then((data)=>data*2).then((data)=>console.log(data)).catch((err)=>console.log(err)).finally(data=>console.log(data));