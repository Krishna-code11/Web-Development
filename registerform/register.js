const form = document.querySelector('#form')
const username = document.querySelector('#usernmae');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }

})
function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

if(usernameval===''){
    success=false;
    seterror(username,'please enter your name')
}
else{
    setSuccess(username)
}
if(emailval===''){
    success=false;
    seterror(email,'please enter valid email')
}
else{
    setSuccess(email)
}
if(passwordval===''){
    success=false;
    seterror(password,'Enter password')
}
else if(passwordval.lenght<8){
    success=false;
    seterror(password,'password must be above 8 characters')
}
else{
    setSuccess(password)
}
if(cpasswordval===''){
    success=false;
    seterror(cpassword,'enter same password')
}
else if (cpasswordval!=passwordval){
    success=false;
    seterror(cpassword,'enter same password')
}
else{
    setSuccess(cpassword)
}

 return success;
}

function seterror(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innertext=message;
    inputGroup.classlist.add('error')
    inputGroup.classlist.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innertext='';
    inputGroup.classlist.add('success')
    inputGroup.classlist.remove('error')
}
 