const validate=()=>{
    const location=document.getElementById("location").value;
    const pickup=document.getElementById("pickup").value;
    const date=document.getElementById("date").value;

    const locationError=document.getElementById("locationerror")
    const pickuperror=document.getElementById("pickuperror")
    const dateerror=document.getElementById("dateerror")

    let locationstat=pickupstat=datestat=false;

    if(location===""){
        locationError.innerHTML="*Location is required"
    }else if(location.match(/^[A-Za-z]+$/)){
        locationError.innerHTML="";
        locationstat=true
    }else{
        locationError.innerHTML="*Location must be alphabets";
    }

    if(pickup===""){
        pickuperror.innerHTML="*Pickup is required"
    }else{
        pickuperror.innerHTML=""
        pickupstat=true;
    }
    
    if(date===""){
        dateerror.innerHTML="*Date is required"
    }else{
        dateerror.innerHTML=""
        datestat=true;
    }

    if(locationstat&&pickupstat&&datestat){
        return true
    }else{
        return false
    }
}



const Listbike=()=>{
    const FullName = document.getElementById("FullName").value;
    const PhoneNum = document.getElementById("PhoneNum").value;
    const BikeNum = document.getElementById("BikeNum").value;
    const BikeModel = document.getElementById("BikeModel").value;
    // const radioBtn = document.getElementById("radioBtn").value;
    
    const FullNameError = document.getElementById("FullNameError");
    const PhoneNumError = document.getElementById("PhoneNumError");
    const BikeNumError = document.getElementById("BikeNumError");
    const BikeModelError = document.getElementById("BikeModelError");
    // const radioBtnError = document.getElementById("radioBtnError");

    let FullNamestat=PhoneNumstat=BikeNumstat=BikeModelstat=false;

    if(FullName===""){
        FullNameError.innerHTML="*Name is required"
    }else if(FullName.match(/^[a-zA-Z]+$/)){
        FullNameError.innerHTML=""
        FullNamestat=true;
    }else{
        FullNameError.innerHTML="*Name must be alphabets"
    }

    
    if(PhoneNum===""){
        PhoneNumError.innerHTML="*Phone number is required"
    }else if(PhoneNum.match(/^[0-9]+$/)){
        if(PhoneNum.length===10){
            PhoneNumError.innerHTML=""
            PhoneNumstat=true;
        }else{
            PhoneNumError.innerHTML="*Phone number must be 10 digits"
        }
    }else{
        PhoneNumError.innerHTML="Phone number must be numbers"
    }

    if(BikeNum===""){
        BikeNumError.innerHTML="*Bike number is required"
    }else{
        BikeNumError.innerHTML="";
        BikeNumstat=true;
    }

    if(BikeModel===""){
        BikeModelError.innerHTML="*Bike number is required"
    }else{
        BikeModelError.innerHTML="";
        BikeModelstat=true;
    }

    // if(!radioBtn.checked){
    //     radioBtnError.innerHTML="*Agree our T&C";
    // }else if(radioBtn.checked){
    //     radioBtnError.innerHTML="";
    //     radioBtnstat=true
    // }

    if(FullNamestat&&PhoneNumstat&&BikeNumstat&&BikeModelstat){
        return true
    }else{
        return false
    }
}

const Signup=()=>{
    const SignupName=document.getElementById("SignupName").value;
    const SignupPhone=document.getElementById("SignupPhone").value;
    const SignupEmail=document.getElementById("SignupEmail").value;
    const SignupSetPass=document.getElementById("SignupSetPass").value;
    const SignupConfirmPass=document.getElementById("SignupConfirmPass").value;
    
    const SignupNameError=document.getElementById("SignupNameError");
    const SignupPhoneError=document.getElementById("SignupPhoneError");
    const SignupEmailError=document.getElementById("SignupEmailError");
    const SignupSetPassError=document.getElementById("SignupSetPassError");
    const SignupConfirmPassError=document.getElementById("SignupConfirmPassError");

    let SignupNamestat=SignupPhonestat=SignupEmailstat=SignupSetPassstat=SignupConfirmPassstat=false;

    if(SignupName===""){
        SignupNameError.innerHTML="*Name is required";
    }else if(SignupName.match(/^[a-zA-Z]+$/)){
        SignupNameError.innerHTML="";
        SignupNamestat=true;
    }else{
        SignupNameError.innerHTML="*Name must be alphabets"
    }

    if(SignupPhone===""){
        SignupPhoneError.innerHTML="*Phone number is required"
    }else if(SignupPhone.match(/^[0-9]+$/)){
        if(SignupPhone.length===10){
            SignupPhoneError.innerHTML=""
            SignupPhonestat=true;
        }else{
            SignupPhoneError.innerHTML="*Phone number must be 10 digits"
        }
    }else{
        SignupPhoneError.innerHTML="*Phone number must be numbers"
    }

    if (SignupEmail === ""){
        SignupEmailError.innerHTML = "*Email is required";
      }else {
        if(SignupEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
          SignupEmailstat = true;
        }else {
          SignupEmailError.innerHTML = "*Email format is wrong"
        }
      }

      if (SignupSetPass === ""){
        SignupSetPassError.innerHTML = "*password is required";
      }else {
        if(SignupSetPass.length < 8){
            SignupSetPassError.innerHTML = "*password must contain more than 8 chars"
        }else{
            SignupSetPassError.innerHTML = ""
            SignupSetPassstat = true;
        }
      }
      if (SignupConfirmPass.length!==0 || SignupSetPass === SignupConfirmPass){
          SignupConfirmPassstat = true;
      }else{
        SignupConfirmPassError.innerHTML = "*Password not matching";
      }

    if(SignupNamestat&&SignupPhonestat&&SignupEmailstat&&SignupSetPassstat&&SignupConfirmPassstat){
        return true
    }else{
        return false
    }
}

const Signin=()=>{
    const SigninEmail=document.getElementById("SigninEmail").value;
    const SigninSetPass=document.getElementById("SigninSetPass").value;
    const SigninEmailError=document.getElementById("SigninEmailError");
    const SigninSetPassError=document.getElementById("SigninSetPassError");
    let SigninEmailstat=SigninSetPassstat=false;


    if (SigninEmail === ""){
        SigninEmailError.innerHTML = "*Email is required";
      }else {
        if(SigninEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
          SigninEmailstat = true;
        }else {
          SigninEmailError.innerHTML = "*Email format is wrong"
        }
      }

      if (SigninSetPass === ""){
        SigninSetPassError.innerHTML = "*password is required";
      }else {
        if(SigninSetPass.length < 8){
            SigninSetPassError.innerHTML = "*password must contain more than 8 chars"
        }else{
            SigninSetPassError.innerHTML = ""
            SigninSetPassstat = true;
        }
      }

      if(SigninEmailstat&&SigninSetPassstat){
        return true
    }else{
        return false
    }
}