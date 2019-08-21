function checkForWechat() {
    function is_ios() {
        return (navigator.userAgent.indexOf('iPhone') > -1);
    }

    function is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    var isWeixin = is_weixin();
    if (isWeixin) {
        if (is_ios())
            document.getElementById("system-browser").innerHTML = "<img class='browser-icon' src='assets/safari_icon_small.png'/>Safari";
        document.getElementById("mask").style.display = "block";
        document.getElementById("prompt").style.display = "block";
    }
}