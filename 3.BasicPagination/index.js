const url = "https://6527699c917d673fd76da7f9.mockapi.io/users"

let startIndex = 0;
let endIndex = 5;


const getUsers = () => {
    fetch(url).then((data)=>data.json()).then((res)=>loadUsers(res)).catch((err)=>console.log(err))
}

getUsers()

const loadUsers = (users) => {
    const usersContainer = document.createElement('div')
    usersContainer.className = 'usersContainer'
    users.slice(startIndex,endIndex).forEach((user)=>{
       const userList = document.createElement('div')
       userList.innerHTML = `
       <img src=${user.avatar} alt=${user.name}/>
       <p>${user.name}</p>
       `
       usersContainer.append(userList)
    })
    const paginationBtn = document.createElement('div')
    paginationBtn.innerHTML = `<br/><button onclick="prevBtnHandler()">Prev</button>
    <button onclick="nextBtnHandler()">Next</button>
    `
    usersContainer.append(paginationBtn)
    document.body.append(usersContainer)
}

const prevBtnHandler = () => {
    if(startIndex!==0){
        startIndex -= 5
        endIndex -= 5 
        getUsers()
        removePrevContainer()
    }
}

const nextBtnHandler = () => {
    startIndex += 5
    endIndex += 5
    getUsers()
    removePrevContainer()
}

const removePrevContainer = () => {
    const usersContainer = document.querySelector('.usersContainer')
    usersContainer.remove()
}