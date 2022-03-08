'use strict';

const account1={
    fullname:'Rajesh Singh',
    address:'Ranchi',
    email:'rajesh.singh@yml.com',
    pin:1111,
    gettoknow:'Friends & Family',
};

const account2={
    fullname:'Sopan Lohar',
    address:'Toopkadih',
    email:'sopan.lohar@gmail.com',
    pin:1111,
    gettoknow:'YouTube Video',
};

const account3={
    fullname:'Muzzamil Farook',
    address:'Jamshedpur',
    email:'muzzamil.farook@yml.com',
    pin:2222,
    gettoknow:'Podcast',
};

const account4={
    fullname:'Liza Pandy',
    address:'Dhanbad',
    email:'liza.pandy@yml.com',
    pin:3333,
    gettoknow:'Facebook',
};

const accounts=[account1,account2,account3,account4];
console.log(accounts);

const uf_userId=document.querySelector('.login__input--user');
const uf_userPassword=document.querySelector('.login__input--pin');
const uf_loginBtn=document.querySelector('.login__btn');

const uf_regHeaderUserName=document.querySelector('.firstname');

const uf_inp_userFullName=document.querySelector('.user--fullname');
const uf_inp_useremail=document.querySelector('.user--email');
const uf_SelectOptions=document.querySelectorAll('.knowfrom');
const uf_signupButton=document.querySelector('.btn--form');
const uf_appContainer=document.querySelector('.app');
const uf_address=document.querySelector('.user--address');


///////////////////////////////////////////////////////
// Functions

const updateUI=function(acc){

    //change heading
    uf_regHeaderUserName.innerHTML=acc.fullname.split(' ')[0];
    uf_inp_useremail.value=acc.email;
    uf_SelectOptions.values=acc.gettoknow;

    //fill detail

    uf_inp_userFullName.value=acc.fullname;
}
const createUserIds=function(accs){
    accs.forEach((acc)=>{
        acc.username=acc.fullname.toLowerCase().split(' ').map(name=>name[0]).join('');
        // console.log(acc.username);
    });
};

createUserIds(accounts);

///////////////////////////////////////////
//Event handler
let currentAccount;

uf_loginBtn.addEventListener('click',function(e){
    e.preventDefault();

    currentAccount=accounts.find(acc=> acc.username===uf_userId.value);
    console.log(currentAccount);

    if(currentAccount?.pin ===Number(uf_userPassword.value)){
        //Display UI and detail
        uf_appContainer.style.opacity=100;

        
        //clear input field
        uf_userId.value=uf_userPassword.value='';
        uf_userPassword.blur();

        //UI update

        updateUI(currentAccount);
    }
})





