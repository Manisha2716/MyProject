function FormValidation(){
if(document.myForm.name.value ==""){
    document.getElementById("nmessage").innerHTML="Name is required";
    return false;
}
if(document.myForm.email.value ==""){
    document.getElementById("emessage").innerHTML="Email is required";
    return false;
}
if(document.myForm.Phone.value ==""){
    document.getElementById("pmessage").innerHTML="Phone Number is required";
    return false;
}
if(isNaN(document.myForm.Phone.value)){
    document.getElementById("pmessage").innerHTML="Phone Number must be numeric only";
    return false;
}
if(document.myForm.Phone.value.length!=10){
    document.getElementById("pmessage").innerHTML="Phone Number should have 10 digit";
    return false;
}
if(document.myForm.password.value ==""){
    document.getElementById("pwmessage").innerHTML="Password is required";
    return false;
}
if(document.myForm.password.value.length<8){
    document.getElementById("pwmessage").innerHTML="Password should have 8 characters";
    return false;
}
if(document.myForm.cpassword.value ==""){
    document.getElementById("cpmessage").innerHTML="Confirm Password is required";
    return false;
}
if(document.myForm.password.value!=document.myForm.cpassword.value){
    document.getElementById("cpmessage").innerHTML="Password doesnot match";
    return false;
}
return true;
}


