var LogInoption = document.getElementById('login-op');
var Registeroption = document.getElementById('register-op');
var underline = document.querySelector('.underline');
var LoginContent = document.getElementById('LoginContent');
var SignUpContent = document.getElementById('Signup-Content')
var SideImageContent = document.getElementById('bg-img');
var SignupSideImageContent = document.getElementById('signup-bg-img');

SignUpContent.classList.add('hidde-signup');
SignupSideImageContent.classList.add('hidde-signup');

const switchPosition = () =>{
    underline.classList.add('switchPosition');

    //Animation
    /* LoginContent.classList.add('ChangeScreen');

    SideImageContent.classList.add('ChangeScreen');
    */
    underline.classList.remove('resetswitchPosition');

    setTimeout(()=>{
        LoginContent.style.display="none";
        SideImageContent.style.display="none";
        SignUpContent.style.display="block";
        SignupSideImageContent.style.display="block";
    },1000)
    
}

const resetswitchPosition = () =>{
    underline.classList.remove('switchPosition');
    
    //Animation
    /*LoginContent.classList.remove('ChangeScreen');

    SideImageContent.classList.remove('ChangeScreen');
*/
    underline.classList.add('resetswitchPosition');

    setTimeout(()=>{
        LoginContent.style.display="block";
        SideImageContent.style.display="initial";
        SignUpContent.style.display="none";
        SignupSideImageContent.style.display="none";
    },1000)
    
}

Registeroption.addEventListener('click',switchPosition);
LogInoption.addEventListener('click',resetswitchPosition);
