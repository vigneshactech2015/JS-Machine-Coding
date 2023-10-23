//1.Polyfill for filter

Array.prototype.myFilter = function(callback){
  let newArray = [];
  //here 'this' points to arrData
  for(let i=0 ; i<this.length ; i++){
    if(callback(this[i],i,this)){
      newArray.push(this[i])
    }
  }

  return newArray;
}

const arrData = [0,1,2,3,4,5,6,7,8,9];
const resultArr = arrData.myFilter(function(item,index,arr){
  return item % 2 === 0;
})

console.log(resultArr)
