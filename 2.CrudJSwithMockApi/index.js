var url = "https://6527699c917d673fd76da7f9.mockapi.io/users"
    

//Read Users

function getUsers(){
fetch(url)
.then(data=>data.json())
.then(users=>loadUsers(users));
}

getUsers();

function loadUsers(users){

const userList=document.createElement("div");
//this is essential for removing the old list
userList.className='user-list';
users.forEach((user)=>{

    const userContainer=document.createElement('div');
    userContainer.setAttribute('class','user-container');
    userContainer.innerHTML=`
  
    <img class="user-image" src=${user.avatar} alt="image"/>
    <div>
    <h3 class="user-name">${user.name}</h3>
    <p class="user-time">${new Date(user.createdAt).toDateString()}</p>
    <button onclick="deleteUser(${user.id})">Delete</button>
    <button onclick="editUser('${user.id}','${user.name}','${user.avatar}')">Edit</button>
    </div>
    `;
    userList.append(userContainer);
})

document.body.append(userList);
}


//create user

function addUser(){
const type= document.querySelector('#submit-users').innerText==='Edit Users'?'Edit':'Add';

if(type==='Add'){
const name=document.querySelector('.new-user-name').value;
const avatar=document.querySelector('.new-profile-pic').value;
const createdAt=new Date();
const userDetails={
name:name,
avatar:avatar,
createdAt:createdAt
}
fetch(url,{
method:"POST",
headers:{
"Content-Type":"application/json",
},
body:JSON.stringify(userDetails)
})
.then(data=>data.json())
.then(users=>refreshUsers(users));
}
else{
const userId=localStorage.getItem("userId");

const name=document.querySelector('.new-user-name').value;
const avatar=document.querySelector('.new-profile-pic').value;
const createdAt=new Date();
const userDetails={
name:name,
avatar:avatar,
createdAt:createdAt
}

fetch(`${url}/${userId}`,{
method:"PUT",
headers:{
  "Content-Type":"application/json",
},
body:JSON.stringify(userDetails)
})
.then(data=>data.json())
.then(users=>refreshUsers(users));
}
}
//refresh users  --so that it gets appended without refreshing

function refreshUsers(){
//this is essential for removing the old list
document.querySelector('.user-list').remove();
formReset();
getUsers();
}

//delete user

function deleteUser(id){
fetch(`${url}/${id}`,{
method:"DELETE"
})
.then(data=>data.json())
.then(users=>refreshUsers(users));
}

//edit user

function editUser(userId,userName,userAvatar){
document.querySelector('#submit-users').innerText='Edit Users';
document.querySelector('.new-user-name').value=userName;
document.querySelector('.new-profile-pic').value=userAvatar;
localStorage.setItem('userId',userId)
}

function formReset(){
document.querySelector('#submit-users').innerText='Add Users';
document.querySelector('.new-user-name').value='';
document.querySelector('.new-profile-pic').value='';
localStorage.removeItem("userId");
}
