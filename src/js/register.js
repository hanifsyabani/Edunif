// form-password
const formPassword= document.querySelector('.passwordInput');
const eyeIcon = document.querySelector('.eye');

eyeIcon.onclick=()=>{
  const type = formPassword.type=='password'? formPassword.type='text':formPassword.type='password';
}

//form-confirm password
const inputPass = document.getElementById('password')
const eye = document.getElementById('eyes');

eye.addEventListener('click',function(){
  if(inputPass.type=="password"){
    inputPass.type = "text";
  }else{
    inputPass.type = "password";
  }
});


// login


 
