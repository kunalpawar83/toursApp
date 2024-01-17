/* eslint-disable*/

import { login , logout } from "./login";
import { updateSettings  } from "./updateSetting";

const loginForm  = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');
const updateData= document.querySelector('.form-user-data');
const updatePassword =  document.querySelector('.form-user-password')

if(loginForm){
    loginForm.addEventListener('submit',e=>{
        e.preventDefault();
        const email =  document.getElementById('email').value;
        const password =  document.getElementById('password').value;
        login(email,password);
    })
};

if(logoutBtn){
    logoutBtn.addEventListener('click',logout);
}


if(updateData){
    updateData.addEventListener('submit',e=>{
        e.preventDefault();
        const name =  document.getElementById('name').value;
        const email =  document.getElementById('email').value;
        updateSettings ({name,email},'data');
    })
}

if(updatePassword){
    updatePassword.addEventListener('submit',e=>{
        e.preventDefault();
        const passwordCurrent  =  document.getElementById('password-current').value;
        const password  =  document.getElementById('password').value;
        const passwordConfirm  =  document.getElementById('password-confirm').value;
        updateSettings ({passwordCurrent,password,passwordConfirm},'password');
    })
}