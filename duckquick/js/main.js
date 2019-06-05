/* 用于logo-tip标签调用显示 */
function check_time(i){
    if(i<10){i='0'+i;}
    return i;
}
function start_time(){
    var today=new Date();
    var hour=today.getHours();
    var minute=today.getMinutes();
    var second=today.getSeconds();
    var year=today.getFullYear();
    var month=today.getMonth()+1;
    var day=today.getDate();
    minute=check_time(minute);
    second=check_time(second);
    document.getElementById('logo-tip').innerText='当前访问IP：'+returnCitySN["cip"]+'\n当前位置：'+returnCitySN["cname"]+'\n当前时间：'+year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
    time=setTimeout(function(){start_time()},500);
}

function ReturnTop(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(ReturnTop);
        window.scrollTo (0,currentScroll - (currentScroll/5));
    }
};