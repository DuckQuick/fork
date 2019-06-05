
function check() {
    let name = document.forms["message-form"]["name"].value;
    let email = document.forms["message-form"]["email"].value;
    let contents = document.forms["message-form"]["contents"].value;
    if(name == null || name === ""){
        alert("君为无名无姓之人？");
        return false;
    }
    else if(!email.match(/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/)){
        alert("警察叔叔查户口，请填写正确格式的邮箱");
        return false;
    }
     else if(contents.length < 15){
        alert("哎呀，不够十五字呢");
        return false;
    }
    else {
        alert("提交成功");
    }
}


