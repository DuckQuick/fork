const Sys = {};
const ua = navigator.userAgent.toLowerCase();
let s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
            (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;


function emailAdded(input) {
    let ipt=input.value;
    let elt = document.getElementById("emailList");
    elt.style.visibility = "visible";
    elt.innerHTML = "";
    const EmailList = [
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
    if(ipt && elt.innerHTML === "") {
        for(let i=0 ; i<EmailList.length; i++) {
            let List = EmailList[i];
            let p = document.createElement("p");
            if(ipt.match(/@/)) {
                p.innerHTML = ipt + List.value;
            }else {
                p.innerHTML = ipt + "@" + List.value;
            }
            p.onclick = function () {
                input.setAttribute("value",p.innerHTML);
                document.getElementById("emailInput").value=p.innerHTML;
                elt.style.visibility = "hidden";
            };
            elt.appendChild(p);
            }
        }
    if(ipt.match(/@(.+)|[^a-zA-Z0-9@]/)){
        elt.innerHTML = "";
    }
}