const Sys = {};
const ua = navigator.userAgent.toLowerCase();
let s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
            (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

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

/**
 * @return {boolean}
 */
function EmailAdded(input) {
    if (Sys.chrome) {
        let ipt = input.value;
        let elt = document.getElementById("EmailList");
        elt.DataSource = "";
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
        if (!ipt.match(/@/)) {
            k = "@";
        } else {
            k = "";
            EmailList = [
                {value: ""},
            ];
        }
        for (let i = 0; i < EmailList.length; i++) {
            let List = EmailList[i];
            let opt = document.createElement("option");
            opt.setAttribute("lable", ipt + k);
            opt.setAttribute("value", ipt);
            elt.appendChild(opt);
            opt.label += List.value;
            opt.value += k + List.value;
        }
    } else return false;
}

