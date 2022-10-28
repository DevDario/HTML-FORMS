let Form = document.querySelector('form');
let EmailInput = document.getElementById('email-input');
let PasswordInput = document.getElementById('password-input');
let CheckBoxInput = document.getElementById('checkbox-input');
let WarningMessageForEmailInput = document.getElementById('warning-email');
let WarningMessageForPasswordInput = document.getElementById('warning-password');
let WarningMessageForCheckBoxInput = document.getElementById('warning-checkbox');
let GeneralWarning = document.getElementById('warning-general');

Form.addEventListener('submit',(e)=>{

if(EmailInput.value == '' && PasswordInput.value == '' && CheckBoxInput.checked==false){
    GeneralWarning.textContent="you have to fill all the fields";
}else{
    InputVerificator(EmailInput,WarningMessageForEmailInput);
    InputVerificator(PasswordInput,WarningMessageForPasswordInput);
    CheckBoxInputVerificator(CheckBoxInput,WarningMessageForCheckBoxInput);
    GeneralWarning.textContent="";

}if(EmailInput.value != '' && PasswordInput.value != '' && CheckBoxInput.checked==true){
    alert("log in sucessfully completed !")
}

e.preventDefault();

});

function InputVerificator(Input,WarningMessage) {
    if(Input.value == ''){
        WarningMessage.textContent="you have fill this field";
    }else{
        WarningMessage.textContent='';
    }
}

function CheckBoxInputVerificator(CheckBox,Message){
    if(CheckBox.checked===false){
        Message.textContent="you have to agree with the terms and policy to continue"
    }
}