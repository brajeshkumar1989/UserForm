'use strict';

const jsobj=[{
    fullname:'Rajesh Singh',
    address:'Ranchi',
    email:'rajesh.singh@yml.com',
    pin:1111,
    gettoknow:'YouTube Video',
},
{fullname:'Sopan Lohar',
address:'Toopkadih',
email:'sopan.lohar@gmail.com',
pin:1111,
gettoknow:'YouTube Video',}];

const createUserIds=function(accs){
    accs.forEach((acc)=>{
        acc.username=acc.fullname.toLowerCase().split(' ').map(name=>name[0]).join('');
        console.log(acc.username);
    });
};

createUserIds(jsobj);
function formtojson(el){
    var jsobj1={ };
    var t1=el.querySelectorAll("[name]");
    for (var i=0 ;i<t1.length;i++ ){
        jsobj1[t1[i].name]=t1[i].value;
    }

    console.log(jsobj1);
}
function filldatafromjson(jsobj,elm){
    for (var k in jsobj){
        if (jsobj.hasOwnProperty(k)) {
            var t1=elm.querySelector("[name='"+k+"']");
            if(t1!==null && t1!==undefined){
                t1.value=jsobj[k];
            }
            //  alert("Key is " + k + ", value is " + jsobj[k]);
        }
    }
}    

///////////////////////////////////////////////////////
// Functions

// const updateUI=function(acc){

//     //change heading
//     uf_regHeaderUserName.innerHTML=acc.fullname.split(' ')[0];
//     uf_inp_useremail.value=acc.email;
//     uf_SelectOptions.values=acc.gettoknow;

//     //fill detail

//     uf_inp_userFullName.value=acc.fullname;
// }


// ///////////////////////////////////////////
// //Event handler
let currentAccount;

document.querySelector('.login__btn').addEventListener('click',function(e){
    e.preventDefault();

    currentAccount=jsobj.find(acc=> acc.username===document.querySelector('.login__input--user').value);
    console.log(currentAccount);

    if(currentAccount?.pin ===Number(document.querySelector('.login__input--pin').value)){
        //Display UI and detail
        document.querySelector('.app').style.opacity=100;

        
        //clear input fieldrs
        document.querySelector('.login__input--user').value=document.querySelector('.login__input--pin').value='';
        document.querySelector('.login__input--pin').blur();

        //UI update
        filldatafromjson(currentAccount,document.querySelector(".app"))

        // updateUI(currentAccount);
    }
})


document.querySelector('.btn--form').addEventListener('click',function(e){

    e.preventDefault();
    formtojson(document.querySelector('.app'))
})




