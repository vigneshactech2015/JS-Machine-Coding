const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn')
const imgList = ["1","2","3","4"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})

//my method 
//method 2
const imageList = ["https://tse2.mm.bing.net/th?id=OIP.4z2feTp_Mw25d-lmn1wMdQHaJI&pid=Api&P=0&h=180","https://tse3.mm.bing.net/th?id=OIP.ZBI4gBIQ_Dk1FoUCLlsa6AHaE1&pid=Api&P=0&h=180","https://tse4.mm.bing.net/th?id=OIP.dYWvYkXgj1jP66ZZ6PzY0QHaGc&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.7stwxZm-L1BqyYwVuRKYNgHaE7&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.EyWlvOAeyEIojrKwUmm-fAHaGl&pid=Api&P=0&h=180"]
let index = 0;

const loadImage = () => {
    console.log(index)
    let createContainer = document.createElement('div')
    createContainer.className = "container"
    createContainer.innerHTML = `<img class="styleImage" src=${imageList[index]} alt="image"/>
    <button class="prev" onclick="prevHandler()">Prev</button>
    <button class="next" onclick="nextHandler()">Next</button>
    `
    document.body.append(createContainer)
    
}

loadImage()

function prevHandler(){
    index--
    if(index<0){
        index = (imageList.length-1)
    }
   loadImage()
    document.querySelector('.container').remove()    
}

function nextHandler(){
    index++
    if(index == imageList.length-1){
        index = 0
    }
   loadImage()
   document.querySelector('.container').remove()
}
