function formValidation(){
var name = document.myform.name.value;

if(name == null || name == ""){
    alert("Name Can't be blank");
    return false;
}else{
    alert("form submitted sucsessfully");
    return true;
}
}