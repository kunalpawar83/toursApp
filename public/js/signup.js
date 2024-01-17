/* eslint-disable*/
// const signup  = async(name,email,password,passwordConfirm)=>{
//     try{
//        const res =await axios({
//         method:'POST',
//         url:'http://127.0.0.1:3000/api/v1/users/signup',
//         data:{
//             name ,
//             email,
//             password ,
//             passwordConfirm
//         }
//        })

//     }catch(err){
//         console.log('error',err.response.data.message);
//     }
// }



// document.querySelector('.form').addEventListener('submit', e=>{
//     e.preventDefault();
//     const name =  document.getElementById('User__name').value;
//     const email =  document.getElementById('email').value;
//     const password =  document.getElementById('password').value;
//     const passwordConfirm =  document.getElementById('password__confirm').value;
//     signup(name,email,password,passwordConfirm);
// })