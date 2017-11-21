function checkForWechat() {
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
        document.getElementById("mask").style.display = "block";
        document.getElementById("top").style.display = "block";
    }
}