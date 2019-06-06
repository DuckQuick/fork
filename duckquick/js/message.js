/*
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
*/
function CheckRight(input) {

    if(input.type === 'email') {
        if (!input.value.match(/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/)) {

        }
        else {

        }
    }
}

function EmailAdded(input) {
    let ipt=input.value;
    let elt=document.getElementById("EmailList");
    elt.DataSource="";
    let k = "@";
    let EmailList = [
        {value: "qq.com"},
        {value: "163.com"},
        {value: "126.com"},
        {value: "sohu.com"},
        {value: "yahoo.com"},
        {value: "hotmail.com"},
        {value: "gmail.com"},
        {value: "googlemail.com"},
        {value: "msn.com"},
    ];
    if(!ipt.match(/@/)){
        k = "@";
    }
    else {
        k="";
        EmailList = [
            {value:""},
        ];
    }
    for(let i=0;i<EmailList.length;i++){
        let List = EmailList[i];
        let opt=document.createElement("option");
        opt.setAttribute("lable",ipt + k + List.value);
        opt.setAttribute("value",ipt + k + List.value);
        elt.appendChild(opt);
    }
}

