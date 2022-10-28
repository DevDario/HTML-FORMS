let Form = document.querySelector('form');
let InputName = document.getElementById('full-name-input');
let InputAge = document.getElementById('age-input');
let SexOptions = document.getElementById('select-sex');
let EspeciallityOptions = document.getElementById('select-especiallity');
let ExperienceOptions = document.getElementById('select-experience');
let AlertName = document.getElementById('textName');
let AlertAge = document.getElementById('textAge');
let AlertAllOptions = document.getElementById('textAllOptions');
let AlertEspeciallity = document.getElementById('textEspeciallity');
let AlertExperience = document.getElementById('textExperience');
let AlertSex = document.getElementById('textSex');


Form.addEventListener('submit',(e)=>{
   
    if(InputName.value == '' && InputAge.value == '' && SexOptions.value == 'none' && EspeciallityOptions.value == 'none' && ExperienceOptions.value == 'none'){

        AlertAllOptions.textContent = "os campos estão vazios!"
    }else{
        AlertAllOptions.textContent = " "
        console.log(InputName.value);
        console.log(InputAge.value);
        console.log(SexOptions.value);
        console.log(EspeciallityOptions.value);
        console.log(ExperienceOptions.value);
    }

    ValidateEachInput(InputAge,AlertAge);
    ValidateEachInput(InputName,AlertName);
    ValidateEachSelectOption(SexOptions,AlertSex);
    ValidateEachSelectOption(EspeciallityOptions,AlertEspeciallity);
    ValidateEachSelectOption(ExperienceOptions,AlertExperience);



     e.preventDefault();
});

function ValidateEachInput (Input,AlertText){
    if(Input.value == ''){
        AlertText.textContent='campo vazio !'
    }else{
        AlertText.textContent=''
    }
}

function ValidateEachSelectOption (Input,AlertText){
    if(Input.value == 'none'){
        AlertText.textContent='campo vazio !'
    }else{
        AlertText.textContent=''
    }
}