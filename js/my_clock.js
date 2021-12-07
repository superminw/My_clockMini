function my_clock(el){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    el.innerHTML = h+":"+m+":"+s;
    setTimeout(function(){my_clock(el)}, 1000);//<code>my_clock</code>函数1000毫秒之后又会再次调用自身，这样<code>clock_div</code>中显示的时间就会被更新
}

var clock_div = document.getElementById('time_div');
my_clock(clock_div);

//指针旋转部分
function rotate(){
  var dateInfo = new Date();
var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
  min = dateInfo.getMinutes(),
  sec = dateInfo.getSeconds(),
  milsec = dateInfo.getMilliseconds();
var hrAngle = hr * 30 + (min * 6 / 12),
    minAngle = min * 6 + (sec * 6 / 60),
    secAngle = sec * 6 + (milsec * 0.36 / 1000);
function setAngle(wrapper, angle) {
    document.querySelector("." + wrapper).style.transform = "rotate(" + angle + "deg)";
  }
setAngle("hr-wrapper", hrAngle);
setAngle("min-wrapper", minAngle);
setAngle("sec-wrapper", secAngle);
}
rotate();
setInterval(() => {
    // 获取当前时间
rotate()
}, 1000);
